// Consumo de Api
const URLSERVER = "https://dummyjson.com/products";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

// Función para renderizar un producto
const renderProducto = (product) => {
  let html = `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">              
                    <img src="${product.images[0]}" alt="${product.brand}" class="card-img-top product-image">                    
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text garantia">${product.warrantyInformation}</p>
                        <p class="card-text">Precio: $${product.price}</p>
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
              </div>`;
  return html;
};


// Consumir la API y renderizar productos
fetch(URLSERVER, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response); // Verificar la estructura de la respuesta
    let productos = response.products; // Acceder a los productos correctamente
    let divProductos = document.getElementById("product-list");

    // Renderizar hasta 12 productos o menos si no hay suficientes
    let limite = Math.min(productos.length, 12);
    for (let i = 0; i < limite; i++) {
      let html = renderProducto(productos[i]);
      divProductos.insertAdjacentHTML("beforeend", html);
    }
  })
  .catch((err) => console.error("Error al consumir la API:", err));
