module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }
}
// import nextJest from 'next/jest'

// /** @type {import('jest').Config} */
// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: './'
// })

// // Add any custom config to be passed to Jest
// const config = {
//   coverageProvider: 'v8',
//   testEnvironment: 'jsdom',
//   testPathIgnorePatterns: ['/node_modules/', '/.next/'],
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.ts(x)?'],
//   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
//   modulePaths: ['<rootDir>/src/']
//   // Add more setup options before each test is run
//   // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
// }

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config)
