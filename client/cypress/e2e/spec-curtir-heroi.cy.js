// Importações
import LoginPage from "../pages/loginPage";
import CurtidaHeroiPage from "../pages/curtidaHeroiPage";
import dadosUsuario from '../fixtures/dadosUsuario.json';

// Instanciações
const loginPage = new LoginPage();
const curtidaHeroiPage = new CurtidaHeroiPage();

describe('Testes de curtida de herói', () => {

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
    });

    it('Curtir herói com sucesso', () => {
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
        curtidaHeroiPage.curteHeroi(1);
        curtidaHeroiPage.verificaAtualizacaoContadorFans(1, '71');
    });

    it.only('Curtida inválida de herói', () => {
        curtidaHeroiPage.curteHeroi(1);
        curtidaHeroiPage.cobraLoginParaCurtirHeroi();
        /* cy.get(seletoresCurtidaHeroi.textoModalCobrancaLogin).contains('You must log in to like.').should('be.visible'); */
    });

});