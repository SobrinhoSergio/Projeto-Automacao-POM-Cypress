/// <reference types="Cypress"/>

import ProductsPage from "../../pages/ProductsPage"
import CartPage from "../../pages/CartPage"
import CheckoutPage from "../../pages/CheckoutPage"

describe('E2E - Checkout', () => {

  beforeEach(() => {

    cy.login('standard_user','secret_sauce')

    cy.get('[data-test="title"]')
      .should('contain', 'Products')

  })

  it('Deve finalizar compra com sucesso', () => {

    ProductsPage.adicionarProduto('Sauce Labs Onesie')

    ProductsPage.abrirCarrinho()

    CartPage.clicarCheckout()

    CheckoutPage.preencherDados(
      'Sérgio',
      'Sobrinho',
      '58411005'
    )

    CheckoutPage.continuar()

    cy.get('.summary_total_label')
      .should('contain','8.63')

    CheckoutPage.finalizar()

    CheckoutPage.validarCompraSucesso()

  })

  it('Deve validar se o cálculo do total está correto', () => {

    ProductsPage.adicionarProduto('Sauce Labs Backpack')
    ProductsPage.adicionarProduto('Sauce Labs Bike Light')

    ProductsPage.abrirCarrinho()

    CartPage.clicarCheckout()

    CheckoutPage.preencherDados(
      'Sérgio',
      'Sobrinho',
      '58411005'
    )

    CheckoutPage.continuar()

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

  })

})