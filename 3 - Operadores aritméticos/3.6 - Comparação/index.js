/*
    OPERADORES DE COMPARAÇÃO
    == é igual a
    === compara de forma exata (comparando elemento e o tipo também)
    != é diferente de
    !== é diferente de (comparando o elemento e o tipo também)
    > é maior que
    < é menor que
    >= maior ou igual
    <= menor ou igual
*/

console.log(1 == 1); //retorna true pois 1 é igual a 1
//preste atenção ao comparar utilizando o == e comparar numero com string

console.log(1 === "1"); // retorna false pois number é diferente de string

console.log(1 != 2); // retorna true pois 1 é diferente de 2

console.log(1 !== "1"); // retorna true pois 1 é do tipo number e o outro do tipo string

console.log(1 > 2); // retorna false pois 1 não é maior que 2
console.log(3 > 2); // retorna true pois 3 é maior que 2

console.log(1 < 2); //retorna true pois 1 é menor que 2
console.log(3 < 2); // retorna false pois 3 não é menor que 2 

console.log(1 >= 1); // true pois 1 não é maior mas é igual a 1
console.log(3 >= 2); // true pois 3 é maior que 2

console.log(1 <= 1); // retorna true pois é igual
console.log(1 <= 0); // retorna false pois 1 não é igual nem menor que 0

