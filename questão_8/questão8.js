/*Um contador pretende automatizar a folha salarial dos seus funcionários para economizar mais tempo. 
Para isso, solicitou a você um um programa que some todos os salários em uma lista. Logo, implemente 
um algoritmo que receba do contador uma lista de salários e calcule a soma deles. Posteriormente ao 
cálculo, o algoritmo deve imprimir o salário total da folha de pagamento.*/

let resposta = prompt ("Diga os valores separados por virgula");
let valores = resposta.split (",");
let soma = 0;

for (let i=0; i < valores.length; i ++){

    soma = soma + parseInt (valores [i]) 

}

alert (soma)