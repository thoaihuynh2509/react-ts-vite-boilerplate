import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import typescriptEslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginReact from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist', 'vite.config.ts', "src/**/*.d.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptEslintParser,
      // parserOptions: { project: ['tsconfig.json'] },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    }
  },
  prettierConfig,
)
