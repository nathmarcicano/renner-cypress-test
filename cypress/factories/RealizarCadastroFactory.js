var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    usuario: function () {


        var firstName = faker.name.firstName()
        //        var lastName = faker.name.lastName()


        var data = {
            email: faker.internet.email(firstName),
            cpf: cpf.generate(),
            nome: faker.name.firstName(),
            sobrenome: faker.name.lastName(),
            dataNascimento: "01/01/2000",
            genero: "feminino",
            password: "123456",
            telefone: "33333333"

        }

        return data
    }

}
