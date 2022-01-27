

describe('home page', () => {
    it('pagina deve estar online', function() {
        cy.visit('/')
        cy.get('[href="/"] > .store > .responsive-image > img').should('be.visible')

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

})
