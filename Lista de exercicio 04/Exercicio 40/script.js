let nome = prompt("Digite o nome do pruduto: ");
let qtd = parseInt(prompt("Digite a quantidade comprada do produto: "));
let preco = parseInt(prompt("Digite o reço do produto: "));
let total = qtd * preco;


if (qtd <= 5) {
    let valor = total - (total * 2 / 100);
    document.write("O valor a pagar pelo(a) produto é R$ " + valor);
} else if (qtd >= 6 & qtd <= 10) {
    let valor = total - (total * 3 / 100);
    document.write("O valor a pagar pelo(a) produto é R$ " + valor);
} else {
    let valor = total - (total * 5 / 100);
    document.write("O valor a pagar pelo(a) produto é R$ " + valor);
}


