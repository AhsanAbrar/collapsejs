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
			file: production ? 'dist/collapsejs.min.js' : 'dist/collapsejs.js',
			name: 'collapsejs',
			format: 'umd',
			sourcemap: true
		},
		{
			file: production ? 'dist/collapsejs-esm.min.js' : 'dist/collapsejs-esm.js',
			format: 'esm',
			sourcemap: true
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
