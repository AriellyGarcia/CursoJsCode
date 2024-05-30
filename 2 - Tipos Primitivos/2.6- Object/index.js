/*
    Os objetos remontam o mundo real
    Objeto: Tenis (Propriedade) "Cadarço", "palmilha"
    Objeto: Celular (Propriedade)
    Objeto: Drone (Propriedade)

    Propriedades / Atributos / Funcionalidades

*////////////////////////////////////////////////////////////////////////////

// objeto/propriedade = tenis
// em javascript não precisa de aspas pra representar, não pode ter caracteres especiais, pode ser Tenis ou tenis
// posso colocar nele um array, ou uma string, ou um numero, ou um boolean
// um objeto tem varios atributos
////////////////////////////////////////////////////////////////////////////

//array
console.log(
    {
        tenis: ["cadarço", "palmilha"]
    }
)
// number
console.log(
    {
        tenis: 123
    }
)
//string
console.log(
    {
        tenis: "cadarço"
    }
)
//boolean
console.log(
    {
        tenis: true
    }
)

/*
    um objeto pode ter outros objetos dentro dele
    sempre separe por , 
    as chaves {} referenciam um objeto

    também é possivel incluir todos os objetos em um array
*/
console.log({
    tenis: [
        {
            preco: 150, //virgula para separar o próximo
            disponivel: true,
            estoque: 150,
            cadarco: {
                cor: "rosa",
                tamanho: "G",
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo",
            }

        }

    ],
    celular: [
        {
            preco: 980,
            disponivel: false,
            estoque: 0

        }
    ]
});

console.log([
    {
        tenis: {
            preco: 150, //virgula para separar o próximo
            disponivel: true,
            estoque: 150,
            cadarco: {
                cor: "rosa",
                tamanho: "G",
            },
            palmilha: {
                tamanho: 43,
                cor: "roxo",
            }
        },
        celular: {
            marca: "Motorola",
            cor: "azul",
            preco: 890,
        }
    }
]);
