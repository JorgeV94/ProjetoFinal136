describe('Pesquisas na pagina Show', () => {
    
    context('Dado que como visitante acessei a página SHOWS', () => {
        beforeEach(() => {
            cy.visit('/shows')
        })

        context('Visualizei a serie "NCIS" \n E cliquei no link \n E fui redirecionado para a página de Sinopse do titulo', () => {
            beforeEach(() => {
                cy.get('a[href="/shows/60/ncis"] img')
                    .should('have.attr','src','https://static.tvmaze.com/uploads/images/medium_portrait/421/1053458.jpg')
                    .click()
                
            })
            it('Então visualizei a página de Sinopse verifiquei o titulo NCIS do lado esquerdo \n E é exibido no lado direito da página o titulo "Extra Details" \n E o subtitulo "Also known as:" ', () => {
                cy.get('h1[class="show-for-medium"]')
                    .should('have.text','NCIS')
                cy.get('#show [class="small-12 medium-4 cell"] h2')
                    .contains('Extra Details')
                cy.get('div[class="callout generic-info-panel"] strong')
                    .should('have.text','Also known as: ') 
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
       
    })
})