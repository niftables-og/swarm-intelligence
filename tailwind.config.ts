import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#05D47B',
        'dark-gray': 'hsla(240, 9%, 18%, 0.3)',
        'light-line': 'hsla(232, 28%, 83%, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config
