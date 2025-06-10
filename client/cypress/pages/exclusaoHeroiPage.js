class ExclusaoHeroiPage {
    listaSeletores() {
        const seletoresExclusaoHeroi = {
            btnExcluirHeroi: "[data-cy='trash']",
            textoModalDeleteHero: 'h3',
            btnYesExclusao: '.undefined',
            nomeHeroi: "[data-cy='name']"
        }

        return seletoresExclusaoHeroi; // retorna os seletores
    }

    escolheHeroiPraExcluir(posicao) {
        cy.get(this.listaSeletores().btnExcluirHeroi).eq(posicao).click(); // clica no btn "Excluir" da posição especificada do herói escolhido
    }

    verificaModalExclusaoAberto() {
        cy.get(this.listaSeletores().textoModalDeleteHero).contains('Delete Hero?').should('be.visible');
    }

    confirmaExclusaoHeroi() {
        cy.get(this.listaSeletores().btnYesExclusao).contains('Yes').click();
    }

    verificaSeHeroiFoiExcluido (nomeHeroi) {
        cy.get(this.listaSeletores().nomeHeroi).contains(nomeHeroi).should('not.exist');
    }
}

export default ExclusaoHeroiPage; // para usar em outros arquivos