# Catálogo de Tecnologias - Imersão Dev Alura

Este é um projeto simples de uma página web que exibe um catálogo de cartões com informações sobre diversas tecnologias, como linguagens de programação, frameworks e bancos de dados. A aplicação permite que os usuários pesquisem e filtrem esses cartões de forma dinâmica.

## ✨ Funcionalidades

- **Listagem Dinâmica**: Carrega os dados de um arquivo `JSON` e exibe cada item como um cartão na tela.
- **Ordenação**: Os cartões são exibidos em ordem alfabética pelo nome da tecnologia.
- **Busca Inteligente**: Um campo de busca permite filtrar os cartões em tempo real. A busca é realizada no nome, na descrição e nas tags de cada tecnologia.
- **Filtro por Tags**: Ao clicar em uma tag (`#backend`, `#frontend`, etc.), a lista é filtrada para mostrar apenas as tecnologias que possuem aquela tag.
- **Link Externo**: Cada cartão possui um link "Saiba mais" que redireciona para a página oficial de documentação da tecnologia.

## 🚀 Como Funciona

O projeto é construído utilizando HTML, CSS e JavaScript puro (Vanilla JS).

1.  **Carregamento de Dados**: Ao carregar a página, o arquivo `assets/js/script.js` faz uma requisição `fetch` para buscar os dados no arquivo `assets/json/data.json`.
2.  **Renderização**: Os dados recebidos são ordenados e, em seguida, a função `renderizarCards` cria dinamicamente os elementos HTML para cada cartão e os insere na página.
3.  **Interatividade**:
    -   A função `iniciarBusca` é acionada quando o usuário digita no campo de busca e pressiona "Enter". Ela filtra o array de dados com base no termo pesquisado e chama `renderizarCards` novamente para atualizar a exibição.
    -   A função `filtrarPorTag` é chamada quando o usuário clica em uma tag. Ela atualiza o campo de busca com o nome da tag, filtra os dados e renderiza os cartões correspondentes.

## 📂 Estrutura do Projeto

```
├── assets
│   ├── css
│   │   └── style.css  // Arquivo de estilos
│   ├── js
│   │   └── script.js  // Lógica principal da aplicação
│   └── json
│       └── data.json  // Banco de dados com as informações das tecnologias
├── index.html         // Arquivo principal da página
└── README.md          // Este arquivo
```

## 🛠️ Como Executar

1.  Clone ou baixe este repositório.
2.  Como o projeto utiliza a API `fetch` para carregar um arquivo local (`data.json`), alguns navegadores podem bloquear a requisição por questões de segurança (CORS). A forma mais garantida de executar é utilizando um servidor local.
    -   Se você tem o **Node.js** instalado, pode usar o `npx serve` na pasta raiz do projeto.
    -   Se você usa o **VS Code**, pode instalar a extensão Live Server e clicar em "Go Live" no canto inferior direito.
3.  Abra o arquivo `index.html` no seu navegador através do servidor local.

---

Projeto desenvolvido como parte da Imersão Dev da Alura.