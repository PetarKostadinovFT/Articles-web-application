// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ["src/utils/*.{js,jsx}", "src/context/*.{js,jsx}"],
//   coverageDirectory: "coverage",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

//   // testEnvironment: "jest-environment-jsdom",
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
//   },

//   testPathIgnorePatterns: ["<rootDir>/template/", "<rootDir>/node_modules/"],
//   moduleNameMapper: {
//     "\\.(css|less|scss)$": "identity-obj-proxy",
//     "~src/(.*)": "<rootDir>/src/$1",
//   },
// };

// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
