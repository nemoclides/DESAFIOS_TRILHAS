/*A Clara criou um formulário para recolher as informações pessoais de seu cliente e
deseja que a idade apareça na tela assim ele informe o ano de nascimento. Então, ela o 
solicitou a elaboração de um algoritmo que retorne a idade da pessoa, baseada no ano de 
nascimento fornecido. Crie um algoritmo que execute essa tarefa.*/


let ano = prompt ("Qual o seu ano de nascimento?")
let anoAtual = new Date ().getFullYear ()
let resultado = anoAtual - ano

alert (resultado + " anos")

