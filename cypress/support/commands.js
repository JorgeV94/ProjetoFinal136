import Ajv from 'ajv'
import { definitionHelper } from '../utils/schemaDefinitions'

Cypress.Commands.add('testeContrato',(schema, resposta) => {
    
    // função que mostra os erros
    const getSchemaError = ajvErros => {
        return cy.wrap(
            `Campo:${ajvErros[0]['instancePath']} é invalido. Erro: ${ajvErros[0]['message']}`
        )
    }

    const ajv = new Ajv() // instanciando o obejto
    const validacao = ajv.addSchema(definitionHelper).compile(schema) 
    const valido = validacao(resposta)

    // verificar se o schema passou ou falhou
    if (!valido) {
        getSchemaError(validacao.errors).then(schemaError => {
            throw new Error(schemaError)
        })
    } else 
        expect(valido,'Validação de contrato').to.be.true  
})