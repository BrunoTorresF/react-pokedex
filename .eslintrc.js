module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      version: '^16.4.2',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        jsxBracketSameLine: true,
      },
    ],
    'no-restricted-syntax': 0,
    'no-console': 'off',
    'no-unused-vars': 1,
    strict: ['error', 'global'],
    curly: 'warn',
    'prefer-const': [
      1,
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [1, 'as-needed'],
    'consistent-return': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error', 'data'],
      },
    ],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-fragments': 0,
  },
};
