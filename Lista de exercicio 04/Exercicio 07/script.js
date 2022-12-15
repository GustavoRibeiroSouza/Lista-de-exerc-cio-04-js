function valor(){
    var numero = parseInt(prompt("Digite um numero: "));
    var numero_1 = parseInt(prompt("Digite outro valor: "));

    if (numero > numero_1) {
        alert("O numero " + numero + " é maior que " + numero_1);
    }
    else{
        alert("O numero " + numero_1 + " é maior que " + numero )
    }
}