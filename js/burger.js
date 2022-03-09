function showMenu(){
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");

}

let burgerBtn = document.getElementById("burgerBtn");
let mobileMenu = document.getElementById("mobileMenu")
burgerBtn.addEventListener("click", showMenu)