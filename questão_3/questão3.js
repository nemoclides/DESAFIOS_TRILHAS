/*A professora Sandra pretende automatizar o resultado da nota de um 
aluno de ensino médio e solicitou-lhe que crie um programa que receba 
três notas finais e que apareça para ela “Aprovado”, se a média estiver 
entre 7 e 10.  Caso a média for menor que 7 e maior ou igual a 0, o 
programa deve imprimir na tela “Reprovado”.*/

let nota1 = parseFloat (prompt ("Digite a sua primeira nota"));
let nota2 = parseFloat (prompt ("Digite a sua segunda nota"));
let nota3 = parseFloat (prompt ("Digite a sua terceira nota"));
let media = (nota1+nota2+nota3)/3;

if (media >= 7) {

    alert ("Aprovado!")

} else {

    alert ("Reprovado!")

}
