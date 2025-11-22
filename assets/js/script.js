let cardContainer = document.querySelector(".card-container");
let dados = [];
const searchInput = document.querySelector("#search-input");

// Adiciona um event listener para o evento 'keydown' no campo de busca
searchInput.addEventListener("keydown", (event) => {
    // Verifica se a tecla pressionada foi 'Enter'
    if (event.key === "Enter") {
        iniciarBusca();
    }
});

async function carregarDados() {
    let resposta = await fetch("assets/json/data.json");
    dados = await resposta.json();
    // Ordena os dados pelo nome em ordem alfabética
    dados = [...dados].sort((a, b) => a.nome.localeCompare(b.nome));
    renderizarCards(dados);
}

function limparBusca() {
    searchInput.value = "";
    iniciarBusca();
}

function iniciarBusca() {
    const termoBusca = searchInput.value.toLowerCase();

    if (termoBusca.trim() === "") {
        renderizarCards(dados);
        return;
    }

    const dadosFiltrados = dados.filter(dado => {
        return (
            dado.nome.toLowerCase().includes(termoBusca) ||
            dado.descricao.toLowerCase().includes(termoBusca) ||
            dado.tags.some(tag => tag.toLowerCase().includes(termoBusca))
        );
    });
    renderizarCards(dadosFiltrados);
}

function filtrarPorTag(tag) {
    searchInput.value = tag;
    const dadosFiltrados = dados.filter(dado => dado.tags.includes(tag));
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.ano}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;

        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("tags-container");

        dado.tags.forEach(tag => {
            const tagElement = document.createElement("a");
            tagElement.href = "#";
            tagElement.textContent = `#${tag}`;
            tagElement.onclick = (e) => {
                e.preventDefault();
                filtrarPorTag(tag);
            };
            tagsContainer.appendChild(tagElement);
        });

        article.appendChild(tagsContainer);
        cardContainer.appendChild(article);
    }
}

carregarDados();