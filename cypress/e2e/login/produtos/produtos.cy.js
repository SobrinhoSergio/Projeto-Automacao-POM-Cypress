/// <reference types="Cypress"/>

describe('E2E - Ordenação de produtos', () => {

    beforeEach(() => {
        cy.login('standard_user','secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it('Ordenar produtos por ordem alfabética (A → Z)', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')

        cy.get(':nth-child(1)').should('contain', 'Sauce Labs Backpack')
        cy.get(':nth-child(2)').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(3)').should('contain', 'Sauce Labs Bolt T-Shirt')
    });

    it('Ordenar produtos por ordem alfabética inversa (Z → A)', () => {
        cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')

        cy.get(':nth-child(1)').should('contain', 'Test.allTheThings() T-Shirt (Red)')
        cy.get(':nth-child(2)').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(3)').should('contain', 'Sauce Labs Fleece Jacket')
    });

      it('Ordernar produtos por crescente de preço', () => {

        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        cy.get('.inventory_item_description').eq(0).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Onesie')
            cy.get('.inventory_item_price').should('contain', '$7.99') 
        })

        cy.get('.inventory_item_description').eq(1).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bike Light')
            cy.get('.inventory_item_price').should('contain', '$9.99')
        })

        cy.get('.inventory_item_description').eq(2).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
            cy.get('.inventory_item_price').should('contain', '$15.99')
        })

    });

    it('Ordernar produtos por decrescente de preço', () => {

        cy.get('[data-test="product-sort-container"]').select('Price (high to low)')

        cy.get('.inventory_item_description').eq(0).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Fleece Jacket')
            cy.get('.inventory_item_price').should('contain', '$49.99')
        })

        cy.get('.inventory_item_description').eq(1).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
            cy.get('.inventory_item_price').should('contain', '$29.99')
        })

        cy.get('.inventory_item_description').eq(2).within(() => {
            cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
            cy.get('.inventory_item_price').should('contain', '$15.99')
        })

    });

});