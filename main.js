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

// let text = document.querySelector(".preloader-text p");

// text.innerHTML = text.innerHTML
//   .split("")
//   .map((char, i) => {
//     return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`;
//   })
//   .join("");

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".intro-logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
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

// Achievements

const achievements_heading = document.getElementById("achievements_heading");
const certificate = document.getElementById("cert_img");
const achievements = document.querySelectorAll(".achievements_container li");

const achievements_container = document.querySelector(
  ".achievements_container"
);

achievements.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const imageUrl = item.getAttribute("data-image");

    gsap.to(achievements_heading, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        certificate.src = imageUrl;
        gsap.to(achievements_heading, { opacity: 1, duration: 0.3 });
      },
    });
  });
});

achievements_container.addEventListener("mouseleave", () => {
  gsap.to(achievements_heading, { opacity: 1, duration: 0.3 });
  certificate.src = "";
});
