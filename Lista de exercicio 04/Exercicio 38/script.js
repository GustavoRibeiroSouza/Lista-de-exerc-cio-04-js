let senhaC = 9999;
let codigoC = 1234;

let codigo = parseInt(prompt("Digite o seu codigo de acesso: "));

if (codigo == codigoC) {
    alert("Codigo invalido!");
} else {
    let senha = parseInt(prompt("Digite a sua senha: "));
    if (senha == senhaC) {
        alert("senha invalida!")
    } else {
        alert("Acesso permitido");
    }
}