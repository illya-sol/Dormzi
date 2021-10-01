module.exports = {
   purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            Space: ['Space'],
            Choplin: ['Choplin'],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
