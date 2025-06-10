// Importações
import LoginPage from '../pages/loginPage';
import ExclusaoHeroiPage from '../pages/exclusaoHeroiPage';
import dadosUsuario from '../fixtures/dadosUsuario.json';

// Instanciações
const loginPage = new LoginPage();
const exclusaoHeroiPage = new ExclusaoHeroiPage();

describe('Teste de exclusão de herói', () => {

    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
    });

    it('Excluir herói com sucesso', () => {
        exclusaoHeroiPage.escolheHeroiPraExcluir(5);
        exclusaoHeroiPage.verificaModalExclusaoAberto();
        exclusaoHeroiPage.confirmaExclusaoHeroi();
        exclusaoHeroiPage.verificaSeHeroiFoiExcluido('Collect Call Paul');
    });
});