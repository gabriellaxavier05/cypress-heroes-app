// Importações
import dadosUsuario from '../fixtures/dadosUsuario.json';
import dadosHeroi from '../fixtures/dadosHeroi.json';
import LoginPage from '../pages/loginPage';
import CadastroHeroiPage from '../pages/cadastroHeroiPage';

// Instanciações
const loginPage = new LoginPage();
const cadastroHeroiPage = new CadastroHeroiPage();

describe('Testes de cadastro de herói', () => {
    beforeEach(() => {
        cy.clearLocalStorage(); // Limpa o armazenamento local antes de cada teste
        loginPage.acessaPaginaInicial(); // acessa a página inicial
        loginPage.realizaLogin(dadosUsuario.usuarioSucesso.email, dadosUsuario.usuarioSucesso.password); // realiza o login com dados válidos
    });

    it.only('Realizar cadastro de herói com sucesso', () => {
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

    it('Cadastro inválido de herói', () => {
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
    });
});