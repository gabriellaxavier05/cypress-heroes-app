// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import dadosHeroi from '../fixtures/dadosHeroi.json';
import LoginPage from '../pages/loginPage';
import CadastroHeroiPage from '../pages/cadastroHeroiPage';

// Instanciações
const loginPage = new LoginPage();
const cadastroHeroiPage = new CadastroHeroiPage();

describe('Testes de cadastro de herói', () => {
/*     const seletoresCadHeroi = {
        btnCadastroHeroi: 'button',
        campoName: "[name='name']",
        campoPrice: "[name='price']",
        campoFans: "[name='fans']",
        campoSaves: "[name='saves']",
        campoPowers: "[data-cy='powersSelect']",
        campoAvatarHeroi: "[type='file']",
        btnSubmitCadHeroi: 'button',
        nomeHeroiCadastrado: "[data-cy='name']",
        verificadorPreenchimentoCampos: '.text-red-500'
    } */
    
    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
    });

    it('Realizar cadastro de herói com sucesso', () => {
        cadastroHeroiPage.acessaTelaCadastroHeroi();
        cadastroHeroiPage.preencheCamposTxtCadHeroi({
            name: dadosHeroi.heroiSucesso.name,
            price: dadosHeroi.heroiSucesso.price,
            fans: dadosHeroi.heroiSucesso.fans,
            saves: dadosHeroi.heroiSucesso.saves
        });
        cadastroHeroiPage.selecionaPoder('4', '9');
        cadastroHeroiPage.anexaArquivoAvatar('super-ratinha.png');
        cadastroHeroiPage.cadastraHeroi();
        cadastroHeroiPage.verificaHeroiCadastrado(dadosHeroi.heroiSucesso.name);
    });

    it.only('Cadastro inválido de herói', () => {
        cadastroHeroiPage.acessaTelaCadastroHeroi();
        cadastroHeroiPage.preencheCamposTxtCadHeroi({
            name: dadosHeroi.heroiFalha.name,
            fans: dadosHeroi.heroiFalha.fans,
            saves: dadosHeroi.heroiFalha.saves
        });
        cadastroHeroiPage.anexaArquivoAvatar('super-sopradora.png');
        cadastroHeroiPage.cadastraHeroi();
        cadastroHeroiPage.verificaPreenchimentoCampos('Price is required', 0);
        cadastroHeroiPage.verificaPreenchimentoCampos('Powers is required', 1);

        /* cy.get(seletoresCadHeroi.btnCadastroHeroi).contains('Create New Hero').click();
        cy.get(seletoresCadHeroi.campoName).type(dadosHeroi.heroiFalha.name);
        cy.get(seletoresCadHeroi.campoFans).type(dadosHeroi.heroiFalha.fans);
        cy.get(seletoresCadHeroi.campoSaves).type(dadosHeroi.heroiFalha.saves);
        cy.get(seletoresCadHeroi.campoAvatarHeroi).selectFile('cypress/fixtures/super-sopradora.png'); // seleciona o arquivo de avatar do herói
        cy.get(seletoresCadHeroi.btnSubmitCadHeroi).contains('Submit').click();
        cy.get(seletoresCadHeroi.verificadorPreenchimentoCampos).should('contain', 'Price is required'); // verifica se a mensagem de erro do campo Price é exibida
        cy.get(seletoresCadHeroi.verificadorPreenchimentoCampos).should('contain', 'Powers is required'); // verifica se a mensagem de erro do campo Powers é exibida */
    });
});