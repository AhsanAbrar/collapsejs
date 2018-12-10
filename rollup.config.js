import babel from 'rollup-plugin-babel';
import env from '@babel/preset-env';
import minify from 'rollup-plugin-babel-minify';
const pkg = require('./package.json')

const production = process.env.BUILD === 'production',
	  path = 'dist/'

const banner =
  '/*!\n' +
  ` * CollapseJs v${pkg.version}\n` +
  ` * (c) ${new Date().getFullYear()} Ahsan Abrar\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const getMinify = () => {
	if (!production)
		return

	return minify({
		comments: false,
		banner: banner,
		bannerNewLine: true
	})
}

export default {
	input: 'src/js/index.js',
	output: [
		{
			file: production ? 'dist/bundle-cjs.min.js' : 'dist/bundle-cjs.js',
			format: 'cjs'
		},
		{
			file: production ? 'dist/bundle-umd.min.js' : 'dist/bundle-umd.js',
			name: 'collapsejs',
			format: 'umd'
		},
		{
			file: production ? 'dist/bundle-esm.min.js' : 'dist/bundle-esm.js',
			format: 'esm'
		}
	],
	plugins: [
		getMinify(),

		babel({
			presets: [
				[env, { modules: false }]
			]
		})
	]
}
