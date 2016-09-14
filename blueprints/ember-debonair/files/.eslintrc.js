module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ship-shape/recommended'
  ],
  env: {
    'browser': true
  },
  rules: {
  }
};
