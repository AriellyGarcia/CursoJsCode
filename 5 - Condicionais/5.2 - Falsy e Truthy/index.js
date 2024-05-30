// Falsy = false, 0, "", NaN, Undefined e null
// Truthy = Todos os outros diferentes do [ falsy ]

if (null) {
    console.log("Bom dia!"); //não é exibido pois o null é falsy
} else {
    console.log("Boa noite!"); // nesse caso pula para o else
}

// NaN = Not a Number
if ("Dener" * 10) {
    console.log("Bom dia!"); //não é exibido pois o NaN é falsy
} else {
    console.log("Boa noite!"); // nesse caso pula para o else
}



if (!null) {
    console.log("falsy or false"); //nesse caso estamos negando o null "Se null é false?(if !null) então é true por isso o console é executado
}