module.exports = {
	plugins: {
		'postcss-import': {},
		autoprefixer: {},
		'postcss-preset-env': {},
		'postcss-each': {},
		'postcss-pxtorem': {},
		'@csstools/postcss-global-data': {
			files: ['./src/kit/theme/theme.css'],
		},
		'postcss-custom-media': {},
	},
};
