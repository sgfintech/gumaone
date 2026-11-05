import React, { useEffect, useRef, useState } from "react";
import { remoteFor } from "@/lib/apps";

/* An <img> that tries the self-hosted copy first and falls back to the CDN once. */
export const SmartImg = React.forwardRef(function SmartImg({ src, onLoad, ...rest }, ref) {
  const [cur, setCur] = useState(src);
  useEffect(() => setCur(src), [src]);
  return (
    <img
      ref={ref}
      {...rest}
      src={cur}
      onLoad={onLoad}
      onError={() => {
        const r = remoteFor(src);
        if (r && r !== cur) setCur(r);
      }}
    />
  );
});

/* Photo with a tone placeholder until it loads; never leaves a blank box. */
export default function Photo({ src, alt, className = "", imgClassName = "", eager = false, shape = "", children }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);
  return (
    <div className={`relative overflow-hidden ${shape === "payong" ? "payong-clip bg-tone-2" : "bg-tone-2"} ${className}`}>
      <SmartImg
        ref={ref}
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
      {children}
    </div>
  );
}
