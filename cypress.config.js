const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "n9gidp",
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
