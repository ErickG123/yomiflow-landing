import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: { '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }] },
  },
  {
    files: ['src/**/*.component.ts', 'src/**/*.service.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Strict Models: move interfaces to a dedicated *.model.ts file.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Strict Models: move type aliases to a dedicated *.model.ts file.',
        },
        {
          selector: 'TSEnumDeclaration',
          message: 'Strict Models: move enums to a dedicated *.model.ts file.',
        },
      ],
    },
  },
];
