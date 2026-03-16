/// <reference types="Cypress"/>

import ProductsPage from "../../../pages/ProductsPage"
import CartPage from "../../../pages/CartPage"

describe("E2E - Carrinho", () => {

  let produtos

  before(() => {

    cy.fixture("produtos")
      .then((data) => {
        produtos = data
      })

  })

  beforeEach(() => {

    cy.login("standard_user", "secret_sauce")

    cy.get('[data-test="title"]')
      .should("contain", "Products")

  })

  it("Deve adicionar produtos e validar ordem crescente de preço", () => {

    ProductsPage.ordenar("Price (low to high)")

    produtos.lowPriceProducts.forEach((produto) => {
      ProductsPage.adicionarProduto(produto.name)
    })

    ProductsPage.abrirCarrinho()

    CartPage.validarQuantidade(3)

    produtos.lowPriceProducts.forEach((produto, index) => {
      CartPage.validarProduto(index, produto.name, produto.price)
    })

  })

  it("Deve adicionar produtos e validar ordem decrescente de preço", () => {

    ProductsPage.ordenar("Price (high to low)")

    produtos.highPriceProducts.forEach((produto) => {
      ProductsPage.adicionarProduto(produto.name)
    })

    ProductsPage.abrirCarrinho()

    CartPage.validarQuantidade(3)

    produtos.highPriceProducts.forEach((produto, index) => {
      CartPage.validarProduto(index, produto.name, produto.price)
    })

  })

  it("Deve remover produto do carrinho", () => {

    produtos.lowPriceProducts.forEach((produto) => {
      ProductsPage.adicionarProduto(produto.name)
    })

    ProductsPage.abrirCarrinho()

    CartPage.validarQuantidade(3)

    CartPage.removerProduto("Sauce Labs Onesie")

    CartPage.validarQuantidade(2)

    cy.contains(".inventory_item_name", "Sauce Labs Onesie")
      .should("not.exist")

  })

  it('Deve adicionar e remover o mesmo produto do carrinho', () => {

    ProductsPage.adicionarProduto('Sauce Labs Onesie')

    ProductsPage.validarQuantidadeCarrinho('1')

    ProductsPage.abrirCarrinho()

    CartPage.validarProdutoNoCarrinho('Sauce Labs Onesie')

    CartPage.removerProduto('Sauce Labs Onesie')

    CartPage.validarCarrinhoVazio()

  })

})