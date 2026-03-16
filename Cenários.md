# 📄 README — BDD Test Scenarios

Automação de testes **End-to-End (E2E)** utilizando **Cypress** na aplicação de demonstração **Sauce Demo**.

Os cenários abaixo seguem o padrão **BDD** utilizando **Gherkin**.

---

# 🔐 Feature: Login

```gherkin
Feature: Login
Como um usuário da aplicação
Quero realizar login
Para acessar a lista de produtos
```

### Cenário: Login válido

```gherkin
Cenário: Login com sucesso
Dado que estou na tela de login
E informo usuário "standard_user"
E informo senha "secret_sauce"
Quando clico em login
Então devo acessar a página de produtos
```

### Cenário: Usuário inválido

```gherkin
Cenário: Usuário inválido
Dado que estou na tela de login
Quando informo usuário inválido
E informo senha válida
E clico em login
Então devo ver uma mensagem de erro
```

### Cenário: Senha inválida

```gherkin
Cenário: Senha inválida
Dado que estou na tela de login
Quando informo usuário válido
E informo senha inválida
E clico em login
Então devo ver uma mensagem de erro
```

### Cenário: Usuário vazio

```gherkin
Cenário: Usuário obrigatório
Dado que estou na tela de login
Quando não informo usuário
E clico em login
Então devo ver a mensagem "Username is required"
```

### Cenário: Senha vazia

```gherkin
Cenário: Senha obrigatória
Dado que estou na tela de login
Quando informo usuário válido
E não informo senha
E clico em login
Então devo ver a mensagem "Password is required"
```

### Cenário: Usuário e Senha vazios

```gherkin
Cenário: Usuário e senha obrigatórios
Dado que estou na tela de login
Quando não informo usuário
E não informo senha
E clico em login
Então devo ver a mensagem "Username is required"
```

---

# 🛍 Feature: Ordenação de Produtos

```gherkin
Feature: Ordenação de produtos
Como usuário
Quero ordenar os produtos
Para visualizar itens de forma organizada
```

### Cenário: Ordenar produtos A → Z

```gherkin
Cenário: Ordenar por nome crescente
Dado que estou na lista de produtos
Quando seleciono "Name (A to Z)"
Então os produtos devem aparecer em ordem alfabética
```

### Cenário: Ordenar produtos Z → A

```gherkin
Cenário: Ordenar por nome decrescente
Dado que estou na lista de produtos
Quando seleciono "Name (Z to A)"
Então os produtos devem aparecer em ordem alfabética inversa
```

### Cenário: Ordenar por preço decrescente

```gherkin
Cenário: Ordenar por preço decrescente
Dado que estou na lista de produtos
Quando seleciono "Price (high to low)"
Então os produtos devem aparecer do maior para o menor preço
```

### Cenário: Ordenar por preço crescente

```gherkin
Cenário: Ordenar por preço crescente
Dado que estou na lista de produtos
Quando seleciono "Price (low to high)"
Então os produtos devem aparecer do menor para o maior preço
```

---

# 🛒 Feature: Carrinho de Compras

```gherkin
Feature: Carrinho de compras
Como usuário
Quero gerenciar produtos no carrinho
Para realizar uma compra
```

### Cenário: Adicionar produtos ao carrinho

```gherkin
Cenário: Adicionar produtos
Dado que estou logado
Quando adiciono três produtos
Então o carrinho deve mostrar 3 itens
```

### Cenário: Visualizar produtos no carrinho

```gherkin
Cenário: Visualizar carrinho
Dado que tenho produtos no carrinho
Quando acesso o carrinho
Então devo ver os produtos adicionados
```

### Cenário: Remover produto

```gherkin
Cenário: Remover produto do carrinho
Dado que tenho produtos no carrinho
Quando removo um produto
Então ele não deve aparecer no carrinho
```

### Cenário: Adicionar e remover produto

```gherkin
Cenário: Adicionar e remover o mesmo produto
Dado que estou na página de produtos
Quando adiciono um produto
E removo o produto
Então o carrinho deve ficar vazio
```

---

# 💳 Feature: Checkout

```gherkin
Feature: Finalização de compra
Como usuário
Quero finalizar uma compra
Para concluir meu pedido
```

### Cenário: Finalizar compra

```gherkin
Cenário: Finalizar compra com sucesso
Dado que tenho um produto no carrinho
Quando preencho meus dados de compra
E finalizo o pedido
Então devo ver a mensagem de pedido concluído
```

### Cenário: Calcular Total e SubTotal da compra

```gherkin
Cenário: Validar cálculo do total
Dado que estou logado no sistema
E adiciono os produtos "Sauce Labs Backpack" e "Sauce Labs Bike Light" ao carrinho
Quando inicio o checkout
Então o valor total deve ser igual à soma do subtotal com a taxa
```

---

# 🧪 Tecnologias utilizadas

* Cypress
* JavaScript
* BDD
* Gherkin

