class TesteElements{

    campoPrimeiroNome = () => {return ':nth-child(1) > :nth-child(2) > .form-control'}

    campoSobrenome = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}
    
    campoEndereco = () => {return '.col-md-8 > .form-control'}
    
    campoEmail = () => {return '#eid > .form-control'}

    campoTelefone = () => {return ':nth-child(4) > .col-md-4 > .form-control'}

    campoGenero = () => {return '.col-md-4 > :nth-child(2) > .ng-pristine'}

    campoHobbies = () => {return '#checkbox2'}

    clickCampoLinguas = () => {return '#msdd'}
    campoLinguas = () => {return '.ui-corner-all'}
    clickFora = () => {return '#section'}

    campoHabilidades = () => {return '#Skills'}

    campoPais = () => {return '#countries'}

    botaoSelecionePais = () => {return '.select2-selection__arrow'}
    campoSelecionePais = () => {return '#select2-country-results > :nth-child(2)'}

    campoDataAno = () => {return '#yearbox'}
    campoDataMes = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    campoDataDia = () => {return '#daybox'}

    campoSenha = () => {return '#firstpassword'}

    campoConfirmeSenha = () => {return '#secondpassword'}

    botaoRefresh = () => {return '#Button1'}

}
export default TesteElements;