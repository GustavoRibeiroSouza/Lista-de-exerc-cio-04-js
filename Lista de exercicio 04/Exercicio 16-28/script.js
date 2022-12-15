function valor(){
    var numero1 = parseInt(prompt("Digite um valor A: "));
    var numero2 = parseInt(prompt("Digite um valor B: "));
    var numero3 = parseInt(prompt("Digite um valor C: "));


    if (numero1 > numero2 && numero1 > numero3 ){
        alert("O numero " + numero1 + " é maior.");
    }
    else if (numero2 > numero1 && numero2 > numero3){
        alert("O numero " + numero2 + " é maior.");
    }
    else{
        alert("O numero " + numero3 + " é maior.");
    };
};