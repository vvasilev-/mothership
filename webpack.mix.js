let mix = require('laravel-mix');
let webpack = require('webpack');

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

mix.webpackConfig({
	entry: {
		'/js/vendor': [
			'react',
			'react-dom',
			'react-loadable',
			'react-emotion',
			'formik',
			'recompose',
			'emotion',
			'prop-types',
			'axios',
			'lodash',
			'yup',
			'unstated',
			'@blueprintjs/core',
			'@blueprintjs/icons'
		]
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: '/js/vendor',
			filename: '/js/vendor.js',
			minChunks: Infinity
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: '/js/bundle',
			async: '/js/common',
			children: true,
			minChunks(module) {
				return module.resource
					&& module.resource.indexOf('views') === -1
					&& module.resource.indexOf('dialogs') === -1;
			}
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: '/js/manifest',
			filename: '/js/manifest.js',
			minChunks: Infinity
		})
	]
});

mix
	.react('resources/assets/js/main.js', 'public/js/bundle.js')
	.postCss('resources/assets/css/main.css', 'public/css/bundle.css')
	.options({
		processCssUrls: false
	});

if (mix.inProduction()) {
	mix.version();
}
