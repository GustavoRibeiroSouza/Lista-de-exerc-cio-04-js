let timeA = prompt("time A: ");
let timeB = prompt("Time B: ");
let golsA = parseInt(prompt("Quantos gols fez o time A: "));
let golsB = parseInt(prompt("Quantos gols fez o time B: "));

if (golsA > golsB) {
    document.write("O time A ganhou do time B de : " + golsA + " a " + golsB);
} else if (golsB > golsA) {
    document.write("O time B ganhou do time A de : " + golsB + " a " + golsA);
} else {
    document.write("Houve um empate de  : " + golsB + " a" + golsA);
}