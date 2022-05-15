module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'prettier', 'preact'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: { 'jest/no-deprecated-functions': 0, 'react/style-prop-object': 0 },
}
