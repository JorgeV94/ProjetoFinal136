export const definitionHelper = {
    $id: 'customDefinitions',
    definitions: { // formato de datas
        timestamp: {
            type: 'string',
            examples: ['2021-11-29'], // T mostra que é hora || Regex é para fazer validações
            // eslint-disable-next-line no-useless-escape
            pattern: '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))'

        }
    }
}
