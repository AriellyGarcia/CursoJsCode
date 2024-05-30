//É uma lista de dados ou conjunto de dados
// podemos incluir números, strings e boolean
console.log([1, 2, 3, "teste", true]);


//Temos um conjunto de dados
/*
    Dependendo da linguagem de programação que você utiliza
    Dener e Troquatte seriam uma chave e um valor, apesar da chave não estar escrita
    console.log([0 => "Dener", 1 => "Troquatte"]); uma chave e valor
    No javascript não precisa indicar a chave
    O primeiro elemento sempre vai ser  0 e seguir de acordo com a quantidade de elementos
    Ao querer apresentar os elementos de um array lembre-se de que inicia com zero, ou seja o primeiro elemento é a chave 0
    depois 1 e depois 2, etc
*/
console.log(["Dener", "Troquatte"]);
console.log(["Dener", "Troquatte"].length); //.length vai contar quantos elementos existem no array ou seja 2 elementos

// vamos mostrar sequencialmente os valores do conjunto
["Dener", "Troquatte"].forEach((res, index) => {
    console.log(res, index);
}) //forEach é um método iteravel, mostrar um valor de cada vez, utilizar com array
// ele indica a chave/index do elemento Dener 0 Troquatte 1
//mas no length ele conta corretamente quantos elementos foram colocados, ou seja, 2
