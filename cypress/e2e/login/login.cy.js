/// <reference types="Cypress"/>

import LoginPage from "../../pages/LoginPage.js"

describe('Login - SauceDemo', () => {

    let users

    before(() => {
        cy.fixture('users').then((data) => {
            users = data
        })
    })

    beforeEach(() => {
        LoginPage.visit()
    })

    it('Deve realizar login com sucesso', () => {

        LoginPage.login(users.validUser.username, users.validUser.password)

        LoginPage.elements.title()
            .should('contain', 'Products')
    })

    it('Deve validar erro de usuário incorreto', () => {

        LoginPage.login(users.invalidUser.username, users.invalidUser.password)

        LoginPage.elements.errorMessage()
            .should('contain',
                'Epic sadface: Username and password do not match any user in this service'
            )
    })

    it('Deve validar erro de senha incorreta', () => {

        LoginPage.login(users.invalidPassword.username, users.invalidPassword.password)

        LoginPage.elements.errorMessage()
            .should('contain',
                'Epic sadface: Username and password do not match any user in this service'
            )
    })

    it('Deve validar erro de usuário vazio', () => {

        LoginPage.login('', 'secret_sauce')

        LoginPage.elements.errorMessage()
            .should('contain', 'Epic sadface: Username is required')
    })

    it('Deve validar erro de senha vazia', () => {

        LoginPage.login('standard_user', '')

        LoginPage.elements.errorMessage()
            .should('contain', 'Epic sadface: Password is required')
    })

    it('Deve validar erro de usuário e senha vazios', () => {

        LoginPage.login('', '')

        LoginPage.elements.errorMessage()
            .should('contain', 'Epic sadface: Username is required')
    })

})