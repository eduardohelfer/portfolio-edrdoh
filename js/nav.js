const menu = document.querySelector(".menu");
const menuOpenBtn = document.querySelector(".menu--open");
const menuCloseBtn = document.querySelector(".menu--close");
const menuLink = document.querySelectorAll(".menu__link");

function toggleMenu(){
  menu.classList.toggle("menu--opener");
}

function closeMenu(){
  menu.classList.toggle("menu--opener");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
menuLink[0].addEventListener("click", closeMenu);
menuLink[1].addEventListener("click", closeMenu);
menuLink[2].addEventListener("click", closeMenu);
menuLink[3].addEventListener("click", closeMenu);
menuLink[4].addEventListener("click", closeMenu);
