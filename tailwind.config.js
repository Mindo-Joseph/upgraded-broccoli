const {Tokens} = require('./.mirrorful/theme_cjs')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.{js, jsx, vue}'
  ],
daisyui: {
themes: [{ mytheme: { "primary": "#0A17A7", "secondary": "#0177FB", "accent": "#01D7DF", "neutral": "#0C3F8E", "base-100": "#FFFFFF", "info": "#128363", "success": "#36D399", "warning": "#FBBD23", "error": "#F87272", }, }, ], },


  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('daisyui')
  ]
}
