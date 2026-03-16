# 🚀 Projeto de Automação de Testes E2E e API com Cypress

Este projeto tem como objetivo demonstrar a implementação de **automação de testes end-to-end (E2E)** e **testes de API** utilizando o framework **Cypress**, aplicando boas práticas de arquitetura de testes como **Page Object Model**, **Custom Commands**, **Fixtures** e **Hooks**.

O projeto foi desenvolvido para simular um ambiente de automação profissional, com separação de responsabilidades e estrutura escalável.

---

# 🧪 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Serverest (API de testes)
* Page Object Model (POM)

---

# 🧱 Arquitetura do Projeto

A automação foi estruturada utilizando o padrão **Page Object Model**, que separa as responsabilidades entre **testes, páginas e dados**, tornando o código mais limpo, reutilizável e fácil de manter.

### Estrutura de diretórios

```
cypress
│
├─ e2e
│   ├─ produtos
│   │   └─ ordenacao.cy.js
│   │
│   ├─ carrinho
│   │   └─ carrinho.cy.js
│   │
│   └─ checkout
│       └─ checkout.cy.js
│
├─ fixtures
│   └─ produtos.json
│
├─ pages
│   ├─ LoginPage.js
│   └─ ProductsPage.js
│
└─ support
    ├─ commands.js
    └─ e2e.js
```

---

# 📐 Padrões de Projeto Utilizados

## Page Object Model (POM)

O **Page Object Model** é um padrão amplamente utilizado em automação de testes que consiste em representar cada página da aplicação como uma classe.

Essas classes contêm:

* seletores
* ações do usuário
* validações

Exemplo:

```javascript
class ProductsPage {

  ordenar(ordem) {
    cy.get('[data-test="product-sort-container"]').select(ordem)
  }

  adicionarProduto(produto) {
    cy.contains('.inventory_item', produto)
      .within(() => {
        cy.contains('Add to cart').click()
      })
  }

}
```

Isso permite que os testes fiquem mais legíveis:

```
ProductsPage.ordenar('Price (low to high)')
ProductsPage.adicionarProduto('Sauce Labs Onesie')
```

---

# ⚙️ Custom Commands

Custom Commands permitem criar **comandos reutilizáveis** dentro do Cypress.

Eles são definidos no arquivo:

```
cypress/support/commands.js
```

Exemplo:

```javascript
Cypress.Commands.add('login', (username, password) => {

  LoginPage.visit()
  LoginPage.login(username, password)

})
```

Uso no teste:

```
cy.login('standard_user', 'secret_sauce')
```

Custom commands são geralmente utilizados para:

* login
* logout
* reset de estado
* chamadas de API
* setup de dados

---

# 📦 Fixtures

Fixtures são arquivos utilizados para armazenar **dados de teste externos**.

Localização:

```
cypress/fixtures
```

Exemplo:

```
produtos.json
```

Exemplo de estrutura:

```json
{
  "lowPriceProducts": [
    {
      "name": "Sauce Labs Onesie",
      "price": "$7.99"
    }
  ]
}
```

Uso no teste:

```
cy.fixture('produtos').then((data) => {
  dados = data
})
```

Isso permite separar **dados de teste da lógica de automação**, facilitando manutenção.

---

# 🔁 Hooks

Hooks permitem executar código antes ou depois dos testes.

Principais hooks utilizados:

### before()

Executa uma vez antes da suíte de testes.

Utilizado para carregar fixtures.

```
before(() => {
  cy.fixture('produtos').then((data) => {
    dados = data
  })
})
```

---

### beforeEach()

Executa antes de cada teste.

Utilizado para login e preparação do ambiente.

```
beforeEach(() => {

  cy.login('standard_user','secret_sauce')

})
```

---

# ▶️ Como Executar o Projeto

## 1️⃣ Instalar dependências

```
npm install
```

---

## 2️⃣ Abrir Cypress

```
npx cypress open
```

ou rodar em modo headless:

```
npx cypress run
```

---

# 🌐 Testes de API

Este projeto também utiliza a **Serverest**, uma API criada para testes automatizados.

Para iniciar a API execute:

```
npx serverest@latest
```

Após iniciar, a API estará disponível em:

```
http://localhost:3000
```

Documentação da API:

```
http://localhost:3000/docs
```

Essa API permite testar endpoints como:

* cadastro de usuários
* login
* cadastro de produtos
* carrinho

---

# 📊 Boas Práticas Aplicadas

Este projeto aplica algumas das principais boas práticas de automação:

* Page Object Model
* Separação entre lógica e dados
* Reutilização de código
* Estrutura escalável
* Uso de fixtures
* Custom commands
* Hooks para setup de testes

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com objetivo de:

* demonstrar conhecimentos em automação de testes
* aplicar padrões de projeto utilizados na indústria
* praticar testes E2E e testes de API
* estruturar um projeto de automação escalável

---

# 👨‍💻 Autor

Projeto desenvolvido por **Sérgio**.
