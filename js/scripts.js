// let carrito = [];
// let cartCountElement = document.getElementById("cart-count");

// // Función para añadir productos al carrito
// function addToCart(productId) {
//   carrito.push(productId); // Simula añadir el producto al carrito
//   updateCartCount();
// }

// // Función para actualizar el número de productos en el carrito
// function updateCartCount() {
//   cartCountElement.innerText = carrito.length;
// }

// // Añadir eventos a los botones de "Añadir al Carrito"
// let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
// addToCartButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     const productId = this.getAttribute("data-product-id");
//     addToCart(productId);
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const cart = [];
  const cartContainer = document.getElementById("cart-container");
  const cartButton = document.getElementById("cart-toggle");
  const closeButton = document.getElementById("close-cart");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const productButtons = document.querySelectorAll(".btn-add-to-cart");

  // Mostrar/Ocultar carrito
  cartButton.addEventListener("click", function () {
    cartContainer.classList.toggle("active");
  });
  closeButton.addEventListener("click", () => {
    cartContainer.classList.remove("active");
  });


  // Añadir producto al carrito
  productButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = button.closest(".card-body");
      const title = productCard.querySelector(".card-title").innerText;
      const priceText = productCard.querySelector(".precio").innerText;
      const price = parseFloat(priceText.replace(/[^\d.]/g, ""));
      const imgSrc = productCard.getElementsByClassName(".card-img-top").src;
      const existingProduct = cart.find((item) => item.title === title);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ title, price, quantity: 1, imgSrc });
      }

      updateCart();
    });
  });

  // Actualizar contenido del carrito
  function updateCart() {
    const cartContent = document.getElementById("cart-content");
    cartContent.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartContent.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
      cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `

          <img src="${item.imgSrc}" alt="${item.title}">
          <div>
            <span>${item.title}</span>
            <span>$${item.price} x ${item.quantity}</span>
          </div>
          <div>
            <button class="btn btn-sm btn-success" onclick="increaseQuantity(${index})">+</button>
            <button class="btn btn-sm btn-warning" onclick="decreaseQuantity(${index})">-</button>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">X</button>
          </div>
        `;
        cartContent.appendChild(cartItem);
      });
    }

    // Actualizar contador del carrito
    cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal.innerText = total.toFixed(2);
  }

  // Eliminar producto del carrito
  window.removeItem = function (index) {
    cart.splice(index, 1);
    updateCart();
  };

  // Incrementar cantidad
  window.increaseQuantity = function (index) {
    cart[index].quantity++;
    updateCart();
  };

  // Decrementar cantidad
  window.decreaseQuantity = function (index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      removeItem(index);
    }
    updateCart();
  };
});


