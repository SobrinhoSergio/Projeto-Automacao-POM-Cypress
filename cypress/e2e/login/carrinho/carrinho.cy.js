/// <reference types="Cypress"/>

describe('E2E - Carrinho', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').should('contain', 'Products')
  })

  it('Deve adicionar produtos ao carrinho e validar ordem crescente de preço', () => {

    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

    cy.adicionarProduto('Sauce Labs Onesie')
    cy.adicionarProduto('Sauce Labs Bike Light')
    cy.adicionarProduto('Sauce Labs Bolt T-Shirt')

    cy.get('.shopping_cart_link').click()
    cy.get('.shopping_cart_link').should('have.text', '3')

    cy.get('.cart_item').eq(0).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Onesie')
      cy.get('.inventory_item_price').should('contain', '$7.99')
    })

    cy.get('.cart_item').eq(1).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bike Light')
      cy.get('.inventory_item_price').should('contain', '$9.99')
    })

    cy.get('.cart_item').eq(2).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
      cy.get('.inventory_item_price').should('contain', '$15.99')
    })

  })

  it('Deve adicionar produtos e validar ordem decrescente de preço no carrinho', () => {

    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')

    cy.adicionarProduto('Sauce Labs Fleece Jacket')
    cy.adicionarProduto('Sauce Labs Backpack')
    cy.adicionarProduto('Sauce Labs Bolt T-Shirt')

    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').should('have.length', 3)

    cy.get('.cart_item').eq(0).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Fleece Jacket')
      cy.get('.inventory_item_price').should('contain', '$49.99')
    })

    cy.get('.cart_item').eq(1).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
      cy.get('.inventory_item_price').should('contain', '$29.99')
    })

    cy.get('.cart_item').eq(2).within(() => {
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
      cy.get('.inventory_item_price').should('contain', '$15.99')
    })

  })

  it('Deve remover um produto do carrinho', () => {

    cy.adicionarProduto('Sauce Labs Onesie')
    cy.adicionarProduto('Sauce Labs Bike Light')
    cy.adicionarProduto('Sauce Labs Bolt T-Shirt')

    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 3)

    cy.get('[data-test="remove-sauce-labs-onesie"]').click()

    cy.get('.cart_item').should('have.length', 2)

    cy.contains('.inventory_item_name', 'Sauce Labs Onesie').should('not.exist')
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').should('exist')
    cy.contains('.inventory_item_name', 'Sauce Labs Bolt T-Shirt').should('exist')

  })

  it('Deve adicionar e remover o mesmo produto do carrinho', () => {

    cy.adicionarProduto('Sauce Labs Onesie')

    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.shopping_cart_link').click()

    cy.contains('.inventory_item_name', 'Sauce Labs Onesie').should('exist')

    cy.get('[data-test="remove-sauce-labs-onesie"]').click()

    cy.get('.cart_item').should('not.exist')
    cy.contains('.inventory_item_name', 'Sauce Labs Onesie').should('not.exist')

  })

})