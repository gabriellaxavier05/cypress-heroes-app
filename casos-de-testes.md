## Cenários e casos de testes das funcionalidades - Cypress Heroes

### Cenário 01: Realizar login

#### CT01: Realizar login com sucesso
- Pré-condições: ter os dados de acesso para realizar login
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