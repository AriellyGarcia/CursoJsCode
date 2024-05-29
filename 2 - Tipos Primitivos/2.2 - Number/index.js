console.log(123);
/*
    mas se incluirmos os numeros entre aspas duplas e fora dela indicarmos o +1,
    é considerado uma concatenação, ele adiciona a informação em sequência
    mas se fizermos com -1 ele entende uma subtração
*/
console.log("123" + 1);
console.log("123" - 1);

//se a ideia for fazer uma soma, vc deve converter em number
console.log(Number("123") + 1);

//se adicionarmos uma letra nessa linha de código um erro ocorre, pois identifica que não tem somente números
console.log(Number("123a") + 1);

/*
    Forma correta de se usar
    Number 123
    Number 123 + 123 = 246
    Number("123") - 1 = 122
        Sempre utilize number + number


    CUIDADO POIS PODE GERAR BUGS
    Number "123" - 1 = 122
    Number "123" * 2 = 246
    
    NUMBER TEM QUE SER NÚMERO
    e pode ser representado sem a crase ou aspas
    no caso de você receber um número como string entre ""
    SEMPRE FAÇA A CONVERSÃO para number caso queira utilizar como número
*/

//typeoff para mostrar o tipo

console.log(typeof 123); //number
console.log(typeof Number("123")); //number
console.log(typeof "123"); //string
