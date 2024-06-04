function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;
    return "Você digitou um número inválido!";
}

console.log(soma(2, 2));
console.log(soma("abc", 2));

//////////////
function subtracao() {
    return arguments;
}

console.log(subtracao(1, 2, "abc"));

