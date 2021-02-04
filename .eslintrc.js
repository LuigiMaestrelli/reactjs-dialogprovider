module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    env: {
        jest: true,
        browser: true,
        es6: true
    },
    globals: {
        process: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            ecmaVersion: 8,
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'detect',
            flowVersion: '0.93'
        },
        propWrapperFunctions: ['forbidExtraProps', { property: 'freeze', object: 'Object' }],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
    },
    plugins: ['react'],
    rules: {
        indent: ['warn', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-undef': ['error'],
        'no-var': ['error'],
        'no-console': ['warn'],
        'no-debugger': ['warn'],
        'no-unused-vars': ['warn'],
        'react/prop-types': ['warn'],
        'react/jsx-uses-vars': 'error',
        'react/display-name': 'off',
        'no-extra-parens': 'off'
    }
};
