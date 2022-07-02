const $ = (selelctor) => document.querySelector(selelctor);

const cartMenu = $('h2.cart__text > div.cart__menu');
const burgers = $('section.burger');

function burgerInCart() {
    burgers.addEventListener('click', console.log("클릭확인"));
}

burgerInCart();