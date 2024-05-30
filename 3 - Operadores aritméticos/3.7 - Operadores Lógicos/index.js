/*
    OPERADORES LÓGICOS
    && ( E )
    || ( OU )
    ! (NEGAÇÃO)
*/


console.log(1 === 1 && 2 >= 1); // retorna true pois as duas expressões são verdadeiras
console.log(1 === 1 && 1 >= 2); //retorna false pois a segunda expressão é falsa 1 não é igual nem maior que 2

console.log(1 === 2 || 1 === 1); // vai verificar se alguma das duas expressões são verdadeiras
// então retorna verdadeiro se uma delas for verdadeira mesmo que uma delas seja false

console.log(1 != 1); // retorna false pois 1 não é diferente de 1


console.log(!true); // porém se ele for true (retorna false)
console.log(!false); //vai verificar se a expressão seguinte é false (retorna true) 