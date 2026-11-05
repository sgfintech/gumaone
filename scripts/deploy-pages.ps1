<#
  sggwebs 3.0 - Cloudflare Pages deploy to the guma.one apex (+ www).

  One shot, idempotent. Run from the repo root in PowerShell:

    npm run deploy            # = scripts\deploy-pages.ps1

  CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID are read from .env.local
  (or the environment). Same token as the Kuya Eddie deploy works:
  Account -> Cloudflare Pages: Edit; Zone (guma.one) -> Zone: Read, DNS: Edit.

  What it does:
    1. Finds the account and the guma.one zone.
    2. Builds dist/ (vite).
    3. Creates the Pages project "sggwebs" if missing.
    4. Uploads dist/ with wrangler (direct upload, no Git needed).
    5. Attaches guma.one and www.guma.one as custom domains.
    6. Points DNS at the project: apex CNAME (flattened) + www CNAME, both proxied.
       An existing apex record that points elsewhere is NOT touched unless you
       pass -ReplaceDns, so a live site is never yanked by accident.

  Re-run any time; every step is safe to repeat.
#>
param([switch]$ReplaceDns)


$ErrorActionPreference = "Stop"

$Project  = "sggwebs"
$Hostname = "guma.one"
$WwwHost  = "www.guma.one"
$Zone     = "guma.one"
$Api      = "https://api.cloudflare.com/client/v4"

# Fall back to .env for the Cloudflare token / account id so nothing needs to be typed per session.
if (Test-Path ".env.local") {
  Get-Content ".env.local" | ForEach-Object {
    $line = $_.Trim()
    if ($line -and -not $line.StartsWith("#") -and $line.Contains("=")) {
      $k, $v = $line -split "=", 2
      $v = $v.Trim().Trim('"').Trim("'")
      if ($k.Trim() -eq "CLOUDFLARE_API_TOKEN" -and -not $env:CLOUDFLARE_API_TOKEN) { $env:CLOUDFLARE_API_TOKEN = $v }
      if ($k.Trim() -eq "CLOUDFLARE_ACCOUNT_ID" -and -not $env:CLOUDFLARE_ACCOUNT_ID) { $env:CLOUDFLARE_ACCOUNT_ID = $v }
    }
  }
}
if (-not $env:CLOUDFLARE_API_TOKEN) { throw "Set `$env:CLOUDFLARE_API_TOKEN first." }
$Headers = @{ Authorization = "Bearer $($env:CLOUDFLARE_API_TOKEN)"; "Content-Type" = "application/json" }

function Cf($Method, $Path, $Body = $null) {
  $params = @{ Method = $Method; Uri = "$Api$Path"; Headers = $Headers }
  if ($Body) { $params.Body = ($Body | ConvertTo-Json -Depth 10 -Compress) }
  try { $r = Invoke-RestMethod @params } catch {
    $msg = $_.ErrorDetails.Message; if (-not $msg) { $msg = $_.Exception.Message }
    throw "Cloudflare $Method $Path failed: $msg"
  }
  if (-not $r.success) { throw "Cloudflare $Method $Path : $($r.errors | ConvertTo-Json -Compress)" }
  return $r.result
}

Write-Host "`n[1/6] Token + account" -ForegroundColor Cyan
$verify = Cf GET "/user/tokens/verify"
if ($verify.status -ne "active") { throw "Token is $($verify.status)." }
$zone = (Cf GET "/zones?name=$Zone")[0]
if (-not $zone) { throw "Zone $Zone not visible to this token - check Zone Resources on the token." }
$AccountId = $zone.account.id
$ZoneId    = $zone.id
Write-Host "   account $($zone.account.name) ($AccountId)"
Write-Host "   zone    $Zone ($ZoneId)"

Write-Host "`n[2/6] Build" -ForegroundColor Cyan
if (-not (Test-Path "package.json")) { throw "Run this from the repo root (D:\All Apps\sggwebs3.0)." }
npx vite build
if ($LASTEXITCODE -ne 0) { throw "vite build failed." }

Write-Host "`n[3/6] Pages project" -ForegroundColor Cyan
$existing = $null
try { $existing = Cf GET "/accounts/$AccountId/pages/projects/$Project" } catch { }
if ($existing) {
  Write-Host "   exists: $($existing.subdomain)"
} else {
  $created = Cf POST "/accounts/$AccountId/pages/projects" @{ name = $Project; production_branch = "main" }
  Write-Host "   created: $($created.subdomain)"
}

Write-Host "`n[4/6] Upload with wrangler" -ForegroundColor Cyan
$env:CLOUDFLARE_ACCOUNT_ID = $AccountId
npx --yes wrangler@4 pages deploy dist --project-name $Project --branch main --commit-dirty=true
if ($LASTEXITCODE -ne 0) { throw "wrangler deploy failed." }

Write-Host "`n[5/6] Custom domains" -ForegroundColor Cyan
$domains = Cf GET "/accounts/$AccountId/pages/projects/$Project/domains"
foreach ($h in @($Hostname, $WwwHost)) {
  if (-not ($domains | Where-Object { $_.name -eq $h })) {
    Cf POST "/accounts/$AccountId/pages/projects/$Project/domains" @{ name = $h } | Out-Null
    Write-Host "   $h attached to project"
  } else { Write-Host "   $h already attached" }
}

Write-Host "`n[6/6] DNS" -ForegroundColor Cyan
$target = "$Project.pages.dev"
foreach ($pair in @(@{ name = $Hostname }, @{ name = $WwwHost })) {
  $all = @(Cf GET "/zones/$ZoneId/dns_records?name=$($pair.name)")
  # Only web records are ours to manage. MX / TXT (mail, SPF, verification) are never touched.
  $web = @($all | Where-Object { $_.type -in @("CNAME", "A", "AAAA") })
  $other = @($all | Where-Object { $_.type -notin @("CNAME", "A", "AAAA") })
  if ($other.Count -gt 0) { Write-Host "   $($pair.name): keeping $($other.Count) mail/text record(s) untouched" }
  $ok = $web | Where-Object { $_.type -eq "CNAME" -and $_.content -eq $target }
  if ($ok) { Write-Host "   $($pair.name): CNAME -> $target already in place"; continue }
  if ($web.Count -gt 0 -and -not $ReplaceDns) {
    Write-Host "   $($pair.name): existing web record(s) found - NOT replaced:" -ForegroundColor Yellow
    $web | ForEach-Object { Write-Host "     $($_.type) $($_.name) -> $($_.content) (proxied=$($_.proxied))" }
    Write-Host "     re-run with -ReplaceDns to point it at the Pages project." -ForegroundColor Yellow
    continue
  }
  foreach ($r in $web) { Cf DELETE "/zones/$ZoneId/dns_records/$($r.id)" | Out-Null; Write-Host "   $($pair.name): removed $($r.type) -> $($r.content)" }
  Cf POST "/zones/$ZoneId/dns_records" @{ type = "CNAME"; name = $pair.name; content = $target; proxied = $true; ttl = 1 } | Out-Null
  Write-Host "   $($pair.name): CNAME -> $target created (proxied)"
}

Write-Host "`nDone. https://$Hostname and https://$WwwHost (certificates issue within a minute or two)." -ForegroundColor Green
