import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pine: '#0F241D',
        'pine-deep': '#081410',
        chalk: '#F3F4F0',
        'chalk-bright': '#FBFBF9',
        cobalt: '#2340F2',
        'cobalt-deep': '#1A30BA',
        sage: '#8EA79A',
        stone: '#E2E3DC',
        bark: '#C4C6BB',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-newsreader)', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        display: [
          'clamp(2.75rem, 8vw, 6.5rem)',
          { lineHeight: '0.9', letterSpacing: '-0.035em' },
        ],
        title: ['clamp(2rem, 4.6vw, 3.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        heading: [
          'clamp(1.375rem, 2.2vw, 1.875rem)',
          { lineHeight: '1.1', letterSpacing: '-0.015em' },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
