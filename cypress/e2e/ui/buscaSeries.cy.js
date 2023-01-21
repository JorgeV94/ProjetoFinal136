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
                cy.get('#search h1')
                    .should('have.text', 'Search')
                cy.get('h3 a[href="/shows/340/the-librarians"]')
                    .click()
            })

            it('Então é exibido no lado direito da página o campo "Show Info" \n E o campo "Network" com o texto/link "TNT" \n E o campo "Official site" com o texto/link  "www.tntdrama.com" \n E o campo "Developed by" com o texto "John Rogers"', () => {
                cy.get('#general-info-panel h2')
                    .should('have.text','Show Info')
                cy.get('#general-info-panel div a')
                    .should('have.attr','href','/networks/14/tnt')
                cy.get('#general-info-panel div a[href="/networks/14/tnt"]')
                    .should('have.text','TNT')
                cy.get('#general-info-panel p a')  
                    .should('have.text','www.tntdrama.com')
                    .and('have.attr','href','http://www.tntdrama.com/shows/the-librarians.html')
                cy.get('#general-info-panel div span a')
                    .should('have.text','John Rogers')
            })
        })

        context('Quando inseri "Meryl Streep" no campo "pesquisa" \n E cliquei no botão "Search" fui redirecionado para a página de resultado de pesquisa', () => {
            beforeEach(() => {
                cy.get('#searchform-q')
                    .type('Meryl Streep')
                cy.get('button.medium.button.postfix')
                    .click()
                cy.get('#search h1')
                    .should('have.text', 'Search')
                cy.get('h3 a[href="/people/28226/meryl-streep"]')
                    .click()
            })
            it('Então é exibido no lado esquerdo o titulo "Meryl Streep" \n E no lado direito da página as "Person Info" \n E os campos "Gender,Age,Birthday,Born in"', () => {
                cy.get('.columns h1')
                    .should('have.text','Meryl Streep')
                cy.get('#general-info-panel h2')
                    .should('have.text','Person Info')
                cy.get('#general-info-panel p strong')
                    .should('have.text','Gender:Age: Birthday:Born in:')
                cy.get('#general-info-panel ul li')
                    .should('have.text','Mary Louise Streep')

            })
            
        })
       
    })

})