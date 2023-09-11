/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '0.75em',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      container: {
        padding: '0.25rem', // Cambia el relleno (padding) por defecto
      },
      colors: {
        'igp-semaforo': {
          '50': '#04BC00',
          '100': '#BC9300',
          '200': '#FD6F08',
          '300': '#333333',
          '400': '#48e1ff',
          '500': '#FF0000',
          'DEFAULT': '#BC9300',
        },
        'igp-cah': {
          '50': '#edfcff',
          '100': '#d6f7ff',
          '200': '#b5f3ff',
          '300': '#83eeff',
          '400': '#48e1ff',
          '500': '#1ec7ff',
          '600': '#06acff',
          '700': '#0099ff',
          '800': '#0874c5',
          '900': '#0d629b',
          '950': '#0e3b5d',
          'DEFAULT': '#0099ff',
        },
        'igp-blue': {
          '50': '#f0f6ff',
          '100': '#e4eeff',
          '200': '#cde0ff',
          '300': '#a6c5ff',
          '400': '#739dff',
          '500': '#3b6bff',
          '600': '#1440ff',
          '700': '#0032ff',
          '800': '#012bd6',
          '900': '#0325af',
          '950': '#001d77',
          'DEFAULT': '#0032ff',
        },
        'igp-sky-blue': {
          '50': '#f2f8fd',
          '100': '#e3eefb',
          '200': '#c1ddf6',
          '300': '#8ac1ef',
          '400': '#54a6e5',
          '500': '#2586d2',
          '600': '#1769b2',
          '700': '#145490',
          '800': '#144878',
          '900': '#163d64',
          '950': '#0f2842',
          'DEFAULT': '#54a6e5',
        },
        'igp-dark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#333333',
          '950': '#262626',
          'DEFAULT': '#333333'
        },
        'igp-white': {
          '50': '#FFFFFF',
          '100': '#e8eff6',
          '200': '#ccdfeb',
          '300': '#9ec4db',
          '400': '#6ba6c5',
          '500': '#488aaf',
          '600': '#366f93',
          '700': '#2d5a77',
          '800': '#284c64',
          '900': '#264154',
          '950': '#192b38',
          'DEFAULT': '#F1F6FA'
        },

        'dark-blue': {
          '50': '#e6e9ed',
          '100': '#ccd3dc',
          '200': '#99a6b9',
          '300': '#667a95',
          '400': '#334d72',
          '500': '#00214f',
          '600': '#001a3f',
          '700': '#00142f',
          '800': '#000d20',
          '900': '#000710',
          'DEFAULT': '#00214f'
        }
      },
      keyframes: {
        giror: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(90deg)' },
        }
      },
      animation: {
        giror: 'giror .2s ease-in 0s 1 normal both',
      }
    },
  },
  plugins: [],
}
