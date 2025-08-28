// ✅ Login simples
document.getElementById("btn-login").addEventListener("click", function(){
    const email = prompt("Email:");
    const senha = prompt("Senha:");

    if(email === "henriquefnci@gmail.com" && senha === "Henrique@4"){
        alert("Login efetuado!");
        mostrarAvaliacoes();
    } else {
        alert("Login inválido!");
    }
});

// ✅ Avaliações (LocalStorage)
function carregarAvaliacoes() {
    return JSON.parse(localStorage.getItem("avaliacoes")) || [];
}

// Exibir avaliações em carrossel
let indexAtual = 0;
let avaliacoes = [];

function mostrarAvaliacoes() {
    avaliacoes = carregarAvaliacoes();
    if(avaliacoes.length === 0){
        document.getElementById("avaliacoes-dinamicas").textContent = "Nenhuma avaliação.";
        return;
    }

    const container = document.getElementById("avaliacoes-dinamicas");
    container.textContent = "";
    exibirProxima();
    setInterval(exibirProxima, 5000);
}

function exibirProxima(){
    if(avaliacoes.length === 0) return;
    const a = avaliacoes[indexAtual % avaliacoes.length];
    document.getElementById("avaliacoes-dinamicas").textContent = `${a.nome} (${a.estrelas}⭐): ${a.comentario}`;
    indexAtual++;
}

// ✅ Botão para excluir todas avaliações
document.getElementById("btn-excluir").addEventListener("click", function(){
    if(confirm("Tem certeza que deseja excluir todas as avaliações?")){
        localStorage.removeItem("avaliacoes");
        avaliacoes = [];
        document.getElementById("avaliacoes-dinamicas").textContent = "Nenhuma avaliação.";
    }
});


