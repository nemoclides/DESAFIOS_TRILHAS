/*A Alura pretende aumentar o salário dos seus colaboradores e, para isso, propus a você a criação de um algoritmo que acrescente:
·         10%, se o salário for menor ou igual a R$ 2000;
·         5%, se for maior a R$ 5000 e menor que R$ 10000;
·         2%, se for maior  que R$10000 e menor que R$15000.
Após a operação, o algoritmo deve imprimir na tela o valor original antes do aumento e o valor com aumento.
*/

let salario = parseInt (prompt ("Qual o seu salário?"))
let salarioOriginal = salario

if (salario <= 2000){

salario = salario * 1.1


}

if (salario > 5000 && salario < 10000){

salario = salario * (100+5)/100

}


if (salario > 10000 && salario < 15000){

salario = salario * (100+2)/100

}

alert (salarioOriginal)
alert (salario)



