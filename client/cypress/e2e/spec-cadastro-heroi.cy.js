// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import LoginPage from '../pages/loginPage';

// Instanciações
const loginPage = new LoginPage();

describe('Testes de cadastro de herói', () => {
    const seletoresCadHeroi = {
        btnCadastroHeroi: 'button',
        campoName: "[name='name']",
        campoPrice: "[name='price']",
        campoFans: "[name='fans']",
        campoSaves: "[name='saves']",
        campoPowers: "[name='powers']",
    }
    
    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
    });

    it('Realizar cadastro de herói com sucesso', () => {
        cy.get(seletoresCadHeroi.btnCadastroHeroi).contains('Create New Hero').click();
        cy.get(seletoresCadHeroi.campoName).type('Super Ratinha');
        cy.get(seletoresCadHeroi.campoPrice).type('50');
        cy.get(seletoresCadHeroi.campoFans).type('47');
        cy.get(seletoresCadHeroi.campoSaves).type('49');

    });
});