/*Escreva um programa que solicita dois números e verifica se o primeiro número é divisível por segundo. 
Assim sendo, é esperada na saída a impressão da seguinte frase: “O primeiro número é divisível por segundo” 
Caso contrário, o programa deve exibir “O primeiro número não é divisível pelo segundo” .*/

let número1 = parseInt (prompt ("Qual o primeiro valor"));
let número2 = parseInt (prompt ("Qual o segundo valor"));

if (número1 % número2 == 0) {

    alert ("O primeiro número é divisível por segundo");

}

else {

    alert ("O primeiro número não é divisível pelo segundo")

}