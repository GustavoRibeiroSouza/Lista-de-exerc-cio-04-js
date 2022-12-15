function voto() {
    var candidato_a = parseInt(prompt("Digite a quantidades de votos para o candidato A: "));
    var candidato_b = parseInt(prompt("Digite a quantidades de votos para o candidato B: "));
    var candidato_c = parseInt(prompt("Digite a quantidades de votos para o candidato C: "));
    var voto_branco = parseInt(prompt("Digite a quantidades de votos em brancos: "));
    var voto_nulo = parseInt(prompt("Digite a quantidades de votos nulos: "));

    var votos_validos = candidato_a + candidato_b + candidato_c;

    var eleitores = voto_branco + voto_nulo + votos_validos;

    var perc_a = candidato_a / eleitores * 100;

    var perc_b = candidato_b / eleitores * 100;

    var perc_c = candidato_c / eleitores * 100;

    var branco = voto_branco / eleitores * 100;

    var nulos = voto_nulo / eleitores * 100;

    var validos = votos_validos / eleitores * 100;

    alert("A QUANTIDADE DE ELEITORES É : " + eleitores);
    alert("A PORCENTAGEM DE VOTOS VALIDO PARA O CANDIDATO A É DE : " + perc_a + "%")
    alert("A PORCENTAGEM DE VOTOS VALIDO PARA O CANDIDATO B É DE : " + perc_b + "%")
    alert("A PORCENTAGEM DE VOTOS VALIDO PARA O CANDIDATO C É DE : " + perc_c + "%")
    alert("A PORCENTAGEM DE VOTOS NULOS EM RELAÇÃO AOs ELEITORES É DE : " + nulos + "%")
    alert("A PORCENTAGEM DE VOTOS EM BRANCO EM RELAÇÃO AOS ELEITORES  É DE : " + branco + "%")
}

