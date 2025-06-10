// Importações
import LoginPage from '../pages/loginPage';
import ContratacaoHeroiPage from '../pages/contratacaoHeroiPage';
import dadosUsuario from '../fixtures/dadosUsuario.json'

// Instanciações
const loginPage = new LoginPage();
const contratacaoHeroiPage = new ContratacaoHeroiPage;


describe('Testes de contratação de heróis', () => {

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
    });

    it('Contratar herói com sucesso', () => {
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
        contratacaoHeroiPage.clicaBotaoContrHeroi(4);
        contratacaoHeroiPage.verificaModalContratacaoAberto();
        contratacaoHeroiPage.confirmaContrHeroi()
        contratacaoHeroiPage.verificaAtualizacaoContador("18");
    });

    it('Contração inválida de herói', () => {
        contratacaoHeroiPage.clicaBotaoContrHeroi(4);
        contratacaoHeroiPage.verificaModalCobrancaLogin();
    });
});