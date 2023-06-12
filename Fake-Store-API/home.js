fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {
    const produtos = data;
    const listaProdutos = document.getElementById("produtos-lista");

    produtos.forEach((produto) => {
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

function filtrarProdutos(categoria) {
  const produtos = document.getElementsByClassName("produto-card");

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    const categoriaProduto = produto.querySelector("p").innerText;

    if (categoria === "all" || categoriaProduto === categoria) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  }
}