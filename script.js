// Avaliações
const form = document.getElementById("form-avaliacao");
const listaAvaliacoes = document.getElementById("lista-avaliacoes");

function carregarAvaliacoes() {
    const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    listaAvaliacoes.innerHTML = "";
    avaliacoes.forEach(av => {
        if(av.estrelas == 5){
            const li = document.createElement("li");
            li.textContent = `${av.nome} (${av.estrelas}⭐): ${av.comentario}`;
            listaAvaliacoes.appendChild(li);
        }
    });
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const estrelas = document.getElementById("estrelas").value;
    const comentario = document.getElementById("comentario").value;

    const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes")) || [];
    avaliacoes.push({nome, estrelas, comentario});
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

    form.reset();
    carregarAvaliacoes();
    alert("Avaliação enviada!");
});

// Carrega avaliações ao iniciar
window.onload = carregarAvaliacoes;
