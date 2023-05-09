const overflow = document.querySelector(".overflow");
const menuMobile = document.querySelector(".menu_mobile");
const btnMenu = document.querySelector(".btn_menu");
const btnclose = document.querySelector(".btn_close");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("active");
  overflow.classList.add("active");
});

btnclose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  overflow.classList.remove("active");
});
