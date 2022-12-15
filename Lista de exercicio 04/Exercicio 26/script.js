var qtd_atual = parseInt(prompt("Digite a quantidade atual de produtos em estoque: "));
var qtd_maxima = parseInt(prompt("Digite a quantidade maxima de produtos que cabem no estoque: "));
var qtd_minima = parseInt(prompt("Digite a quantidade minima de preodutos que cabem no estoque"));

var media = (qtd_maxima + qtd_minima) / 2;

if (media >= qtd_atual) {
    document.write("Nao efetuar compra!");
}
else {
    document.write("Efetuar compra!");
};



