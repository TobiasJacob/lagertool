module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'camelcase': 0,
    'generator-star-spacing': 0,
    'indent': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'padded-blocks': 0,
    'space-before-function-paren': 0,
    'spaced-comment': 0,
    'semi': 0,
    'quotes': 0,
    'max-len': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}