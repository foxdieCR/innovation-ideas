module.exports = {
    extends: ['airbnb-base', 'eslint-config-prettier'],
        plugins: ['prettier'],
        env: {
        es6: true,
        node: true,
    },
    rules: {
        'no-extra-semi': 0,
        'no-prototype-builtins': 0,
    semi: 0,
    strict: [0, 'global'],
        'no-useless-escape': 0,
        'linebreak-style': 0,
        'prettier/prettier': ['warn', {
            semi: false,
            singleQuote: true,
            trailingComma: 'es5'
        }],
    },
};