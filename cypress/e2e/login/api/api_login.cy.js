/// <reference types="Cypress"/>

describe('API - Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {

        cy.api_login('fulano@qa.com', 'teste').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.be.equal('Login realizado com sucesso')
        })
    });

    it('Deve validar senha incorreta', () => {

        cy.api_login('fulano@qa.com', 'SenhaIncorreta').then((response)=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.be.equal('Email e/ou senha inválidos')
        })
    });

});