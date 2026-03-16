/// <reference types="Cypress"/>

Cypress.Commands.add('verificaProdutos', ()=>{
    cy.get('.cart_item').should('contain', 'Sauce Labs Onesie')
    cy.get('.cart_item').should('contain', 'Sauce Labs Bike Light')
    cy.get('.cart_item').should('contain', 'Sauce Labs Bolt T-Shirt')
})

Cypress.Commands.add('adicionarProduto', (produto) => {
    cy.contains(produto).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
})