const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        const product = data;
        console.log(product);
        const productDetailsContainer =
            document.getElementById("product-details");
        productDetailsContainer.classList.add("product-unitary");

        const productDetailsHTML = `
            <div>
                <img src='${product.image}' />
            <h1>${product.title}</h1>
            <span>Price: $${product.price}</span>
            <h2>${product.description}</h2>
            <p>Count: ${product.rating.count}</p>
            <p>Rating: ${product.rating.rate}</p>
                </div>
          `;

        productDetailsContainer.innerHTML = productDetailsHTML;
    })
    .catch((error) => {
        console.log("Ocorreu um erro:", error);
    });