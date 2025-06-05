// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import LoginPage from '../pages/loginPage.js';

// instanciações
const loginPage = new LoginPage();


describe('Testes de login', () => {

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
    });

    it('Login com sucesso', () => {
        loginPage.acessaPaginaInicial();
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password);
    });

    it('Login com dados inválidos', () => {
        loginPage.acessaPaginaInicial();
        loginPage.realizaLogin(dadosUsuario.usuarioFalha.email, dadosUsuario.usuarioFalha.password);
        loginPage.verificaAlertaErroLogin('Invalid email or password');
    });
});
