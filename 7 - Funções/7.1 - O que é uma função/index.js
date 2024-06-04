/*
O que é uma função?
é um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declaration
function isValidDeclaration() {
    const soma = 1 + 3;
    if (soma === 3) {
        return true;
    }
    return false;
}
console.log(isValidDeclaration());
//return para a função onde for chamada

// 2 - Functions Expression
const isValidExpressions = function () {

};

// 3 - Arrow Functions
const isValidArrow = () => {
    const multiplicacao = 2 * 2;
    return multiplicacao;
}
console.log(isValidArrow());

//() => significa arrow function 