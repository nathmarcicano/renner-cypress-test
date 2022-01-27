

class RealizarCadastro {

    mensagemInvalida(expectedMessage) {
        cy.contains('.css-127cg2q', expectedMessage).should('be.visible')
    }

    mensagemModal(expectedMessage) {
        cy.contains('.modal-alert-message', expectedMessage).should('be.visible')
    }

    preencherFormulario(usuario) {
        cy.get('input[name="login"]').type(usuario.email)
        cy.get(':nth-child(6) > input').type(usuario.cpf)
        cy.get('input[name="firstName"]').type(usuario.nome)
        cy.get('input[name="lastName"]').type(usuario.sobrenome)
        cy.get(':nth-child(9) > input').type(usuario.dataNascimento)
        cy.get('.css-8n5tyy > :nth-child(1)').contains('Feminino').click()
        cy.get('input[name="password"').type(usuario.password)
        cy.get('.css-e1wxkj').type(usuario.telefone)

        cy.get(':nth-child(2) > .custom-checkbox').click()

    }

    acionarBotaoCadastrar() {
        cy.get('.css-yl1sti').contains('Cadastrar').click()
    }

    mensagemObrigatoriedade(expectedMessage) {
        cy.contains('.css-127cg2q', expectedMessage)
    }
}


export default new RealizarCadastro;