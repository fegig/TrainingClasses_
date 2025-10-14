const fetchProductsList = async () => {
  const res = await fetch("./assets/js/productList.json");
  const data = await res.json();
  return data;
}
const productsList = fetchProductsList()





const productList = document.getElementById("product-list");

const numberFormat = (price, currency) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

const hideToast = () => {
  const toast = document.getElementById("toast");
  toast.classList.remove("active");
  setTimeout(() => {
    toast.classList.remove("success");
  }, 1000);
};

const showToast = (message, status) => {
  const toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add(status);
  toast.classList.add("active");
  setTimeout(() => {
    hideToast();
  }, 3000);
};

const addToCart = (productid) => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }
  cart.push(productid);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Item added to cart", "success");
  document.getElementById(`cart-btn-${productid}`).style.display = "block";
  document.getElementById(`cart-btn-${productid}`).style.innerHTML = "Remove from Cart";
  return {
    message: "Item added to cart",
    status: "success",
    productid: productid,
  };
};






const toggleCart = (productid) => {
  let cart = localStorage.getItem("cart");
  const btn = document.getElementById(`cart-btn-${productid}`)
  const cartBtn = document.getElementById("cart-btn")


  cart = JSON.parse(cart);
  if (cart.includes(productid)) {
    cart = cart.filter((id) => id !== productid);
    cartBtn.style.display = "block";
    cartBtn.classList.add("active");
    const badge = cartBtn?.getElementsByClassName("badge")[0];
    if (badge) badge.innerHTML = cart.length;
    if(cart.length < 1) {
      cartBtn.style.display = "none";
    }

  btn.style.display = "block";
  btn.innerHTML = "Add to Cart";
    showToast("Item removed from cart", "success");
  } else {
    cart.push(productid);


  cartBtn.style.display = "block";
  cartBtn.classList.add("active");
  const badge = cartBtn?.getElementsByClassName("badge")[0];
  if (badge) badge.innerHTML = cart.length;

    btn.style.display = "block";
    btn.innerHTML = "Remove from Cart";
    showToast("Item added to cart", "success");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  return {
    message: "Item removed from cart",
    status: "success",
    productid: productid,
  };
};






const checkCart = (productid) => {
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  return cart && cart.includes(productid);
};

const calculateDiscount = (price, discount) => {
  const discountAmount = price * (discount / 100);
  return price - discountAmount;
};

const renderProducts = (products) => {
  productList.innerHTML = ""; // Clear existing content
  products.forEach((product) => {
    productList.innerHTML += `
              <div class="card ">
                  <img src="${product.image}" alt="${product.name}">
                  <h3>
                      <a href="product.html?id=${product.id}">
                          ${product.name}
                      </a>
                  </h3>
                  <p>${numberFormat(
                    calculateDiscount(product.price, product.discount),
                    product.currency
                  )}
                  ${
                    product.discount > 0
                      ? `<span>${numberFormat(
                          product.price,
                          product.currency
                        )}</span>`
                      : ""
                  }
                      </p>
                  <span>${product.description}</span>

                ${
                   `<button class="button" onclick="toggleCart(${product.id})" id="cart-btn-${product.id}">${checkCart(product.id) ? "Remove from Cart" : "Add to Cart"}</button>`
                }
              </div>
      `;
  });
};

// Initialize products when page loads
productsList.then(products => {
  renderProducts(products);
}).catch(error => {
  console.error("Error loading products:", error);
});
