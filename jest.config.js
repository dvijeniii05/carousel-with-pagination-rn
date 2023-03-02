module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
};
