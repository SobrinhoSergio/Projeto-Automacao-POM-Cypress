/// <reference types="Cypress"/>

import { faker } from '@faker-js/faker'

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

Cypress.Commands.add('createProduct', (token) => {

    const produto = {
        nome: faker.commerce.productName(),
        preco: faker.number.int({ min: 10, max: 500 }),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int({ min: 1, max: 20 })
    }

    return cy.request({
        method: 'POST',
        url: 'http://localhost:3000/produtos',
        headers: { authorization: token },
        body: produto
    }).then((response)=>{

        return {
            response,
            produto
        }

    })

})