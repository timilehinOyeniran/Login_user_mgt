const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  stagingUrl: 'https://ims-staging.vendease.com/',
  qaUrl: '',
  prodUrl:'https://ims.vendease.com/'
  
});
