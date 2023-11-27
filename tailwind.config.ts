// tailwind.config.js

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'sm': '375px',    // 375px
      'md': '425px',    // 425px
      'cs': '550px',
      'lg': '768px',    // 768px
      'xl': '1024px',   // 1024px
      '2xl': '1440px',  // 1440px
      '3xl': '2560px',  // 2560px
    },
  },
  plugins: [],
};

export default config;
