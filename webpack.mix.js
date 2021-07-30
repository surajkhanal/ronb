const mix = require('laravel-mix');

mix.postCss('css/tailwind.css', 'tailwind.css', [
    require('tailwindcss'),

]);

// mix.browserSync('localhost/RONB');