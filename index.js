const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,

  env: {
    node: true,
    jquery: true,
    browser: true
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'standard'
  ],

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
    'capitalized-comments': 'off',
    'dot-notation': 'error',
    'import/exports-last': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'off',
    'import/order': 'error',
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-lonely-if': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { VariableDeclarator: { array: false, object: true }, AssignmentExpression: { array: false, object: false } }, { enforceForRenamedProperties: false }],
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'require-atomic-updates': 'off',
    'require-await': 'error',
    camelcase: 'off',
    radix: 'error'
  },

  settings: {
    'import/resolver': {
      typescript: {}
    }
  },

  overrides: [{
    files: ['*.wxs'],
    rules: {
      'no-var': 'off',
      'object-shorthand': 'off',
      'prefer-template': 'off'
    }
  }]
}
