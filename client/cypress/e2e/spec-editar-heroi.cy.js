// Importações
import LoginPage from "../pages/loginPage";
import EdicaoHeroiPage from "../pages/edicaoHeroiPage";
import dadosUsuario from '../fixtures/dadosUsuario.json';
import dadosHeroi from '../fixtures/dadosHeroi.json';

// Instanciações
const loginPage = new LoginPage();
const edicaoHeroiPage = new EdicaoHeroiPage();

describe('Testes de edição de informações de heróis', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password);
    });

    it('Editar informações do herói com sucesso', () => {
        edicaoHeroiPage.acessaPagEdicaoHeroi(6);
        edicaoHeroiPage.verificaNomeHeroiCorretoPraEditar('Fly Girl');
        edicaoHeroiPage.editaInfosHeroi({
            name: dadosHeroi.edicaoHeroi.name,
            price: dadosHeroi.edicaoHeroi.price
        });
        edicaoHeroiPage.salvaAlteracoesHeroi();
        edicaoHeroiPage.verificaAtualizacaoNomeHeroi(6, 'Super Garota Voadora');
        edicaoHeroiPage.verificaAtualizacaoPrecoHeroi(6, '38');
    });
});