const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        iewportHeight: 1080,
        viewportWidth: 1920,
        baseUrl: 'https://api.tvmaze.com',
        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            require('@cypress/grep/src/plugin')(config);
            return config;
        },
    },
});
