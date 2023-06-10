import "./styles/modern-normalize.css";
import "./styles/style.css";

// const mobileMenu = document.querySelector(".burger-menu");
// const navigation = document.querySelector(".navigation");

// mobileMenu.addEventListener("click", () => {
//   mobileMenu.classList.toggle("active");
//   navigation.classList.toggle("active");
// });

// gsap.to(".overflow-hidden", {
//   y: 0,
//   duration: 0.2,
//   stagger: 0.1,
// });

// let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector(".outer-cursor");

// document.addEventListener("mousemove", moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   innerCursor.style.left = `${x}px`;
//   innerCursor.style.top = `${y}px`;
//   setTimeout(() => {
//     outerCursor.style.left = `${x}px`;
//     outerCursor.style.top = `${y}px`;
//   }, 100);
// }

// let links = Array.from(document.querySelectorAll("nav-links"));

// links.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//     outerCursor.style.display = "none";
//   });
//   link.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//     outerCursor.style.display = "block";
//   });
// });

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => {
    return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`;
  })
  .join("");

let circleImg = document.querySelector(".circle-wrapper");
let backdrop = document.querySelector(".backdrop");

circleImg.addEventListener("click", () => {
  backdrop.classList.toggle("active");
});
