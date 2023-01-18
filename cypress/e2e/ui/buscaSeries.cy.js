describe('Pesquisas no site ', () => {

    context('Dado que como visitante acessei a pagina HOME', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        context('Quando inseri "The Librarians" no campo "pesquisa" \n E cliquei no botão "Search" \n E fui redirecionado para a página de resultado de pesquisa \n E cliquei no titulo "The Librarians" \n E fui redirecionado para a página de Sinopse do titulo', () => {
            beforeEach(() => {
                cy.get('#searchform-q')
                    .type('The Librarians')
                cy.get('button.medium.button.postfix')
                    .click()
                cy.get('h1.small-12.cell')
                    .should('have.text', 'Search')
                cy.get('h3 a[href="/shows/340/the-librarians"]')
                    .click()
            })

            it('Então é exibido no lado direito da página o campo "Show Info" \n E o campo "Network" com o texto/link "TNT" \n ', () => {
                cy.get('#general-info-panel h2')
                    .should('have.text','Show Info')
                cy.get('#general-info-panel div a')
                    .should('have.attr','href','/networks/14/tnt')
                cy.get('#general-info-panel div a[href="/networks/14/tnt"]')
                    .should('have.text','TNT')
                    
            })
        })
       
    })

})