let mix = require('laravel-mix');
let importer = require('node-sass-glob-importer')();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/main.js', 'public/js/bundle.js')
   .extract(['react', 'react-dom'])
   .sass('resources/assets/sass/main.scss', 'public/css/bundle.css', { importer });
