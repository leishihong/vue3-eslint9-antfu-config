import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['/dist', '/node_modules'],
  vue: {
    overrides: {
      'vue/operator-linebreak': ['error', 'before']
    }
  },
  formatters: true,
  stylistic: {
    indent: 2,
    quotes: 'single'
  },
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': 'off',
    'import/first': 'off',
    'import/order': 'off',
    'symbol-description': 'off',
    'no-console': 'warn',
    'max-statements-per-line': ['error', { max: 2 }],
    'vue/one-component-per-file': 'off'
  }
})
