let token

describe('API - Produtos', () => {

    before(() => {

        cy.api_login('fulano@qa.com', 'teste')
        .then((response)=>{

            token = response.body.authorization

        })

    })

    it('Deve cadastrar um produto com sucesso', () => {

        cy.createProduct(token).then(({response, produto})=>{

            expect(response.status).to.eq(201)
            expect(produto.nome).to.exist

        })

    })

})