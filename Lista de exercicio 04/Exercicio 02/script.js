function valor() {
    var numero = parseInt(prompt("Digite um número: "));

    if (numero > 10) {
        alert("Número maior que 10!");
    } 
    else if (numero == 10) {
        alert("Número igual a 10!");
    }
    else{
        alert("Número menor que 10!");
    }
}