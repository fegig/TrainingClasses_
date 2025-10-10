const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 79.99,
    discount: 10,
    currency: "GBP",
    description: "A classic denim jacket with a stylish design.",
    tags: ["jacket", "denim", "stylish"],
    stock: 10,
    isFeatured: true,
    category: "Clothing",
    tax: 0.2,
    image:
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Sporty Sneakers",
    price: 59.99,
    discount: 2,
    currency: "GBP",
    description: "A sporty sneaker with a stylish design.",
    tags: ["sneaker", "stylish", "sporty"],
    stock: 10,
    isFeatured: true,
    category: "Clothing",
    tax: 0.2,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Elegant Wristwatch",
    price: 129.95,
    discount: 2,
    currency: "GBP",
    description: "An elegant wristwatch with a stylish design.",
    tags: ["watch", "stylish", "elegant"],
    stock: 10,
    isFeatured: true,
    category: "Clothing",
    tax: 0.2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Eco Cotton T-shirt",
    price: 24.5,
    discount: 2,
    currency: "GBP",
    description: "An eco cotton t-shirt with a stylish design.",
    tags: ["t-shirt", "eco", "stylish"],
    stock: 10,
    isFeatured: true,
    category: "Clothing",
    tax: 0.2,
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    price: 99.99,
    discount: 2,
    currency: "GBP",
    description: "A wireless headphone with a stylish design.",
    tags: ["headphone", "stylish", "wireless"],
    stock: 10,
    isFeatured: true,
    category: "Clothing",
    tax: 0.2,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&q=80",
  },
];

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
  return {
    message: "Item added to cart",
    status: "success",
    productid: productid,
  };
};

const removeFromCart = (productid) => {
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  cart = cart.filter((id) => id !== productid);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Item removed from cart", "success");
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
                checkCart(product.id)
                  ? `<button class="button" onclick="removeFromCart(${product.id})">Remove from Cart</button>`
                  : `<button class="button" onclick="addToCart(${product.id})">Add to Cart</button>`
              }
            </div>
    `;
});
