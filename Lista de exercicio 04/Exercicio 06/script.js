function valor() {
    var ano = parseInt(prompt("Em que ano estamos: "));
    var nascimento = parseInt(prompt("Em que ano você nasceu: "));

    var idade = ano - nascimento;

    if (idade < 18) {
        alert("Você ainda não pode votar.");
    }
    else {
        alert("Você tem a obrigação de votar ou justificar o seu voto.");
    }
}
