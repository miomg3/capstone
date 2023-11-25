module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
				jest: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		Object.assign(
			{
				files: ['**/*.test.js'],
				env: { jest: true },
				plugins: ['jest'],
			},
			require('eslint-plugin-jest').configs.recommended
		)
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'jest',
	],
	rules: {
		'react/prop-types': 1,
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'always',
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
	},
};
