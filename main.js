import "./styles/modern-normalize.css";
import "./styles/style.css";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => {
    return `<span style="transform:rotate(${i * 9}deg)">${char}</span>`;
  })
  .join("");

// let circleImg = document.querySelector(".circle-wrapper");
// let backdrop = document.querySelector(".backdrop");

// circleImg.addEventListener("click", () => {
//   // backdrop.classList.toggle("active");

//   gsap.to(backdrop, {
//     width: "100%",
//     height: "100vh",
//     display: "flex",
//     alignItem: "center",
//     justifyContent: "center",
//     duration: 0.6,
//   });
// });

// backdrop.addEventListener("click", () => {
//   backdrop.classList.remove("active");
// });

// circleImg.addEventListener("click", () => {
//   gsap.to([".header ,.heading-huge "], {
//     display: "none",
//     duration: 0.6,
//   });

//   gsap.to(circleImg, {
//     width: "100%",
//     height: "100vh",
//     display: "flex",
//     alignItem: "center",
//     justifyContent: "center",
//     delay: 0.5,
//     duration: 0.6,
//   });
// });

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from("#first", {
    onStart: () => {
      $("#first").textillate({
        in: {
          effect: "fadeInUp",
          callback: () => {
            $("#first").textillate("out");
          },
        },
        out: { effect: "fadeOutUp" },
      });
    },
  })
    .from("#second", {
      opacity: 0,
      delay: 1.1,
      onStart: () => {
        $("#second").textillate({
          in: {
            effect: "fadeInUp",
            callback: () => {
              $("#second").textillate("out");
            },
          },
          out: { effect: "fadeOutUp" },
        });
      },
    })
    .from("#third", {
      opacity: 0,
      delay: 1.1,
      onStart: () => {
        $("#third").textillate({
          in: {
            effect: "fadeInUp",
            callback: () => {
              $("#third").textillate("out");
            },
          },
          out: { effect: "fadeOutUp" },
        });
      },
    })
    .from("#fourth", {
      opacity: 0,
      delay: 1.1,
      onStart: () => {
        $("#fourth").textillate({
          in: {
            effect: "fadeInUp",
            callback: () => {
              $("#fourth").textillate("out");
            },
          },
          out: { effect: "fadeOutUp" },
        });
      },
    })
    .to(".preloader-container", {
      top: "-100%",
      delay: 1,
      duration: 1,
      ease: "Power4.out",
    });
  // .to(".hero-background", {
  //   width: "100%",
  //   delay: 0.5,
  //   duration: 1,
  // });
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
