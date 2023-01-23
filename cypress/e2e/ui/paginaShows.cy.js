describe('Pesquisas na pagina Show', () => {

    context('Dado que como visitante acessei a página SHOWS', () => {
        beforeEach(() => {
            cy.visit('/shows')
        })

        context('Quando visualizei a serie "NCIS" \n E cliquei no link \n E fui redirecionado para a página de Sinopse do titulo', () => {
            beforeEach(() => {
                cy.get('a[href="/shows/60/ncis"] img')
                    .should('have.attr', 'src', 'https://static.tvmaze.com/uploads/images/medium_portrait/421/1053458.jpg')
                    .click()

            })
            it('Então visualizei a página de Sinopse verifiquei o titulo NCIS do lado esquerdo \n E é exibido no lado direito da página o titulo "Extra Details" \n E o subtitulo "Also known as:" ', () => {
                cy.get('h1[class="show-for-medium"]')
                    .should('have.text', 'NCIS')
                cy.get('#show [class="small-12 medium-4 cell"] h2')
                    .contains('Extra Details')
                cy.get('div[class="callout generic-info-panel"] strong')
                    .should('have.text', 'Also known as: ')
                cy.get('[class="callout generic-info-panel"] li:first-child')
                    .contains('Navy NCIS')
                cy.get('[class="callout generic-info-panel"] li:nth-child(2)')
                    .contains('NCIS: Investigações Criminais')
                cy.get('[class="callout generic-info-panel"] li:nth-child(6)')
                    .contains('NCIS rikostutkijat')
                cy.get('[class="callout generic-info-panel"] li:nth-child(20)')
                    .contains('Navy: investigación criminal')
                cy.get('[class="callout generic-info-panel"] li:last-child')
                    .contains('Морська полiцiя')
            })
        })

        context('Quando selecionei no campo Show Status o elemento "Running" \n E no campo Genre o elemento "Comedy" \n E no campo Language o elemento "English" \n E no campo Country o elemento "United States" \n E no campo Sort by o elemento "A to Z" ', () => {
            beforeEach(() => {
                cy.title()
                    .should('eq', 'TV Shows | TVmaze - List of popular TV shows and streaming web shows.')
                cy.get('#show-showstatus_enum')
                    .select('1')
                    .contains('Running')
                cy.get('#show-genre')
                    .select('2')
                    .contains('Comedy')
                cy.get('#show-language_enum')
                    .select('35')
                    .contains('English')
                cy.get('#show-country_enum')
                    .select('235')
                    .contains('United States')
                cy.get('#show-sort')
                    .select('3')
                    .contains('A to Z')
            })
            it('Então visualizo os resultados da pesquisa', () => {
                cy.get('button[class="button round"]')
                    .click()
            })

        })
      
    })

})
