module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'testing-library', 'jest-dom'],
  rules: {
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never']
  }
}
