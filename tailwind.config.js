/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    colors: {
      'primary': '#164B60',    
      'secondary':'#1B6B93',   
      'third': '#4FC0D0',      
      'last': '#2D4356', 
      'white':'#ffffff', 
      'foot':'#000000', 
      'bone': '#f4f4f4',
      'boneText': '#424245'
    }, 
     
  
  },
 
  plugins: [],

}
