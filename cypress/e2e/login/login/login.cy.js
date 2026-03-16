/// <reference types="Cypress"/>

describe('Teste funcional de Login', () => {

  it('Deve realizar login com sucesso', () => {

    cy.login('standard_user', 'secret_sauce')

    cy.get('[data-test="title"]')
      .should('contain', 'Products')

  })

  it('Validar erro de login incorreto', () => {

    cy.login('usuarioIncorreto', 'secret_sauce')

    cy.get('[data-test="error"]')
      .should(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      )

  })

  it('Validar erro de senha incorreta', () => {

    cy.login('standard_user', 'senhaIncorreta')

    cy.get('[data-test="error"]')
      .should(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      )

  })

  it('Validar erro de usuário vazio', () => {

    cy.login('', 'secret_sauce')

    cy.get('[data-test="error"]')
      .should('contain', 'Epic sadface: Username is required')

  })

  it('Validar erro de senha vazia', () => {

    cy.login('standard_user', '')

    cy.get('[data-test="error"]')
      .should('contain', 'Epic sadface: Password is required')

  })

  it('Validar erro de usuário e senha vazios', () => {

    cy.login('', '')

    cy.get('[data-test="error"]')
      .should('contain', 'Epic sadface: Username is required')

  })

})