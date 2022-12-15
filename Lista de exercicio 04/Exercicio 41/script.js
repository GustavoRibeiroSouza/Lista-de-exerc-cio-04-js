let nota1 = parseFloat(prompt("Digite a 1º nota: "));
let nota2 = parseFloat(prompt("Digite a 2º nota: "));
let nota3 = parseFloat(prompt("Digite a 3º nota: "));

let exercicio = 3.5;

let media = (((nota1 + nota2) * 2) + nota3 + exercicio) / 7;

if (media >= 9) {
    document.write("Aluno nota A");
} else if (media >= 7.5) {
    document.write("Aluno nota B");
} else if (media >= 6 & media < 7.5) {
    document.write("Aluno nota C");
} else {
    document.write("Aluno nota C");
}
