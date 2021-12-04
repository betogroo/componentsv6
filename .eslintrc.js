module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-definition-name-casing': 'error',
    'vue/multi-word-component-names': 'error',
    'vue/match-component-file-name': 'error',
    'vue/require-name-property': 'error',
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-prop-types': 'error'
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)']
    }
  ]
}
