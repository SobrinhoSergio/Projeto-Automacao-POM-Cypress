/// <reference types="Cypress"/>

Cypress.Commands.add('api_login', (usuario, senha) => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                    "email": usuario,
                    "password": senha
            },
            failOnStatusCode: false
        }).then((response)=>{
           return response
        })
})