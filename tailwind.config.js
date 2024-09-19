/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {
      
      xs: '320x',  
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
     
    extend: {
      xtend: {
        boxShadow: {
          'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }
      }
    },
  },
  plugins: [],
}

