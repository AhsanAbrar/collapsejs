let mix = require('laravel-mix')

const min = mix.inProduction() ? '.min' : ''

mix.js('src/js/index.js', `dist/collapsejs${min}.js`)
   .sass('src/sass/style.sass', `dist/collapsejs${min}.css`)
   .setPublicPath('dist')
   .disableNotifications()

mix.webpackConfig({
	output: {
		library: 'collapse',
		libraryTarget: 'umd',
		// libraryExport: 'default',
		umdNamedDefine: true
	}
})
