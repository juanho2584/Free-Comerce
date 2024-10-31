let carrito = [];
let cartCountElement = document.getElementById('cart-count');

// Función para añadir productos al carrito
function addToCart(productId) {
    carrito.push(productId);  // Simula añadir el producto al carrito
    updateCartCount();
}

// Función para actualizar el número de productos en el carrito
function updateCartCount() {
    cartCountElement.innerText = carrito.length;
}

// Añadir eventos a los botones de "Añadir al Carrito"
let addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        addToCart(productId);
    });
});
