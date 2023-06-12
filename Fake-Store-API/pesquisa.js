const urlParams = new URLSearchParams(window.location.search);
const termo = urlParams.get("termo");

fetch("https://fakestoreapi.com/products/")
    .then((response) => response.json())
    .then((data) => {
        const termoMinusculo = termo.toLowerCase();
        const produtosFiltrados = data.filter((produto) => {
            const tituloMinusculo = produto.title.toLowerCase();
            return tituloMinusculo.includes(termoMinusculo);
        });

        const listaProdutos = document.getElementById("produtos-lista");

        produtosFiltrados.forEach((produto) => {
            const itemLista = document.createElement("div");
            itemLista.classList.add("produto-card");

            itemLista.innerHTML = `
              <div>
                <a href='detalhes.html?id=${produto.id}'>
                  <img src='${produto.image}' />
                  <h1>${produto.title}</h1>
                  <span>$ ${produto.price}</span>
                  <p>${produto.category}</p>  
                </a>
              </div>
            `;

            listaProdutos.appendChild(itemLista);
        });
    })
    .catch((error) => {
        console.log("Ocorreu um erro:", error);
    });