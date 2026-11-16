
const duckie = document.getElementById("duckie");
const pontosSpan = document.getElementById("pontos");
const clickerButton = document.getElementById("clicker");

let pontos = 0;

function registrarClique() {
    pontos += 1;
    pontosSpan.textContent = pontos;

    setTimeout(function () {
        duckie.style.transform = "scale(1) rotate(0deg)";
    }, 150);
}

clickerButton.addEventListener("click", function () {
    registrarClique();
    duckie.style.transform = "scale(1.2) rotate(20deg)";
});

duckie.addEventListener("click", registrarClique);

console.log("JavaScript carregado com sucesso!");