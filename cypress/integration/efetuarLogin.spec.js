import EfetuarLogin from "../pages/EfetuarLogin"

describe('Efetuar Login',()=>{

    it('Validar preenchimento de campos obrigatórios',function(){
        EfetuarLogin.go()
        cy.wait(1000)
        EfetuarLogin.submit()

        EfetuarLogin.mensagemObrigatoriedade('este campo é obrigatório')

    })

    it('Validar combinação inválida',function(){
        EfetuarLogin.go()
        cy.wait(500)
        EfetuarLogin.preencherFormulario()
        EfetuarLogin.submit()
        EfetuarLogin.mensagemCombinacao('Esta combinação de usuário e senha é inválida.')
        
        cy.get('.css-yl1sti').contains('OK').click()
    })

})