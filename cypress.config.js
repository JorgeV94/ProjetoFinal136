const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        iewportHeight: 1080,
        viewportWidth: 1920,
        defaultCommandTimeout: 10000,
        pageLoadTimeout:10000,

        // baseUrl: 'https://api.tvmaze.com', // Descomentar para rodar os testes de API
        baseUrl:'https://www.tvmaze.com',

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            require('@cypress/grep/src/plugin')(config);
            return config;
        },
    },
})
