module.exports = {
    'testEnvironment': 'jsdom',
    'moduleNameMapper': {
        '\\.(css|pcss)$': 'identity-obj-proxy',
        // "\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/__mocks__/fileMock.js"
    },
    'rootDir': './',
    'setupFiles': [
        'jest-prop-type-error'
    ],
    'coverageDirectory': '<rootDir>/jest/coverage',
    'globals': {
        'PROJECT_ENV': 'development',
        'SERVICE_URL': 'http://localhost',
        'SERVICE_PORT': '80'
    }
};
