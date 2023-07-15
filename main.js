import "./styles/modern-normalize.css";
import "./styles/style.css";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const burgerMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

let text = document.querySelector(".preloader-text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => {
    return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`;
  })
  .join("");

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".preloader-circle-image", {
    width: 0,
    height: 0,
    duration: 1,
  })
    .to(".preloader-text", {
      opacity: 0,
      duration: 1,
    })
    .to(".preloader-circle-image", {
      width: "100%",
      opacity: 0,
      duration: 1,
    })
    .to(".preloader-container", {
      top: "-150%",
      delay: 0.5,
      duration: 1,
      ease: "Power4.out",
    });
});

gsap.to(".clip-path", {
  scrollTrigger: {
    trigger: ".clip-path-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
  clipPath: "circle(100% at center center)",
  ease: "power2.out",
});

gsap.to(".innertext", {
  scrollTrigger: {
    trigger: ".clip-path-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  opacity: 0,
  ease: "power2.out",
});

// gsap.from(".internet_img", {
//   scrollTrigger: {
//     trigger: ".skills",
//     start: "top 20%",
//   },
//   scale: 0,
//   opacity: 0,
//   delay: 0.5,
//   duration: 1,
//   ease: "power2.out",
// });

// gsap.from(".frontend , .databases , .others , .backend", {
//   scrollTrigger: {
//     trigger: ".skills",
//     start: "top 20%",
//   },
//   scale: 0,
//   opacity: 0,
//   delay: 1,
//   duration: 1,
//   stagger: 0.09,
//   ease: "power2.out",
// });

gsap.from(".tech-container", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 50%",
  },
  scale: 0,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.09,
  ease: "power2.out",
});
