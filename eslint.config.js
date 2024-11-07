import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        "max-len": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        'object-curly-spacing': ['error', 'always'],

    },
  },
)