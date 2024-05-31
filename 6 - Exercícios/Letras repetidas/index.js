/*
    Precisamos mostrar quantas letras repetidas aparecem em uma palavra
    exp.: Abacate = (a: 3, b: 1, c: 1, e: 1)
*/


/////////////// a const palavra possui uma frase, removemos todos os caracteres maiusculos e removemos todos os espaços
/////////////// criamos a let chamada letras onde armazenam todas as letras da nossa frase
/////////////// o for vai adicionar o let i onde iniciamos na casa 0, se o let i for menor que o tamanho da palavra
/////////////// então toda vez que o bloco for concluído o i recebe +1, fazendo ele andar numeros 1 > 1+1= 2 >2+1 = 3> 3+1 = 4>4+1 = 5 etc...
/////////////// if vai validar se let letras já possui a primeira letra da palavra(primeira, segunda, terceira, etc) já existe
/////////////// então encontrando a letra ele acrescenta +1
/////////////// se não encontrar ele vai pular para o else onde
/////////////// ele cria a letra do vetor i(a, b, c , t etc) e define como 1
/////////////// então retorna para o inicio do bloco com o i++ para a proxima letra


const palavra = "Arielly Vieira Garcia".toLowerCase().replaceAll(" ", "");// .toLowerCase(); deixa todas as letras da nossa string minusculas
let letras = {};

//palavra.length para que ele faça somente enquanto for menor que a qtd de letras da palavra
for (let i = 0; i < palavra.length; i++) {

    //se eu encontrar alguma palavra aqui dentro eu vou fazer alguma coisa
    if (letras[palavra[i]]) {
        // o indíce i vai fazer ele andar as casas da palavra da chave 0 até a ultima letra 0,1,2,3,4 como um array
        //no inicio do array, se eu encontrar a palavra A[0], acrescente 1 a ele, e assim por diante
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1;
        //crie as letras de acordo com a palavra
    }
}
console.log(letras);


