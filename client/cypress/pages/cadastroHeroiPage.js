class CadastroHeroiPage {
  listaSeletores() {
    const seletoresCadHeroi = {
      btnCadastroHeroi: "button",
      campoName: "[name='name']",
      campoPrice: "[name='price']",
      campoFans: "[name='fans']",
      campoSaves: "[name='saves']",
      campoPowers: "[data-cy='powersSelect']",
      campoAvatarHeroi: "[type='file']",
      btnSubmitCadHeroi: "button",
      nomeHeroiCadastrado: "[data-cy='name']",
      verificadorPreenchimentoCampos: ".text-red-500",
    };

    return seletoresCadHeroi; // retorna os seletores
  }

  acessaTelaCadastroHeroi() {
    // acessa a tela de cadastro de herói
    cy.get(this.listaSeletores().btnCadastroHeroi)
      .contains("Create New Hero")
      .click();
  }

  preencheCamposTxtCadHeroi({ name, price, fans, saves }) {
    if (name) {
      cy.get(this.listaSeletores().campoName).type(name);
    }
    if (price) {
      cy.get(this.listaSeletores().campoPrice).type(price);
    }
    if (fans) {
      cy.get(this.listaSeletores().campoFans).type(fans);
    }
    if (saves) {
      cy.get(this.listaSeletores().campoSaves).type(saves);
    }
  }

  selecionaPoder(...opcoes) {
    cy.get(this.listaSeletores().campoPowers).select(opcoes);
  }

  anexaArquivoAvatar(nomeDoArquivo) {
    cy.get(this.listaSeletores().campoAvatarHeroi).selectFile(
      `cypress/fixtures/${nomeDoArquivo}`,
      { force: true }
    );
  }

  cadastraHeroi() {
    cy.get(this.listaSeletores().btnSubmitCadHeroi).contains("Submit").click();
  }

  verificaHeroiCadastrado(nomeHeroi) {
    cy.get(this.listaSeletores().nomeHeroiCadastrado).should(
      "contain",
      nomeHeroi
    );
  }

  verificaPreenchimentoCampos(mensagem, indice = 0) { // verifica se mensagens de erro aparecem com a posição especificada
    cy.get(this.listaSeletores().verificadorPreenchimentoCampos)
      .eq(indice)
      .should("contain", mensagem);
  }
}

export default CadastroHeroiPage; // para usar em outros arquivos externos