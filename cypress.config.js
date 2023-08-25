const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4b7344",
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "http://localhost:8080",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
  },
  env: {
    navbarText: "cypress.io",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
