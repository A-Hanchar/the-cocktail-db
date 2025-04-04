import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import ts from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{languageOptions: {globals: globals.browser}},
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	...ts.configs.recommended,
	reactHooks.configs['recommended-latest'],
	importPlugin.flatConfigs.recommended,
	eslintPluginPrettierRecommended,
	{
		rules: {
			'no-unused-expressions': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/display-name': 'off',
			'@typescript-eslint/no-unused-expressions': ['error', {allowTernary: true}],
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'no-var': 'error',
			'jsx-quotes': ['error', 'prefer-single'],
			'no-console': [
				'error',
				{
					allow: [
						'warn',
						'dir',
						'time',
						'timeEnd',
						'timeLog',
						'trace',
						'assert',
						'clear',
						'count',
						'countReset',
						'group',
						'groupEnd',
						'table',
						'debug',
						'info',
						'dirxml',
						'error',
						'groupCollapsed',
						'Console',
						'profile',
						'profileEnd',
						'timeStamp',
						'context',
					],
				},
			],
			'import/prefer-default-export': 'off',
			'import/no-unused-modules': 'off',
			'import/no-extraneous-dependencies': 'off',
			'import/order': [
				'error',
				{
					groups: ['external', ['builtin', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type']],
					pathGroups: [
						{
							pattern: '@cocktailDB/**',
							group: 'external',
							position: 'after',
						},
					],
					alphabetize: {
						order: 'asc',
					},
					'newlines-between': 'always-and-inside-groups',
				},
			],
			'import/no-deprecated': 'warn',
			'import/no-unresolved': 'off',
			'import/named': 'off',
			quotes: [
				'error',
				'single',
				{
					allowTemplateLiterals: true,
				},
			],
			'prettier/prettier': [
				'error',
				{
					editorconfig: true,
					printWidth: 120,
					tabWidth: 2,
					useTabs: true,
					semi: true,
					singleQuote: true,
					jsxSingleQuote: true,
					trailingComma: 'all',
					bracketSpacing: false,
					bracketSameLine: false,
					arrowParens: 'always',
					endOfLine: 'lf',
					embeddedLanguageFormatting: 'off',
					singleAttributePerLine: false,
				},
				{
					usePrettierrc: true,
				},
			],
		},
	},
	{ignores: ['dist/', 'node_modules', '*.cjs']},
];
