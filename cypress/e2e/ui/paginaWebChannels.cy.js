describe('Busca Web Channels', () => {

    context('Usando massa de dados', () => {
        const massaWebChannels = require('../../fixtures/massaWebChannels')

        beforeEach(() => {
            cy.visit('/webchannels')
        })

        massaWebChannels.array.forEach(({ valueCon, country, valueSort, sortBy }) => {
            it(`Web Channels do país ${country} e ordenado por ${sortBy} - Data Driven`, () => {
                cy.get('#webchannel-country_enum')
                    .select(valueCon)
                    .contains(country)

                cy.get('#webchannel-sort')
                    .select(valueSort)
                    .contains(sortBy)

                cy.get('[class="button round"]')
                    .click()
                    
                cy.get('h1[class="show-for-medium"]')
                    .should('have.text','Web Channels')
            })

        })

    })
})