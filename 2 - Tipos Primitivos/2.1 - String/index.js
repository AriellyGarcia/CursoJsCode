// esse comando pede uma string
// console.log("Olá Mundo!");

/*
    Como podemos escrever uma string
        'Aqui vai uma string'
        "Aqui vai uma string" -> se vai somente textos 
        `Aqui vai uma string` -> se vai texto e uma variavel
        Mas podemos utilizar esses tres tipos
*/

console.log('"Aqui vai uma string"');
console.log(`Aqui vai uma 'string' ${1 + 1}`);
console.log("Aqui vai uma string");
/*
    se iniciar com aspas simples precisa terminar com aspas simples,
    do mesmo modo para aspas duplas
*/

console.log('"Texto com aspas"');

//Esse é outro modo de referenciar uma string, porém se você adicionar um número, este terá seu tipo transformado em string/texto
console.log(String("Teste"));
console.log(String("13213542"));


/*
    utilizando as crases você pode escrever varias linhas,
    além disso, se você quiser usar aspas simples e aspas duplas no seu texto
    não quebra a aplicação
    console.log(`'"Texto com aspas"'´);
*/
console.log(`Aqui vai uma 'string' 
e também uma soma de 1+1 que é igual a "${1 + 1}"`);
