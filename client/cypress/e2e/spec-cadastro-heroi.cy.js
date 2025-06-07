// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import dadosHeroi from '../fixtures/dadosHeroi.json';
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
        campoPowers: "[data-cy='powersSelect']",
        campoAvatarHeroi: "[type='file']",
        btnSubmitCadHeroi: 'button',
        nomeHeroiCadastrado: "[data-cy='name']",
        verificadorPreenchimentoCampos: '.text-red-500'
    }
    
    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
    });

    it('Realizar cadastro de herói com sucesso', () => {
        cy.get(seletoresCadHeroi.btnCadastroHeroi).contains('Create New Hero').click();
        cy.get(seletoresCadHeroi.campoName).type(dadosHeroi.heroiSucesso.name);
        cy.get(seletoresCadHeroi.campoPrice).type(dadosHeroi.heroiSucesso.price);
        cy.get(seletoresCadHeroi.campoFans).type(dadosHeroi.heroiSucesso.fans);
        cy.get(seletoresCadHeroi.campoSaves).type(dadosHeroi.heroiSucesso.saves);
        cy.get(seletoresCadHeroi.campoPowers).select(['4', '9']); // seleciona os poderes do herói (invisibilidade e super velocidade)
        cy.get(seletoresCadHeroi.campoAvatarHeroi).selectFile('cypress/fixtures/super-ratinha.png'); // seleciona o arquivo de avatar do herói
        cy.get(seletoresCadHeroi.btnSubmitCadHeroi).contains('Submit').click();
        cy.get(seletoresCadHeroi.nomeHeroiCadastrado).should('contain', 'Super Ratinha'); // verifica se o herói foi cadastrado com sucesso
    });

    it.only('Cadastro inválido de herói', () => {
        cy.get(seletoresCadHeroi.btnCadastroHeroi).contains('Create New Hero').click();
        cy.get(seletoresCadHeroi.campoName).type(dadosHeroi.heroiFalha.name);
        cy.get(seletoresCadHeroi.campoFans).type(dadosHeroi.heroiFalha.fans);
        cy.get(seletoresCadHeroi.campoSaves).type(dadosHeroi.heroiFalha.saves);
        cy.get(seletoresCadHeroi.campoAvatarHeroi).selectFile('cypress/fixtures/super-sopradora.png'); // seleciona o arquivo de avatar do herói
        cy.get(seletoresCadHeroi.btnSubmitCadHeroi).contains('Submit').click();
        cy.get(seletoresCadHeroi.verificadorPreenchimentoCampos).should('contain', 'Price is required'); // verifica se a mensagem de erro do campo Price é exibida
        cy.get(seletoresCadHeroi.verificadorPreenchimentoCampos).should('contain', 'Powers is required'); // verifica se a mensagem de erro do campo Powers é exibida
    });
});