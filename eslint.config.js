import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticJs from '@stylistic/eslint-plugin-js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		plugins: {
			'@stylistic/js': stylisticJs
		},
		rules: {
            'semi': ['error', 'always'],
			'no-console': 'error',
			'@stylistic/js/indent': ['error', 'tab'],
			'@stylistic/js/quotes': [
				'error',
				'single',
				{
					allowTemplateLiterals: true
				}
			]
			
        }
	}
];

export default eslintConfig;
