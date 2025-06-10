class ContratacaoHeroiPage {
    listaSeletores() {
        const seletoresContrHeroi = {
            btnContratacaoHeroi: "[data-cy='money']",
            modalContratacaoHeroi: ".open",
            btnYesContr: ".undefined",
            contadorSaves: "[data-cy='saves']",
            modalCobrancaLogin: ".flex"
        }

        return seletoresContrHeroi; // retorna os seletores
    }

    clicaBotaoContrHeroi(indice) {
        cy.get(this.listaSeletores().btnContratacaoHeroi).eq(indice).click();
    }

    verificaModalContratacaoAberto() {
        cy.get(this.listaSeletores().modalContratacaoHeroi).should('be.visible')
    }

    confirmaContrHeroi() {
        cy.get(this.listaSeletores().btnYesContr).contains("Yes").click(); // clica no botão "Yes" do modal de contratação
    }

    verificaAtualizacaoContador(qtdeContratacao) {
        cy.get(this.listaSeletores().contadorSaves).contains(qtdeContratacao);
    }

    verificaModalCobrancaLogin() {
        cy.get(this.listaSeletores().modalCobrancaLogin).should('be.visible');
    }
}

export default ContratacaoHeroiPage; // para usar em outros arquivos