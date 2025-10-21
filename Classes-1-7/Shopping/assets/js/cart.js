function getCart() {
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  const cartBtn = document.getElementById("cart-btn");
  const badge = cartBtn?.getElementsByClassName("badge")[0];



  if (cart?.length < 1) {
    cartBtn.style.display = "none";
    cartBtn.classList.remove("active");
    if (badge) badge.innerHTML = cart?.length || 0;
  } else {
    cartBtn.style.display = "block";
    cartBtn.classList.add("active");
    if (badge) badge.innerHTML = cart.length;
  }

  return cart || [];
}

getCart();





const renderCart = (products) => {
  const cart = getCart();
  const quantities = getCartQuantities();
  const cartItems = document.getElementById("cart-items");
  const productList = products?.filter((product) => cart.includes(product.id));

  cartItems.innerHTML = "";

  if (productList && productList.length > 0) {
    productList.forEach((item) => {
      const quantity = quantities[item.id] || 1;
      const offPrice = item.price - (item.discount / 100) * item.price;
      const itemTotal = offPrice * quantity;
      cartItems.innerHTML += `
       <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
              <h3>${item.name}</h3>
              <p>Price: ${numberFormat(offPrice, item.currency)}
              ${item.discount > 0 ? `<span>${item.discount}% off</span>` : ""}
              </p>
              <p>Total: ${numberFormat(itemTotal, item.currency)}</p>
              <div class="quantity-controls">
                  <button class="button" onclick="subtractFromCartQty(${
                    item.id
                  })">-</button>
                      <span class="qty">${quantity}</span>
                  <button class="button" onclick="addToCartQty(${
                    item.id
                  })">+</button>
              </div>
              <button class="button" onclick="removeFromCart(${
                item.id
              })">Remove</button>
          </div>
       </div>
      `;
    });
    updateCartSummary(products);
  } else {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    updateCartSummary([]);
  }
};





const removeFromCart = (id) => {
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart) || [];
  cart = cart.filter((item) => item !== id);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Also remove from quantities
  const quantities = getCartQuantities();
  delete quantities[id];
  setCartQuantities(quantities);

  // Update cart badge and re-render cart
  getCart();
  renderCart(globalProducts);
};





// Get cart quantities from localStorage
const getCartQuantities = () => {
  let cartQty = localStorage.getItem("cart-qty");
  return cartQty ? JSON.parse(cartQty) : {};
};




// Update cart quantities in localStorage
const setCartQuantities = (quantities) => {
  localStorage.setItem("cart-qty", JSON.stringify(quantities));
};




// Store products globally for quantity functions
let globalProducts = [];



const addToCartQty = (id) => {
  const quantities = getCartQuantities();
  quantities[id] ??= 1;
  quantities[id]++;
  const stock = globalProducts.find((product) => product.id === id).stock;
  if (quantities[id] > stock) {
    showToast("Stock is not available", "error");
    return;
  }
  setCartQuantities(quantities);
  renderCart(globalProducts);
};




const subtractFromCartQty = (id) => {
  const quantities = getCartQuantities();
  if (quantities[id] && quantities[id] > 1) {
    quantities[id] -= 1;
    setCartQuantities(quantities);
    renderCart(globalProducts);
  }
  // If quantity would be 1 or less, do nothing (minimum quantity is 1)
};




const updateCartSummary = (products) => {
  const cart = getCart();
  const quantities = getCartQuantities();
  const productList = products?.filter((product) => cart.includes(product.id));

  if (!productList || productList.length === 0) {
    // Empty cart
    updateSummaryDisplay(0, 0, 0);
    return;
  }

  // Calculate subtotal
  let subtotal = 0;
  productList.forEach((item) => {
    const quantity = quantities[item.id] || 1;
    subtotal += item.price * quantity;
  });

  // Calculate tax (assuming 2% tax rate)
  const taxRate = 0.02;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  updateSummaryDisplay(subtotal, tax, total);
};



//render coupon
const renderCoupon = () => {
  const coupon = document.getElementsByClassName("coupon-row")[0];
  coupon.innerHTML = `
  <input type="text" id="coupon-code-input" placeholder="Enter coupon code">
  <button class="button small" onclick="applyCoupon()">Apply Coupon</button>
  `;

}




//render discount
const renderDiscount = (discount) => {
  const discountRow = document.getElementsByClassName("discount-row")[0];
  discountRow.innerHTML = `
  <span>Discount:</span>
  <span>${discount}% off</span>
  `;
  const totalRow = document.getElementsByClassName("total-row")[0];
  totalRow.innerHTML = `
  <span>Total:</span>
  <span>${numberFormat(total, "GBP")}</span>
  `;
}




//apply coupon
const applyCoupon = () => {
  const fetchCouponList = async () => {
    const res = await fetch("./assets/js/coupon.json");
    const data = await res.json();
    return data;
  }
  const couponList = fetchCouponList()
  
  const couponCode = document.getElementById("coupon-code-input").value;

  couponList.then((list) => {
    const coupon = list.find((coupon) => coupon.code === couponCode);
    if (coupon) {
      showToast(`Coupon applied successfully ${coupon.discount}% off`, "active");
      renderDiscount(coupon.discount);
    } else {
      showToast("Invalid coupon code", "error");
      renderDiscount(0);
    }
  })

}



const updateSummaryDisplay = (subtotal, tax, total) => {
  const cartSummary = document.getElementById("cart-summary");
  cartSummary.innerHTML = ` <div class="subtotal-row">
                    <span>Subtotal:</span>
                    <span>${numberFormat(subtotal, "GBP")}</span>
                    </div>
                    <div class="tax-row">
                        <span>Tax (2%):</span>
                        <span>${numberFormat(tax, "GBP")}</span>
                    </div>
                    <div class="discount-row">
                        <span>Discount:</span>
                        <span>${0}% off</span>
                    </div>
                    <div class="total-row">
                        <strong>Total:</strong>
                        <strong>${numberFormat(total, "GBP")}</strong>
                    </div>
                    <div class="coupon-row">
                        <span id="coupon-row">Do you have a coupon?</span>
                        <button class="button small" onclick="renderCoupon()">Apply Coupon</button>
                    </div>
                    <button class="button" onclick="proceedToCheckout()">Proceed to Checkout</button>`;
};



const proceedToCheckout = () => {
  window.location.href = "checkout.html";
};



productsList
  .then((products) => {
    globalProducts = products;
    renderCart(products);
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });
