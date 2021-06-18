module.exports = {
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        indent: ['error', 4],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', {extensions: ['.tsx']}],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
};
