

describe('Testes de login', () => {

    const seletoresLogin = {
        btnLogin: '.undefined',
        campoEmail: "[name='email']",
        campoPassword: "[name='password']",
        btnSignIn: ".w-full"
    }

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
    });

    it('Login com sucesso', () => {
        cy.visit('/heroes')
        cy.get(seletoresLogin.btnLogin).eq(0).click();
        cy.get(seletoresLogin.campoEmail).type('admin@test.com')
        cy.get(seletoresLogin.campoPassword).type('test123');
        cy.get(seletoresLogin.btnSignIn).eq(3).click();
    });
});
