/* global Given, Then, When, And */

import TestePage from '../pageObjects/testePage'
const Pagina = new TestePage

Given("que acesso o site automation", () => {
    Pagina.abrirUrl();
})

When("preencher campo primeiro nome", () => {
    Pagina.preencherCampoPrimeiroNome();
})

And("preencher campo sobrenome", () => {
    Pagina.preencherCampoSobrenome();
})

And ("preencher campo endereço", () => {
    Pagina.preencherCampoEndereco();
})

And ("preencher campo email", () => {
    Pagina.preencherCampoEmail();
})

And ("preencher campo telefone", () => {
    Pagina.preencherCampoTelefone();
})

And ("clicar campo gênero", () => {
    Pagina.clicarCampoGenero();
})

And ("clicar campo hobbies", () => {
    Pagina.clicarCampoHobbies();
})

And ("selecionar campo línguas", () => {
    Pagina.selecionarCampoLinguas();
})

And ("selecionar campo habilidades", () => {
    Pagina.selecionarCampoHabilidades();
})
    
And ("selecionar campo país", () => {
    Pagina.selecionarCampoPais();
})

And ("Selecionar campo selecione país", () => {
    Pagina.selecionarCampoSelecionePais();
})

And ("selecionar campo data", () => {
    Pagina.selecionarCampoData();
})

And ("preencher campo senha", () => {
    Pagina.preencherCampoSenha();
})

And ("preencher campo confirme a senha", () => {
    Pagina.preencherCampoConfirmeSenha();
})

And("clico no botão Refresh", () => {
    Pagina.clicarBotaoRefresh();
})

Then("verifico que a tela foi atualizada", () => {
    Pagina.validarTelaLimpa();
})