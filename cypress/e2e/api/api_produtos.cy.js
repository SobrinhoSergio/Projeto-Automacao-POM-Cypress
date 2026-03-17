let token

describe('API - Produtos', () => {

    before(() => {

        cy.api_login('fulano@qa.com', 'teste')
        .then((response)=>{

            token = response.body.authorization

        })

    })

    it('Deve cadastrar um produto com sucesso', () => {

        cy.createProduct(token)
        .then((response)=>{

            expect(response.status).to.equal(201)
            expect(response.body.message)
            .to.equal('Cadastro realizado com sucesso')

        })

    })

})