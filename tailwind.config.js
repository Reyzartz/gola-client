/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // primary colors
        'primary-900': '#42307D',
        'primary-800': '#53389E',
        'primary-700': '#6941C6',
        'primary-600': '#7F56D9',
        'primary-500': '#9E77ED',
        'primary-400': '#B692F6',
        'primary-300': '#D6BBFB',
        'primary-200': '#E9D7FE',
        'primary-100': '#F4EBFF',
        'primary-50': '#F4EBFF',
        'primary-25': '#FCFAFF',

        // neutral colors
        'neutral-900': '#101828',
        'neutral-800': '#1D2939',
        'neutral-700': '#344054',
        'neutral-600': '#475467',
        'neutral-500': '#667085',
        'neutral-400': '#98A2B3',
        'neutral-300': '#D0D5DD',
        'neutral-200': '#E4E7EC',
        'neutral-100': '#F2F4F7',
        'neutral-50': '#F9FAFB',
        'neutral-25': '#FCFCFD',

        // error colors
        'error-900': '#7A271A',
        'error-800': '#912018',
        'error-700': '#B42318',
        'error-600': '#D92D20',
        'error-500': '#F04438',
        'error-400': '#F97066',
        'error-300': '#FDA29B',
        'error-200': '#FECDCA',
        'error-100': '#FEE4E2',
        'error-50': '#FEF3F2',
        'error-25': '#FFFBFA',

        // warning colors
        'warning-900': '#7A2E0E',
        'warning-800': '#93370D',
        'warning-700': '#B54708',
        'warning-600': '#DC6803',
        'warning-500': '#F79009',
        'warning-400': '#FDB022',
        'warning-300': '#FEC84B',
        'warning-200': '#FEDF89',
        'warning-100': '#FEF0C7',
        'warning-50': '#FFFAEB',
        'warning-25': '#FFFCF5',

        // success colors
        'success-900': '#054F31',
        'success-800': '#05603A',
        'success-700': '#027A48',
        'success-600': '#039855',
        'success-500': '#12B76A',
        'success-400': '#32D583',
        'success-300': '#6CE9A6',
        'success-200': '#A6F4C5',
        'success-100': '#D1FADF',
        'success-50': '#ECFDF3',
        'success-25': '#F6FEF9'
      }
    }
  },
  plugins: []
}
