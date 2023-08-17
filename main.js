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
const navLinks = document.querySelectorAll(".nav-links");

burgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});

let intro = document.querySelector(".intro");
let logoSpan = document.querySelectorAll(".intro-logo");

const tl = gsap.timeline();

tl.to(logoSpan, {
  bottom: 0,
  opacity: 1,
  stagger: 0.5,
  delay: 0.5,
  duration: 0.5,
})
  .to(logoSpan, {
    bottom: "50px",
    opacity: 0,
    stagger: 0.5,
    delay: 0.1,
    duration: 0.5,
  })
  .to(intro, {
    y: "-100vh",
    delay: 0.5,
    duration: 1,
  })
  .to(".header-logo_wrapper", {
    y: 0,
    opacity: 1,
    delay: 0.1,
    duration: 0.3,
  })
  .to(".nav-items", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
    delay: 0.1,
    duration: 0.3,
  })
  .to(".text-slider", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    delay: 0.5,
    duration: 1,
  })
  .to(".heading-huge", {
    y: 0,
    stagger: 0.05,
    delay: -1,
    duration: 1,
  });
// });

tl.to(".about_left", {
  scrollTrigger: {
    trigger: "#about-me",
  },
  x: 0,
  opacity: 1,
  delay: 1,
  duration: 1,
}).to(".about_right", {
  scrollTrigger: {
    trigger: "#about-me",
  },
  x: 0,
  opacity: 1,
  delay: 1,
  duration: 1,
});

const skillsHeading = new SplitType("#skills .section-heading");

gsap.to("#skills .section-heading .word", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 50%",
  },
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
});

gsap.from(".tech-container", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 50%",
  },
  y: 50,
  opacity: 0,
  delay: 1,
  duration: 1,
  stagger: 0.09,
  ease: "power2.out",
});

const experienceHeading = new SplitType("#experience .section-heading");

gsap.to("#experience .section-heading .word", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 50%",
  },
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
});

gsap.from(".main_exp_container", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 50%",
  },
  opacity: 0,
  delay: 1,
  duration: 1,
});

// Achievements

gsap.from("#achievements_heading", {
  scrollTrigger: {
    trigger: "#achievements",
    start: "top 50%",
  },
  opacity: 1,
  delay: 0.5,
  duration: 1,
});

gsap.to(".award", {
  scrollTrigger: {
    trigger: "#achievements",
    start: "top 50%",
  },
  x: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
});

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

// Projects

const projectsSectionHeading = new SplitType("#projects .section-heading");

gsap.to("#projects .section-heading .word", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 50%",
  },
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
});

gsap.to([".project_image_container", ".project_dis_container"], {
  scrollTrigger: {
    trigger: "#projects",
  },
  x: 0,
  opacity: 1,
  delay: 1,
  duration: 1,
});

// Footer

tl.to(".info h1", {
  scrollTrigger: {
    trigger: ".info",
    start: "top 50%",
  },
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
})
  .to([".contact_info", ".social"], {
    opacity: 1,
    delay: 0.5,
    stagger: 0.05,
    duration: 1,
  })
  .to(".form_container", {
    scrollTrigger: {
      trigger: ".form_container",
      start: "top 50%",
    },
    opacity: 1,
    stagger: 0.05,
    delay: 0.5,
    duration: 1,
  })
  .to(".credits", {
    scrollTrigger: {
      trigger: ".form_container",
      start: "top 50%",
    },
    width: "100%",
    delay: 0.5,
    duration: 1,
  })
  .to(".copyright p ", {
    scrollTrigger: {
      trigger: ".form_container",
      start: "top 50%",
    },
    display: "block",
    opacity: 1,
    delay: 0.5,
    duration: 1,
  });
