let token

describe('Deve realizar o login cadastrar um produto com sucesso', () => {
    it('Deve realizar o login com sucesso', () => {

        cy.api_login('fulano@qa.com', 'teste').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.be.equal('Login realizado com sucesso')
            token = response.body.authorization 
        })
    });

    it('Deve cadastrar um produto com sucesso', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/produtos',
            headers: {
                authorization: token
            },
            body:{
                "nome": "Carro Teste7887",
                "preco": 230,
                "descricao": "Hillux",
                "quantidade": 5
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
        })
    });

});