/// <reference types="Cypress"/>

import ProductsPage from "../../pages/ProductsPage"

describe('E2E - Ordenação de produtos', () => {

  let dados

  before(() => {

    cy.fixture('produtos').then((data) => {
      dados = data
    })

  })

  beforeEach(() => {

    cy.login('standard_user','secret_sauce')

    cy.get('[data-test="title"]')
      .should('contain', 'Products')

  })

  it('Ordenar produtos por ordem alfabética (A → Z)', () => {

    ProductsPage.ordenar('Name (A to Z)')

    dados.az.forEach((produto, index) => {

      ProductsPage.validarProduto(index, produto)

    })

  })

  it('Ordenar produtos por ordem alfabética inversa (Z → A)', () => {

    ProductsPage.ordenar('Name (Z to A)')

    dados.za.forEach((produto, index) => {

      ProductsPage.validarProduto(index, produto)

    })

  })

  it('Ordenar produtos por preço crescente', () => {

    ProductsPage.ordenar('Price (low to high)')

    dados.lowPriceProducts.forEach((produto, index) => {

      ProductsPage.validarProdutoComPreco(
        index,
        produto.name,
        produto.price
      )

    })

  })

  it('Ordenar produtos por preço decrescente', () => {

    ProductsPage.ordenar('Price (high to low)')

    dados.highPriceProducts.forEach((produto, index) => {

      ProductsPage.validarProdutoComPreco(
        index,
        produto.name,
        produto.price
      )

    })

  })

})