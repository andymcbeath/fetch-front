module.exports = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: ".",

  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

  // An array of regexp pattern strings that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  watchman: true,

  moduleFileExtensions: ["js", "jsx", "json", "mjs"],
};
