import EfetuarLogin from "../pages/EfetuarLogin"

describe('Efetuar Login',()=>{

    it('Validar preenchimento de campos obrigatórios',function(){
        EfetuarLogin.go()
        EfetuarLogin.submit()

        EfetuarLogin.mensagemObrigatoriedade('este campo é obrigatório')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })    

    })

    it('Validar combinação inválida',function(){
        EfetuarLogin.go()
        EfetuarLogin.preencherFormulario()
        EfetuarLogin.submit()
        EfetuarLogin.mensagemCombinacao('Esta combinação de usuário e senha é inválida.')
        
        cy.get('.css-yl1sti').contains('OK').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })


})