/*
    Escopo:
    Determina quais são os dados que podem
    ser acessados em uma determinada parte do código.
*/

///////////////////////// ESCOPO = BLOCO DE CÓDIGO

//a variavel esta no escopo global então ela consegue ser chamada em todo o código
let nome = "Dener";
{
    console.log(nome);
}

// aqui a variavel é declarada dentro do bloco e nesse bloco ela é chamada, funciona perfeitamente
{
    let nome = "Dener";
    console.log(nome);
}

// a variável só funciona dentro do escopo em que ele está
// nesse caso a variavel nome está declarada dentro do bloco
// então fora do bloco a variavel não pode ser chamada
{
    let nome = "Dener";
}

console.log(nome);

// é da mesma forma com o const
// var é acessado de forma global dentro ou fora de blocos

{
    var name = "Julia";
}

console.log(nome);