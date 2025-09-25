function toggleMenu(){
    const mobileMenuItems = document.querySelector(".mobile-menu-items");
    const menuItems = document.querySelector(".menu-items");
    const bugger = document.querySelector(".bugger");
    mobileMenuItems.classList.toggle("active");
    menuItems.classList.toggle("active");
    bugger.classList.toggle("active");
  }