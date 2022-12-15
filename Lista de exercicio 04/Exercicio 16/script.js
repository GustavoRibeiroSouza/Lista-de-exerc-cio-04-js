var maca = parseInt(prompt("Digite a quantidade de maçãs que deseja comprar: "));

if (maca < 12) {
    var preco = maca * 1.30;
    alert("O valor a se pagar pelas maçãs é R$ " + preco);
}
else {
    alert("O valor a se pagar pela maçãs é R$ " + maca);
}
