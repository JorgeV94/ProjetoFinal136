// eslint-disable-next-line quotes
import { testeContratoGETSearch } from "../../fixtures/schema-GET-search"
import { testeContratoGETCast } from '../../fixtures/schema-GET-Cast'

describe('API - The Movie', () => {
    
    context('Valida a Pesquisa (Search)', () => {
        
        it.only('Pesquisa Geral - Sem ID', () => {
            
            cy.request({
                method: 'GET',
                url: '/search/shows?q=:Vincenzo'
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(200)
                expect(respostaAPI.body[0].show.averageRuntime).to.eq(90)
                expect(respostaAPI.body[0].show.genres[0]).to.eq('Drama')
                expect(respostaAPI.body[0].show.genres[1]).to.eq('Comedy')
                expect(respostaAPI.body[0].show.genres[2]).to.eq('Crime')
                expect(respostaAPI.body[0].show.network.name).to.eq('tvN')
                expect(respostaAPI.body[0].show.network.country.code).to.eq('KR')
                expect(respostaAPI.body[0].show.network.country.name).to.eq('Korea, Republic of')
                expect(respostaAPI.body[0].show.network.country.timezone).to.eq('Asia/Seoul')
                expect(respostaAPI.body[0].show.status).to.eq('Ended')
                expect(respostaAPI.body[0].show.name).to.eq('Vincenzo')
                expect(respostaAPI.body[0].show.language).to.eq('Korean')
                cy.testeContrato(testeContratoGETSearch, respostaAPI.body)
            })
        })

        it('Pesquisa Com ID(imdb)', () => {

            cy.request({
                method: 'GET',
                url:'/lookup/shows?imdb=tt10055734'
            }).then(respostaApId => {
                expect(respostaApId.status).to.eq(200)
                expect(respostaApId.body.genres[0]).to.eq('Drama')
                expect(respostaApId.body.genres[1]).to.eq('Romance')
                expect(respostaApId.body.name).to.eq('Abyss')
                expect(respostaApId.body.network.country.code).to.eq('KR')
                expect(respostaApId.body.network.country.name).to.eq('Korea, Republic of')
                expect(respostaApId.body.network.country.timezone).to.eq('Asia/Seoul')
                expect(respostaApId.body.network.name).to.eq('tvN')
                expect(respostaApId.body.language).to.eq('Korean')
            })
            
        })
    })

    context('Episódios', () => {
        
        it('Informações principais do episódio', () => {
            
            cy.request({
                method: 'GET',
                url:'/episodes/1911257'
            }).then(respostaEpisodio => {
                expect(respostaEpisodio.body.id).to.eq(1911257)
                expect(respostaEpisodio.body.name).to.eq('Learning How to Time Travel')
                expect(respostaEpisodio.body.season).to.eq(1)
                expect(respostaEpisodio.body.number).to.eq(3)
                expect(respostaEpisodio.body.type).to.eq('regular')
                expect(respostaEpisodio.body.runtime).to.eq(27)
                expect(respostaEpisodio.body.summary).to.eq('What is space-time bending? How does it connect to gravity? Felipe takes a closer look at the science behind time travel.')

            })
        })

        it.only('Elenco convidado do episódio',{ tags: '@smoke' }, () => {
            
            cy.request({
                method:'GET',
                url: '/episodes/1176900/guestcast'
            }).then(respostaElenco => {
                expect(respostaElenco.body[0].person.id).to.eq(16968)
                expect(respostaElenco.body[0].person.name).to.eq('Noah Wyle')
                expect(respostaElenco.body[0].person.gender).to.eq('Male')
                expect(respostaElenco.body[0].person.country.name).to.eq('United States')
                expect(respostaElenco.body[0].person.country.timezone).to.eq('America/New_York')
                expect(respostaElenco.body[2].person.id).to.eq(85878)
                expect(respostaElenco.body[2].person.name).to.eq('Gia Carides')
                expect(respostaElenco.body[2].person.gender).to.eq('Female')
                expect(respostaElenco.body[2].person.country.name).to.eq('Australia')
                expect(respostaElenco.body[2].person.country.timezone).to.eq('Australia/Sydney')
                cy.testeContrato(testeContratoGETCast, respostaElenco.body)
            })
        })
    })
})
