<h1>ProjetoFinal136</h1>

> Status: FINALIZADO

### Projeto que automatiza testes no site https://www.tvmaze.com/ na parte de UI e API pública que está disponibilizada.

## Tecnologias usadas:

<table>
  <tr>
    <td>Cypress</td>
    <td>eslint</td>
    <td>ajv</td>
    <td>Linguagem</td>
  </tr>
  <tr>
    <td>12.3.0</td>
    <td>8.31.0</td>
    <td>8.12.0</td>
    <td>JavaScript</td>
  </tr>
</table>

## Testes de API

Foram feitos testes de funcionalidades e teste de contrato. Mais informações sobre a API usada: https://www.tvmaze.com/api

## Testes de UI

Fotam feitos testes na parte de buscas no site, de séries e também de pessoas(ator/atriz). Também foram realizados testes sobre canais de streaming de muitos países e com filtros aplicados na busca.

## Documento de casos de testes

Os casos de testes que foram executados se encontram na pasta fixture do projeto com o nome casosdeTestesProg.txt

## Para rodar os testes

### API

Ir no arquivo cypress.config.js e descomentar a seguinte linha:

// baseUrl: 'https://api.tvmaze.com', // Descomentar para rodar os testes de API

Obs: deve-se comentar a linha abaixo:

baseUrl:'https://www.tvmaze.com'

### UI

Por padrão a linha abaixo já está descomentada e pronta para ser utilizada nos testes.

baseUrl:'https://www.tvmaze.com'

Se for rodar os testes de API leia o subtópico acima. 

