/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-3': '#e6c300',
        'color-2': '#202020',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        times: ['Times New Roman', 'serif'],
        garamond: ['Garamond', 'serif'],
        palatino: ['Palatino Linotype', 'serif'],
        sans: ['Arial', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'sans-serif'],
        gill: ['Gill Sans', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
        lucida: ['Lucida Console', 'monospace'],
        monaco: ['Monaco', 'monospace'],
        consolas: ['Consolas', 'monospace'],    
        comic: ['Comic Sans MS', 'cursive'],
        impact: ['Impact', 'fantasy'],
      }
    },
  },
  plugins: [],
}