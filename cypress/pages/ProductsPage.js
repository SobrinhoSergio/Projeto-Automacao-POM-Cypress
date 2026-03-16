class ProductsPage {

  ordenar(ordem) {
    cy.get('[data-test="product-sort-container"]').select(ordem)
  }

  adicionarProduto(produto) {
    cy.contains('.inventory_item', produto)
      .should('be.visible')
      .within(() => {
        cy.contains('Add to cart').click()
      })
  }

  abrirCarrinho() {
    cy.get('.shopping_cart_link').click()
  }

  validarQuantidadeCarrinho(qtd) {
    cy.get('.shopping_cart_badge')
      .should('have.text', qtd)
  }

  validarProduto(index, nome) {

    cy.get('.inventory_item_name')
      .eq(index)
      .should('have.text', nome)

  }

  validarProdutoComPreco(index, nome, preco) {

    cy.get('.inventory_item')
      .eq(index)
      .within(() => {

        cy.get('.inventory_item_name')
          .should('have.text', nome)

        cy.get('.inventory_item_price')
          .should('have.text', preco)

      })

  }

}

export default new ProductsPage()