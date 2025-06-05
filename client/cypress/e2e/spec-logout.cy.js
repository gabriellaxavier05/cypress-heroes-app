// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import LoginPage from '../pages/loginPage.js';

// Instanciações
const loginPage = new LoginPage();

describe('Testes de logout', () => {
    const seletoresLogout = {
        btnLogout: '.undefined'
    }

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
    });

    it('Realizar logou com sucesso', () => {
        loginPage.acessaPaginaInicial();
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password);
        cy.get(seletoresLogout.btnLogout).contains('Logout').click();
    });
});