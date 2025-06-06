## Bugs encontrados no Cypress Heroes 🐞

### Lista de bugs

#### Bug 01: Contador negativo no campo "Saves" na página de cadastro de herói
- Descrição: Ao cadatrar um herói no app e não preencher o campo "Saves", ao clicar no botão "Submit" da página de cadastro de herói, o campo em questão fica com o contador negativo, como -1.
- Passos para execução do bug:
    1. Clicar no botão "Create New Hero" para criar o herói
    2. Deixar o campo "Saves" vazio
    3. Clicar no botão "Submit"
- Resultado obtido: o campo "Saves" fica com o contador negativo, sendo -1 e não 0 ou vazio (como fica o campo "Fans" quando este não recebe nenhum valor atribuído).
- Evidências:
        
    ![Bug contador negativo campo "Saves"](imgs_bugs/bug01_cont_Saves.png)
