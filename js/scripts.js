let carrito = [];
let cartCountElement = document.getElementById("cart-count");

// Función para añadir productos al carrito
function addToCart(productId) {
  carrito.push(productId); // Simula añadir el producto al carrito
  updateCartCount();
}

// Función para actualizar el número de productos en el carrito
function updateCartCount() {
  cartCountElement.innerText = carrito.length;
}

// Añadir eventos a los botones de "Añadir al Carrito"
let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productId = this.getAttribute("data-product-id");
    addToCart(productId);
  });
});

// // Consumo de API
// const URLSERVER = "https://dummyjson.com/products";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//   },
// };

// const renderProducto = (product) => {
//   let html = `<div class="col-md-4">
//                 <div class="card mb-4 shadow-sm">              
//                     <img src="https://dummyjson.com/products/${product.images}" alt="${product.brad}"  class="card-img-top">                    
//                      <div class="card-body">
//                         <h5 class="card-title">${product.title}</h5>
//                             <p class="card-text">Garantia: ${product.warrantyInformation}</p>
//                             <p class="card-text">Precio: ${product.price}</p>
//                                 <button class="btn btn-primary btn-add-to-cart" data-product-id="1">Añadir al Carrito
//                                </button>
//                         </div>
//                     </div>
//                 </div>
//               `;
//   return html;
// };

// fetch(`${URLSERVER}`, options)
//   .then((response) => response.json())
//   .then((response) => {console.log(response);
//     let productos = response.results;
//     let divProductos = document.getElementById("product-list");
//     for (let i = 0; i < 12; i++) {
//       let html = renderProducto(productos[i]);
//       divProductos.insertAdjacentHTML("beforeend", html);
//     }
//   })
//   .catch((err) => console.error(err));
