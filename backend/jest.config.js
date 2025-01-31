module.exports = {
    rootDir: 'src',
    moduleFileExtensions: ['js', 'json', 'ts'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: [
        '**/*.(t|j)s',
    ],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
};
