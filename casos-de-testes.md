## Cenários e casos de testes das funcionalidades - Cypress Heroes

### Cenário 01: Realizar login

#### CT01: Realizar login com sucesso como Admin
- Pré-condições: ter os dados de acesso de Admin para realizar login
- Passos:  
    1. Na página inicial, clicar no botão “Login”;  
    2. No modal aberto, preencher o campo “Email” com o e-mail válido; 
    3. No campo “Password”, preencher o campo com a senha válida;
    4. Clicar no botão “Sign In”.
- Resultado esperado: o login deve ter sido realizado.
- Resultado obtido: OK


#### CT02: Login inválido
- Pré-condições: ter dados inválidos de acesso para realizar login
- Passos
    1. Na página inicial, clicar no botão “Login”;
    2. No modal aberto, preencher o campo “Email” com o e-mail inválido;
    3. No campo “Password”, preencher o campo com a senha inválida;
    4. Clicar no botão “Sign In”.
- Resultado esperado: deve ser exibida uma mensagem de erro sobre os dados inválidos.
- Resultado obtido: OK

<br>

### Cenário 02: Realizar logout

#### CT03: Realizar logout do app com sucesso
- Pré-condições: ter realizado login com sucesso no app
- Passos:
    1. Na navbar do app, clicar no botão "Logout"
- Resultado esperado: o logout deve ter sido feito com sucesso 
- Resultado obtido: OK

<br>

### Cenário 03: Cadastrar herói

#### CT04: Cadastrar herói com sucesso
- Pré-condições: estar logado no app como Admin
- Passos:
    1. Clicar no botão "Create New Hero"
    2. Preencher o campo "Name" com um nome para o herói a ser cadastrado
    3. Preencher o campo "Price" com um valor de contratação do herói
    4. Preencher o campo "Fans" com um número de fãs que o herói deve possuir
    5. Preencher o campo "Saves" com um número de favoritos que o herói recebeu
    6. Selecionar no campo "Powers" (com o ctrl + clique) os poderes que o herói possui
    7. Anexar uma imagem como avatar do herói no campo "Avatar"
    8. Clicar no botão "Submit" para criar o herói
- Resultado esperado: o herói deve ser cadastrado e deverá aparecer na listagem da página "Heroes", exibindo seu nome, preço, número de fãs, número de favoritos dados e seus poderes
- Resultado obtido: 