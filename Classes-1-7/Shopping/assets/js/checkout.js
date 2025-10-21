const paymentMethod=[
    {id:"stripe", name:"Stripe"},
    {id:"alipay", name:"Alipay"},
    {id:"paypal", name:"Paypal"},
    {id:"credit_debit", name:"Credit/Debit"},
    {id:"apple_pay", name:"Apple Pay"},
    {id:"gpay", name:"Gpay"}
]

const pages = [{
    index:1, id:"summary", title:"Summary"
},
{
    index:2, id:"billing-address", title:"Billing Address"
},
{
    index:3, id:"payment-method", title:"Payment Method"
},
{
    index:4, id:"order-confirmation", title:"Order Confirmation"
}
]

const setActivePage= (index)=>{
    let n = parseInt(pages.length);
    if(index < 1 || index > n){
        return;
    }   
    localStorage.setItem('checkout-page', index);
}

const getActivePage= ()=>{
    const pageIndex = localStorage.getItem('checkout-page');
    if(!pageIndex){
        setActivePage(1);
        return 1;
    }
    return parseInt(pageIndex);
}

const activeCheckoutPage = (action) => {

    const activePage = getActivePage();
    const nextBtn = document.querySelector('.button.next');
    const previousBtn = document.querySelector('.button.previous');
    previousBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
    if(action === 'next'){
        if(activePage >= parseInt(pages.length)){
            nextBtn.classList.add('disabled');
            return;
        }   
        nextBtn.classList.remove('disabled');
        let nPageIndex = parseInt(activePage) + 1;
        const checkoutageTabs = document.querySelectorAll('.checkout-page-tab');
        checkoutageTabs.forEach((tab, index) => {
            if(index === nPageIndex - 1){
                tab.classList.add('active');
            }else{
                tab.classList.remove('active');
            }
        });
        setActivePage(nPageIndex);
        nextBtn.classList.remove('disabled');
    }
    if(action === 'previous'){
        console.log(activePage);
        if(activePage <= 1){
            previousBtn.classList.add('disabled');
            return;
        }   
        previousBtn.classList.remove('disabled');
        let nPageIndex = parseInt(activePage) - 1;
        const checkoutageTabs = document.querySelectorAll('.checkout-page-tab');
        checkoutageTabs.forEach((tab, index) => {
            if(index === nPageIndex - 1){
                tab.classList.add('active');
            }else{
                tab.classList.remove('active');
            }
        });
        setActivePage(nPageIndex);
    }
}


setActivePage(1);


const updateCheckoutSummaryDisplay = (subtotal, tax, total) => {
    const checkoutAmount = document.getElementById("checkout-amount");
    const checkoutTax = document.getElementById("checkout-tax");
    const checkoutTotal = document.getElementById("checkout-total");
    checkoutAmount.innerHTML = numberFormat(subtotal, "GBP");
    checkoutTax.innerHTML = numberFormat(tax, "GBP");
    checkoutTotal.innerHTML = numberFormat(total, "GBP");
}

const submitBillingAddressForm = () => {



const billingAddressForm = document.getElementById("billing-address-form");
billingAddressForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(billingAddressForm);
    const formDataObject = Object.fromEntries(formData);
    console.log(formDataObject);
});
}

const getAmountToPay = (products) => {
    const cart = getCart();
    const quantities = getCartQuantities();
    const productList = products?.filter((product) => cart.includes(product.id));
  
    if (!productList || productList.length === 0) {
      // Empty cart
      return {subtotal: 0, tax: 0, total: 0};
        
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
  
    return {subtotal, tax, total};
}


//to get account summary
const getCartSummary = (products) => {
    getAmountToPay(products);
    const {subtotal, tax, total} = getAmountToPay(products);
    updateCheckoutSummaryDisplay(subtotal, tax, total);
  };




const submitOrderConfirmationForm = document.getElementById("order-confirmation-form")
.addEventListener("submit", (event) => {
    event.preventDefault();
    const form1 = document.getElementById("billing-address-form");
    const form2 = document.getElementById("payment-method-form");


    const formData1 = new FormData(form1);
    const formData2 = new FormData(form2);
    const {subtotal, tax, total} = getAmountToPay(globalProducts);
    const payload = {
        ...Object.fromEntries(formData1),
        ...Object.fromEntries(formData2),
        subtotal: Number(subtotal).toFixed(2),
        tax: Number(tax).toFixed(2),
        total: Number(total).toFixed(2)
    }
    console.log(payload);

    // Simulate an API call with a 10 second delay
    showToast("Processing your order...", "info");
    setTimeout(() => {
        const orderDetails = {
            orderId: "ORD-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            estimatedDeliveryDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            paymentStatus: "success"
        };
        console.log(orderDetails);
        showToast("Order confirmed successfully", "success");
        // Optionally, redirect or use `orderDetails` here
        window.location.href = "order-confirmation.html?info=" + encodeURIComponent(JSON.stringify(orderDetails));
    }, 10000);



});















  productsList
  .then((products) => {
    globalProducts = products;
    getCartSummary(products);
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });
