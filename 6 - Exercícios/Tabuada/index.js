/*
    Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

    multiplicador x número = resultado
    multiplicador x 1 = resultado
    multiplicador x 2 = resultado
    multiplicador x 3 = resultado
    ...
    multiplicador x 10 = resultado

    Obs.: não podemos criar vários consoles.log (multiplicador x 3 = resultado)
*/

const multiplicador = 1;

//incrementador
//chegará até o valor desejado = 10
//condição se i = 0 define o início
// condição i menor ou igual a 10 >> até onde vai, nesse caso 10
// i++ para autoincrementar 1 na variável i cada vez que concluir o esquema
let i = 0;
// vai rodar o bloco todas as vezes definidas, nesse caso 10 vezes.
for (let i = 0; i <= 10; i++) {
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`); //template string (``) template literals ${},
    //sem ele o programa entenderia que multiplicador é uma string
}

