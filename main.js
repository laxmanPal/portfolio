import "./style.css";

const mobileMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navigation.classList.toggle("active");
});
