module.exports = {
    root: true,
    parser: "babel-eslint",
    env: {
        browser: true,
        es6: true,
        node: true, },
    extends: ["eslint:recommended", "plugin:react/recommended", ],
    settings: {
        react: {
            version: "detect", }, },
    parserOptions: {
        ecmaFeatures: {
            jsx: true, },
        ecmaVersion: 2018,
        sourceType: "module", },
    plugins: ["react"],
    rules: {
        // Add your desired ESLint rules here
        // For example:
        // "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off", }, };
