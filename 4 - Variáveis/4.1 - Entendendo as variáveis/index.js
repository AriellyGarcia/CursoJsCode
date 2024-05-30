/* 3 formas de criar variáveis
    var //utilizado globalmente no programa, pode gerar bugs então pouco utilizado
    let //gerado dentro de um escopo
    const //gerado dentro de um escopo porém armazena dados apenas uma vez
*/

var cachorro = "Kyara";
console.log(cachorro);

cachorro = "Teca";
console.log(cachorro);

let lanche = "Bolovo";
console.log(lanche);

lanche = "misto quente";
console.log(lanche);

const nome = "Dener";
console.log(nome);

nome = "Dener Troquatte";
console.log(nome); //gera um erro pois const não pode mudar

//é possível adicionar em uma variável vários tipos de dados, até um objeto


// var break // não é permitido pq é uma palavra reservada do javascript

//não crie nomes abstratos, sempre crie nomes de acordo com o contexto

let nomeDoProfissional = "";


