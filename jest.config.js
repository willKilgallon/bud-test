
module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^src/(.*)": "<rootDir>/src/$1"
    },
    testEnvironment: 'jsdom'
  };
};