// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.625rem', // 10px
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.underline-slide': {
          position: 'relative',
          '&::after': {
            content: "''",
            position: 'absolute',
            left: '0',
            bottom: '0',
            width: '0%',
            height: '2px',
            backgroundColor: 'currentColor',
            transition: 'width 0.3s ease-in-out',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
      });
    },
  ],
}
