const fetchProductsList = async () => {
  const res = await fetch("./assets/js/productList.json");
  const data = await res.json();
  return data;
};
const productsList = fetchProductsList();

const productList = document.getElementById("product-list");

const numberFormat = (price: number, currency: string) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

const hideToast = () => {
  const toast = document.getElementById("toast");
  toast?.classList.remove("active");
  setTimeout(() => {
    toast && toast.classList.remove("success");
  }, 1000);
};

const showToast = (message: string, status: "success" | "error") => {
  const toast = document.getElementById("toast");
  toast && (toast.innerHTML = message);
  toast && toast.classList.add(status);
  toast && toast.classList.add("active");
  setTimeout(() => {
    hideToast();
  }, 3000);
};

const addToCart = (productid: number) => {
  let cart: string | number[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  if (Array.isArray(cart)) {
    cart && cart?.push(productid);
  } else {
    cart = [productid] as number[];
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Item added to cart", "success");
  const btn = document.getElementById(`cart-btn-${productid}`);
  btn && (btn.style.display = "block");
  btn && (btn.innerHTML = "Remove from Cart");
  return {
    message: "Item added to cart",
    status: "success",
    productid: productid,
  };
};

const toggleCart = (productid: number) => {
  let cart: string | number[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const btn = document.getElementById(`cart-btn-${productid}`);
  const cartBtn = document.getElementById("cart-btn");

  if (Array.isArray(cart)) {
    cart && cart?.push(productid);
  } else {
    cart = [productid] as unknown as number[];
  }
  if (cart && cart?.includes(productid)) {
    cart = cart?.filter((id: number) => id !== productid);
    cartBtn && (cartBtn.style.display = "block");
    cartBtn && cartBtn.classList.add("active");
    const badge = cartBtn?.getElementsByClassName("badge")[0];
    if (badge) badge.innerHTML = cart?.length.toString();
    if (cart?.length < 1) {
      cartBtn && (cartBtn.style.display = "none");
    }

    btn && (btn.style.display = "block");
    btn && (btn.innerHTML = "Add to Cart");
    showToast("Item removed from cart", "success");
  } else {
    cart && cart?.push(productid);

    cartBtn && (cartBtn.style.display = "block");
    cartBtn && cartBtn.classList.add("active");
    const badge = cartBtn?.getElementsByClassName("badge")[0];
    if (badge) badge.innerHTML = cart?.length.toString();

    btn && (btn.style.display = "block");
    btn && (btn.innerHTML = "Remove from Cart");
    showToast("Item added to cart", "success");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  return {
    message: "Item removed from cart",
    status: "success",
    productid: productid,
  };
};

const checkCart = (productid: number) => {
  let cart: string | number[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  if (Array.isArray(cart)) {
    return cart && cart?.includes(productid);
  } else {
    return false;
  }
};

const calculateDiscount = (price: number, discount: number) => {
  const discountAmount = price * (discount / 100);
  return price - discountAmount;
};

const renderProducts = (products: typeof productsList) => {
  productList && (productList.innerHTML = ""); // Clear existing content
  products &&
    (products as unknown as any[]).forEach((product: any) => {
      productList &&
        (productList.innerHTML += `
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
  
                  ${`<button class="button" onclick="toggleCart(${
                    product.id
                  })" id="cart-btn-${product.id}">${
                    checkCart(product.id) ? "Remove from Cart" : "Add to Cart"
                  }</button>`}
                </div>
        `);
    });
};

// Initialize products when page loads
productsList
  .then((products) => {
    renderProducts(products);
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });
