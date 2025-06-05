

describe('Testes de login', () => {
    beforeEach(() => {
        cy.clearLocalStorage(); // limpa tudo do localStorage
    });

    it('Realizar login com sucesso', () => {
        cy.visit('http://localhost:3000/heroes');
    });
});