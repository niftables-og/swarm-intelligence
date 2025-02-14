import type { Config } from 'tailwindcss'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    extend: {
      screens: {
        ...screens,
        xs: '23.4375rem', //375px,
      },
      fontSize,
      colors: {
        green: '#05D47B',
        'dark-gray': 'hsla(240, 9%, 18%, 0.3)',
        'light-line': 'hsla(232, 28%, 83%, 0.12)',
        'main-black': '#0B0B0C',
      },
      fontFamily: {
        rogan: 'var(--font-rogan)',
      },
    },
  },
  plugins: [fluid({ checkSC144: false })],
} satisfies Config
