Feature: Automação de formulário

Scenario: Preencher campos do formulário
    Given que acesso o site automation
    When preencher campo primeiro nome
    And preencher campo sobrenome
    And preencher campo endereço
    And preencher campo email
    And preencher campo telefone
    And clicar campo gênero
    And clicar campo hobbies
    And selecionar campo línguas
    And selecionar campo habilidades
    And selecionar campo país
    And Selecionar campo selecione país
    And selecionar campo data
    And preencher campo senha
    And preencher campo confirme a senha
    And clico no botão Refresh
    Then verifico que a tela foi atualizada