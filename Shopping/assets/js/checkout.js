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
    if(action === 'next'){
        if(activePage > parseInt(pages.length)){
            return;
        }   
   
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
    }
    if(action === 'previous'){
        if(activePage < 1){
            return;
        }   
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