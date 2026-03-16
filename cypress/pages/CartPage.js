class CartPage {

  validarQuantidade(qtd) {
    cy.get('.cart_item').should('have.length', qtd)
  }

  validarProduto(index, nome, preco) {

    cy.get('.cart_item')
      .eq(index)
      .within(() => {

        cy.get('.inventory_item_name')
          .should('contain', nome)

        cy.get('.inventory_item_price')
          .should('contain', preco)

      })
  }

  removerProduto(nome) {
    const id = nome
      .toLowerCase()
      .replace(/ /g, "-")

    cy.get(`[data-test="remove-${id}"]`).click()
  }

  clicarCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

  validarCarrinhoVazio() {
    cy.get('.cart_item').should('not.exist')
  }

  validarProdutoNoCarrinho(produto) {
    cy.contains('.inventory_item_name', produto).should('exist')
  }

}

export default new CartPage()