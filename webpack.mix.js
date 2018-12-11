let mix = require('laravel-mix')
require('laravel-mix-banner')
const pkg = require('./package.json')

const min = mix.inProduction() ? '.min' : ''

const banner =
	` CollapseJs v${pkg.version}\n` +
	` (c) ${new Date().getFullYear()} Ahsan Abrar\n` +
	' Released under the MIT License.'

mix.sass('src/sass/style.sass', `dist/collapsejs${min}.css`)
   .setPublicPath('dist')
   .disableNotifications()
   .sourceMaps()
   .banner({
		banner
	})

mix.webpackConfig({
	devtool: 'source-map'
})
