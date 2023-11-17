import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pastel-green': '#eAf4e7',
        'button-blue': '#006661',
        'button-blue-hover': '#004643',
        'slight-gray': '#c5c5c5',
        'bright-green': '#59c050',
        'bright-red': '#ce1c1c',
      },
      boxShadow: {
        'dark': '0px 8px 8px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
}
export default config
