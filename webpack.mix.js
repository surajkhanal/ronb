const mix = require('laravel-mix');

mix.postCss('css/tailwind.css', 'tailwind.css', [
    require('tailwindcss'),
])
.js('js/app.js', 'app.js');

// mix.browserSync('localhost/RONB');