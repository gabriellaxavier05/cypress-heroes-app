class EdicaoHeroiPage {
    listaSeletores() {
        const seletoresEdicaoHeroi = {
            btnLapis: "[data-cy='pencil']",
            tituloHeroiPagEdicao: "[data-cy='name']",
            campoNomeHeroi: "[name='name']",
            campoPriceHeroi: "[name='price']",
            btnSubmit: "button",
            campoNomeAtualizadoHeroi: "h5",
            campoPriceAtualizadoHeroi: "[data-cy='price']"
        }

        return seletoresEdicaoHeroi; // retorna os seletores
    }

    acessaPagEdicaoHeroi(posicao) {
        cy.get(this.listaSeletores().btnLapis).eq(posicao).click(); // acessa a página de edição de um herói cujo índice do btn é especificado
    }

    verificaNomeHeroiCorretoPraEditar(nomeHeroi) {
        cy.get(this.listaSeletores().tituloHeroiPagEdicao).contains(nomeHeroi); // verifica se está na página do herói que se deseja corrigir o título
    }

    editaInfosHeroi({name, price}) {
        if(name) {
            cy.get(this.listaSeletores().campoNomeHeroi).clear().type(name);
        }
        if(price) {
            cy.get(this.listaSeletores().campoPriceHeroi).clear().type(price);
        }
    }

    salvaAlteracoesHeroi() {
        cy.get(this.listaSeletores().btnSubmit).contains('Submit').click(); // clica no botão "Submit" da tela de edição
    }

    verificaAtualizacaoNomeHeroi(posicao, texto) {
        cy.get(this.listaSeletores().campoNomeAtualizadoHeroi).eq(posicao).contains(texto);
    }

    verificaAtualizacaoPrecoHeroi(posicao, price) {
        cy.get(this.listaSeletores().campoPriceAtualizadoHeroi).eq(posicao).contains(price);
    }
}

export default EdicaoHeroiPage; // para usar em outros arquivos