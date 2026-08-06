const jogador1 = "pedra";
const jogador2 = "papel";

if (jogador1 === jogador2) {
    console.log("Empate!");
} else if (
    jogador1 === "pedra" && jogador2 === "tesoura" ||
    jogador1 === "papel" && jogador2 === "pedra" ||
    jogador1 === "tesoura" && jogador2 === "papel"
) {
    console.log("Jogador 1 venceu!");
} else {
    console.log("Jogador 2 venceu!");
}