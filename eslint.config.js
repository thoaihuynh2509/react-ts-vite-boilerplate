import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

// Plugin imports
import typescriptEslintParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import pluginImportPlugin from 'eslint-plugin-import'
import pluginReactPlugin from 'eslint-plugin-react'
import pluginReactNamingConvention from 'eslint-plugin-react-naming-convention'

export default tseslint.config(
  pluginReactPlugin.configs.flat.recommended,
  js.configs.recommended,
  prettierConfig,
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptEslintParser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': pluginUnusedImports,
      'import': pluginImportPlugin,
      'react-naming-convention': pluginReactNamingConvention
    },
    rules: {
      ...pluginImportPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin', // Node "builtin" modules
            'external', // "external" modules
            'internal', // "internal" modules
            'parent', // "parent" modules
            'sibling', // "sibling" modules
            'index', // "index" modules
            'object', // "object" imports
            'type' // "type" imports
          ],
          'pathGroups': [
            {
              pattern: '@/**',
              group: 'internal'
            }
          ],
          'pathGroupsExcludedImportTypes': ['builtin', 'external'],
          'newlines-between': 'always',
          'alphabetize': { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },

  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked]
  },
  {
    settings: {
      'react': { version: 'detect' },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  { ignores: ['dist', 'vite.config.ts', 'src/**/*.d.ts'] }
)
