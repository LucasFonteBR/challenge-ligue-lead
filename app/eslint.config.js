const prettier = require('eslint-plugin-prettier');
const unusedImports = require('eslint-plugin-unused-imports');
const eslintPlugin = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

module.exports = {
  files: ['**/*.ts'],
  ignores: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: parser,
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
  },
  plugins: {
    prettier: prettier,
    'unused-imports': unusedImports,
    'eslint-plugin': eslintPlugin,
  },
  rules: {
    complexity: ['error', { max: 15 }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-types': [
      'off',
      {
        types: {
          String: false,
          Boolean: false,
          Number: false,
          Symbol: false,
          '{}': false,
          Object: false,
          object: false,
          Function: false,
        },
        extendDefaults: true,
      },
    ],
  },
};
