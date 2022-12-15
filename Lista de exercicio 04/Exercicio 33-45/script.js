function valor(){
    var cotacao = parseFloat(prompt("Digite o valor da cotação do dolar: "));
    var real = parseFloat(prompt("Digite a quantidade de reais que você possui: "));
    
    var dolar = real / cotacao

    alert("Você possui $ " + dolar)
}