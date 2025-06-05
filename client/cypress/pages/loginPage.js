class LoginPage {
    listaSeletores() {
        const seletoresLogin = {
            btnLogin: '.undefined',
            campoEmail: "[name='email']",
            campoPassword: "[name='password']",
            btnSignIn: ".w-full",
            alertaErroLogin: '.text-red-500'
        }

        return seletoresLogin;
    }

    acessaPaginaInicial() {
        cy.visit('/heroes');
    }

    realizaLogin(email, password) {
        cy.get(this.listaSeletores().btnLogin).eq(0).click();
        cy.get(this.listaSeletores().campoEmail).type(email);
        cy.get(this.listaSeletores().campoPassword).type(password);
        cy.get(this.listaSeletores().btnSignIn).eq(3).click();
    }

    verificaAlertaErroLogin(mensagem) {
        cy.get(this.listaSeletores().alertaErroLogin).should('contain', mensagem);
    }
}

export default LoginPage; // para usar a classe externamente