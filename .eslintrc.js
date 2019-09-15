module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["plugin:@typescript-eslint/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "always"],
        "indent": ["error", "tab"],
        "no-tabs": 0,
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"]
    }
};