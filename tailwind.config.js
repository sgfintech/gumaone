/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			obsidian: '#020617',
  			ink: '#2B1D14',
  			muted2: '#7A6553',
  			line: '#E8DCCB',
  			mist: '#F3E9DA',
  			cream: '#FBF6EE',
  			brand: {
  				DEFAULT: '#C8501E',
  				dark: '#A9420F',
  				soft: '#FBE3D6'
  			},
  			mango: '#F2A93B',
  			night: { DEFAULT: '#13203F', 2: '#1C2C55', 3: '#24376A' },
  			paper: '#F3F5F9',
  			haze: '#B8C2DA',
  			tone: { DEFAULT: '#F3F5F9', 2: '#E9EDF4', 3: '#DDE3EE' },
  			slate2: '#555F76',
  			sunink: '#B8400F',
  			sun: { DEFAULT: '#F25A26', 2: '#F57C50' },
  			leaf: {
  				DEFAULT: '#2F6B3A',
  				soft: '#E4EFE3'
  			},
  			coral: '#C8501E',
  			teal: {
  				DEFAULT: '#2DD4BF',
  				light: '#5EEAD4',
  				dark: '#14B8A6'
  			},
  			ghost: '#F8FAFC',
  			steel: '#94A3B8',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			heading: ['var(--font-heading)'],
  			spartan: ['"League Spartan"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			figtree: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			serif: ['var(--font-serif)'],
  			body: ['var(--font-body)'],
  			display: ['var(--font-display)'],
  			mono: ['var(--font-mono)']
  		},
  		boxShadow: {
  			card: '0 6px 16px rgba(0,0,0,0.12)',
  			pill: '0 3px 12px rgba(0,0,0,0.10)',
  			soft: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
