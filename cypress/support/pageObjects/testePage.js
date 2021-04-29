/// <reference types="Cypress"/>

import TesteElements from '../elements/testeElements'
const Elementos = new TesteElements
const url = Cypress.config("baseUrl")

class TestePage {

    abrirUrl(){
        cy.visit(url)
    }
    
    preencherCampoPrimeiroNome(){
        cy.get(Elementos.campoPrimeiroNome()).type('Janaina')
    }

    preencherCampoSobrenome(){
        cy.get(Elementos.campoSobrenome()).type('Vieira')
    }

    preencherCampoEndereco(){
        cy.get(Elementos.campoEndereco()).type('Rua A Nº10, Jd. Adriana, Guarulhos-SP')
    }

    preencherCampoEmail(){
        cy.get(Elementos.campoEmail()).type('janaina.2592@gmail.com')
    }

    preencherCampoTelefone(){
        cy.get(Elementos.campoTelefone()).type('(11) 975093485')
    }

    clicarCampoGenero(){
        cy.get(Elementos.campoGenero()).click()
    }

    clicarCampoHobbies(){
        cy.get(Elementos.campoHobbies()).click()
    }

    selecionarCampoLinguas(){
        cy.get(Elementos.clickCampoLinguas()).click()
        cy.get(Elementos.campoLinguas()).contains('English').click()
        cy.get(Elementos.campoLinguas()).contains('Arabic').click()
        cy.get(Elementos.clickFora()).click()
    }

    selecionarCampoHabilidades(){
        
        cy.get(Elementos.campoHabilidades()).select('APIs')
    }

    selecionarCampoPais(){
        cy.get(Elementos.campoPais()).select('Brazil')
    }

    selecionarCampoSelecionePais(){
        cy.get(Elementos.botaoSelecionePais()).click()
        cy.get(Elementos.campoSelecionePais()).click()
    }

    selecionarCampoData(){
        cy.get(Elementos.campoDataAno()).select('1992')
        cy.get(Elementos.campoDataMes()).select('December')
        cy.get(Elementos.campoDataDia()).select('25')
    }

    preencherCampoSenha(){
        cy.get(Elementos.campoSenha()).type('Senha01')
    }

    preencherCampoConfirmeSenha(){
        cy.get(Elementos.campoConfirmeSenha()).type('Senha01')
    }

    clicarBotaoRefresh(){
        cy.get(Elementos.botaoRefresh()).click()
    }
    
    validarTelaLimpa(){
        cy.screenshot()
    }
    
    }
    export default TestePage;