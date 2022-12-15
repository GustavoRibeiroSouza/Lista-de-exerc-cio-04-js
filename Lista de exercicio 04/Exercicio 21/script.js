var comeco = parseInt(prompt("Digite o horario que foi iniciado a partida: "));
var final = parseInt(prompt("Digite o horario que foi encerrado a partida: "));

var duracao = final - comeco;

if (duracao < 0) {
    duracao = duracao + 24;
    alert("A duração da partida foi: " + duracao);
}
else {
    alert("A duração da partida foi: " + duracao);
}

