/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        'heading': ['"Cabinet Grotesk"', 'sans-serif'],
                        'body': ['Outfit', 'sans-serif'],
                },
                colors: {
                        grawish: {
                                magenta: '#E040FB',
                                purple: '#7B1FA2',
                                dark: '#0A0A0A',
                                darker: '#050505',
                                card: 'rgba(255, 255, 255, 0.03)',
                                border: 'rgba(255, 255, 255, 0.08)',
                                glow: 'rgba(224, 64, 251, 0.4)',
                        },
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
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'orbit': {
                                '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' }
                        },
                        'orbit-reverse': {
                                '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
                                '100%': { transform: 'rotate(-360deg) translateX(200px) rotate(360deg)' }
                        },
                        'pulse-glow': {
                                '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(224, 64, 251, 0.4)' },
                                '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(224, 64, 251, 0.6)' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-10px)' }
                        },
                        'gradient-x': {
                                '0%, 100%': { backgroundPosition: '0% 50%' },
                                '50%': { backgroundPosition: '100% 50%' }
                        },
                        'shimmer': {
                                '0%': { backgroundPosition: '-200% 0' },
                                '100%': { backgroundPosition: '200% 0' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'orbit': 'orbit 20s linear infinite',
                        'orbit-reverse': 'orbit-reverse 25s linear infinite',
                        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                        'float': 'float 3s ease-in-out infinite',
                        'gradient-x': 'gradient-x 3s ease infinite',
                        'shimmer': 'shimmer 2s linear infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
