
class EfetuarLogin {

    go() {

        cy.visit('/')
        cy.get('.user-nav .user-info').contains('Entre ou cadastre-se').click()
    }

    submit() {
        cy.get('.css-yl1sti', {timeout: 12000}).contains('ENTRAR').click()
    }

    mensagemObrigatoriedade(expectedMessage) {
        cy.contains('.css-127cg2q', expectedMessage).should('be.visible')

    }

    preencherFormulario() {
        cy.get('input[name="login"]').type('11986690711')
        cy.get('input[name="password"]').type('123')
    }

    mensagemCombinacao(expectedMessage) {
        cy.contains('.modal-alert-message', expectedMessage).should('be.visible')
    }
}

export default new EfetuarLogin;