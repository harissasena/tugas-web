
// menu
let navbar = document.querySelector('.navbar');
let searcForm = document.querySelector('#search-from');
let cartItem = document.querySelector('.cartItem');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    if (searcForm){
    searcForm.classList.remove('active');
    }
    if (cartItem){
    cartItem.classList.remove('active');
    }
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
