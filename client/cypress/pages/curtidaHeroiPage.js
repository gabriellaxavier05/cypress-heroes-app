class CurtidaHeroiPage {
    listaSeletores() {
        const seletoresCurtidaHeroi = {
            btnLike: "[data-cy='like']",
            campoFans: "[data-cy='fans']",
            textoModalCobrancaLogin: 'h5',
        }

        return seletoresCurtidaHeroi; // retorna os seletores
    }

    curteHeroi(posicao) {
        cy.get(this.listaSeletores().btnLike).eq(posicao).click(); // clica no botão cujo índice é especificado
    }

    verificaAtualizacaoContadorFans(posicao, qtdeFans) {
        cy.get(this.listaSeletores().campoFans).eq(posicao).contains(qtdeFans); // verifica se o índice especificado atualizou o contador para o valor esperado
    }

    cobraLoginParaCurtirHeroi() {
        cy.get(this.listaSeletores().textoModalCobrancaLogin).contains('You must log in to like.').should('be.visible');
    }
}

export default CurtidaHeroiPage; // para usar em outros arquivos