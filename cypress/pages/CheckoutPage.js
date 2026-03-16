class CheckoutPage {

  preencherDados(nome, sobrenome, cep) {

    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)

  }

  continuar() {
    cy.get('[data-test="continue"]').click()
  }

  finalizar() {
    cy.get('[data-test="finish"]').click()
  }

  validarCompraSucesso() {

    cy.get('.complete-header')
      .should('have.text','Thank you for your order!')

  }

}

export default new CheckoutPage()