class LoginPage {

    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
        title: () => cy.get('[data-test="title"]')
    }

    visit() {
        cy.visit('https://www.saucedemo.com/')
    }

    login(username, password) {

        if (username) {
            this.elements.usernameInput().type(username)
        }

        if (password) {
            this.elements.passwordInput().type(password)
        }

        this.elements.loginButton().click()
    }

}

export default new LoginPage()