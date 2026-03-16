/// <reference types="Cypress"/>

describe('E2E - Checkout', () => {

    beforeEach(() => {
        cy.login('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Deve finalizar compra com sucesso', () => {

        cy.adicionarProduto('Sauce Labs Onesie')

        cy.get('.shopping_cart_link').click()

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Sérgio')
        cy.get('[data-test="lastName"]').type('Sobrinho')
        cy.get('[data-test="postalCode"]').type('58411005')

        cy.get('[data-test="continue"]').click()

        cy.get('.summary_total_label')
          .should('contain','8.63')

        cy.get('[data-test="finish"]').click()

        cy.get('.complete-header')
          .should('have.text','Thank you for your order!')
    });

    it('Deve validar se o cálculo do total está correto', () => {

        cy.adicionarProduto('Sauce Labs Backpack')
        cy.adicionarProduto('Sauce Labs Bike Light')

        cy.get('.shopping_cart_link').click()

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Sérgio')
        cy.get('[data-test="lastName"]').type('Sobrinho')
        cy.get('[data-test="postalCode"]').type('58411005')

        cy.get('[data-test="continue"]').click()

        let itemTotal
        let tax

        cy.get('.summary_subtotal_label')
        .invoke('text')
        .then((text) => {
            itemTotal = parseFloat(text.replace('Item total: $',''))
        })

        cy.get('.summary_tax_label')
        .invoke('text')
        .then((text) => {
            tax = parseFloat(text.replace('Tax: $',''))
        })

        cy.get('.summary_total_label')
        .invoke('text')
        .then((text) => {

            const total = parseFloat(text.replace('Total: $',''))
            const calculo = itemTotal + tax

            expect(total).to.eq(calculo)

        })

    });

});