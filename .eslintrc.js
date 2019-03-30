module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  plugins: ['import', 'jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: '2018',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-extra-semi': 0,
    semi: 0,
    'class-methods-use-this': 0,
    'no-multi-assign': 0,
    'no-use-before-define': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-loop-func': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'prettier/prettier': [
      'warn',
      { semi: false, singleQuote: true, trailingComma: 'es5' },
    ],
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/no-did-update-set-state': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
}
