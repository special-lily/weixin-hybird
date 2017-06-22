// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ["error", "always"],
    'indent': ['error', 4, {'SwitchCase': 1}],
    "no-irregular-whitespace": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-tabs": 0,
    'no-extend-native': 0,
    "no-undef": 0,//不能有未定义的变量
    "no-multiple-empty-lines": [1, {"max": 2}]//空行最多不能超过2行
  }
}
