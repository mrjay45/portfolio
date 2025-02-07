gsap.from("#logo", {
  y: -30,
  x: -30,
  opacity: 0,
  duration: 2,
});

gsap.fromTo(
  "#nav-text a",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    delay: 1,
    stagger: 0.3,
  }
);

const tl = gsap.timeline();

tl.from("#profile-name", {
  y: -20,
  x: 20,
  opacity: 0,
  duration: 0.4,
  delay: 2,
});

tl.from("#name", {
  y: 15,
  opacity: 0,
  duration: 0.5,
});

tl.from("#ld-detailed-section", {
  x: -20,
  opacity: 0,
  duration: 0.5,
});

tl.from("#button", {
  opacity: 0,
  duration: 1,
});

gsap.from("#right-div-s1 img:nth-child(1)", {
  scale: 0,
  opacity: 0,
  rotation: 360,
  duration: 1,
  delay: 2,
});

gsap.from("#right-div-s1 img:nth-child(2)", {
  x: 20,
  opacity: 0,
  duration: 2,
  delay: 3,
});

// changes made by copilot

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#nav", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#main-section", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  });

  gsap.from("#left-div-s1", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#right-div-s1 img", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
  });

  gsap.from("#top-circle1, #top-circle2, #top-circle3, #top-circle4, #top-circle5", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });
});
