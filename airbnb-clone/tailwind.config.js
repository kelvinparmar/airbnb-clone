/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rausch: { DEFAULT: '#FF385C', active: '#E00B41', disabled: '#FFD1DA', error: '#C13515' },
        ink: '#222222',
        body: '#3F3F3F',
        muted: '#6A6A6A',
        'muted-soft': '#929292',
        canvas: '#FFFFFF',
        'surface-soft': '#F7F7F7',
        'surface-strong': '#F2F2F2',
        hairline: '#DDDDDD',
        'hairline-soft': '#EBEBEB',
        'border-strong': '#C1C1C1',
        promo: '#FEF7F1',
        'promo-border': '#F4D9BF',
      },
      fontFamily: {
        cereal: ['Cereal','"Airbnb Cereal VF"','-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Helvetica','Arial','sans-serif'],
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '68px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-lg': ['32px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-md': ['26px', { lineHeight: '30px', fontWeight: '600' }],
        'display-sm': ['22px', { lineHeight: '26px', fontWeight: '600' }],
      },
      borderRadius: { card: '12px', pill: '9999px' },
      boxShadow: {
        card: '0 6px 20px rgba(0,0,0,0.08)',
        pill: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        pillHover: '0 2px 4px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.10)',
        cta: '0 1px 2px rgba(0,0,0,0.10)',
        booking: '0 6px 16px rgba(0,0,0,0.12)',
        soft: '0 2px 8px rgba(0,0,0,0.06)',
      },
      transitionTimingFunction: { airbnb: 'cubic-bezier(0.2, 0, 0, 1)' },
    },
  },
  plugins: [],
};
