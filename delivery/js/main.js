const cartbutton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartbutton.addEventListener ("click", togglemodel);

close.addEventListener("click", togglemodel);

function togglemodel() {
    modal.classList.toggle("is-open");
}

new WOW().init();