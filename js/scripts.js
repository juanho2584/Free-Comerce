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





// // Función para añadir un producto al carrito
// const addToCart = (product) => {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
//   // Verificar si el producto ya está en el carrito
//   const existingProduct = cart.find((item) => item.id === product.id);
//   if (existingProduct) {
//     existingProduct.quantity += 1; // Incrementar cantidad
//   } else {
//     cart.push({ ...product, quantity: 1 }); // Agregar nuevo producto con cantidad inicial
//   }
  
//   localStorage.setItem("cart", JSON.stringify(cart)); // Guardar carrito en localStorage
  
//   // Actualizar contador del carrito en la barra de navegación
//   updateCartCount();
// };

// // Actualizar el contador de productos en el carrito
// const updateCartCount = () => {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
//   document.getElementById("cart-count").innerText = totalItems;
// };

// // Añadir evento al botón "Añadir al Carrito"
// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("btn-add-to-cart")) {
//     const productId = parseInt(event.target.getAttribute("data-product-id"));
//     const product = productos.find((item) => item.id === productId);
//     addToCart(product);
//   }
// });

// // Cargar contador al inicio
// updateCartCount();
