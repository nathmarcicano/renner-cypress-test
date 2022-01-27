//import RealizarCadastroFactory from "./factories/RealizarCadastroFactory"
import EfetuarLogin from "../pages/EfetuarLogin"
import RealizarCadastro from "../pages/RealizarCadastro"
import commands from "../support/commands"
import factories from "../factories/RealizarCadastroFactory"
import RealizarCadastroFactory from "../factories/RealizarCadastroFactory"

describe('Cadastrar Novo Usuário', () => {

    it('Validar email inválido', function () {

        EfetuarLogin.go()

        cy.get('.css-yl1sti').contains('QUERO ME CADASTRAR').click()

        cy.get('input[name="login"').type('teste')
        cy.get('.modal-registerlogin').click()

        RealizarCadastro.mensagemInvalida('E-mail inválido!')
    })

    it('Validar CPF inválido', function () {
        EfetuarLogin.go()


        cy.get('.css-yl1sti').contains('QUERO ME CADASTRAR').click()

        cy.get(':nth-child(6) > input').type('111.111.111-11')
        cy.get('.modal-registerlogin').click()

        RealizarCadastro.mensagemInvalida('CPF inválido!')

    })

    it('Validar data de nascimento', function () {

        var usuario = RealizarCadastroFactory.usuario()
        usuario.dataNascimento = '01/01/2022'

        EfetuarLogin.go()

        cy.get('.css-yl1sti').contains('QUERO ME CADASTRAR').click()

        RealizarCadastro.preencherFormulario(usuario)

        RealizarCadastro.mensagemInvalida('Desculpe. Atualmente, o cadastro em nossa Loja Virtual/APP está disponível apenas para maiores de 16 anos.')

    })

    it('Validar minimo de caracteres para senha', function () {
        var usuario = RealizarCadastroFactory.usuario()
        usuario.password = '123'

        EfetuarLogin.go()


        cy.get('.css-yl1sti').contains('QUERO ME CADASTRAR').click()

        RealizarCadastro.preencherFormulario(usuario)
        RealizarCadastro.mensagemInvalida('Use pelo menos 6 caracteres')
    })


    it('Validar marcação do Eu sou um Robo', function () {
        var usuario = RealizarCadastroFactory.usuario()

        EfetuarLogin.go()


        cy.get('.css-yl1sti').contains('QUERO ME CADASTRAR').click()

        RealizarCadastro.preencherFormulario(usuario)
        RealizarCadastro.acionarBotaoCadastrar()
        RealizarCadastro.mensagemModal('Por favor, marque a caixa de validação.')

    })

    it.skip('Validar telefone inválido', function () {
        EfetuarLogin.go()

        cy.get('.css-yl1sti', { timeout: 10000 }).contains('QUERO ME CADASTRAR').click()
        cy.get('input[name="login"').type('teste19999@teste.com.br')
        cy.get(':nth-child(6) > input').type('751.816.270-99')
        cy.get('input[name="firstName"').type('Joana')
        cy.get('input[name="lastName"').type('Silva')
        cy.get(':nth-child(9) > input').type('01/01/2000')
        //     cy.get('custom-radio css-kjo3zf ehxoemx0').contains('Feminino').click()
        cy.get('input[name="password"').type('123456')
        cy.get('.css-e1wxkj').type('(22)')

        cy.get(':nth-child(2) > .custom-checkbox').click()

        cy.solveGoogleReCAPTCHA()

        cy.wait(1000)

        cy.get('.css-yl1sti').contains('Cadastrar').click()
        RealizarCadastro.mensagemModal('Número de telefone inválido')

    })

    it('Validar campos obrigatórios', function () {
        EfetuarLogin.go()

        cy.get('.css-yl1sti', { timeout: 10000 }).contains('QUERO ME CADASTRAR').click()

        cy.get(':nth-child(2) > .custom-checkbox').click()

        /*         cy.solveGoogleReCAPTCHA() 
                cy.wait(1000)
         */

        cy.get('.css-yl1sti').contains('Cadastrar').click()
        RealizarCadastro.mensagemModal('Por favor, marque a caixa de validação.')
        cy.get('.css-yl1sti').contains('OK').click()

        RealizarCadastro.mensagemObrigatoriedade('este campo é obrigatório')
    })
})

