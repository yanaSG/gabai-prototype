/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss}',
    './node_modules/@ionic/core/dist/ionic/**/*.js',
    "./projects/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
