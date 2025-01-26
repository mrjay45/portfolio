gsap.from("#logo", {
  y: -30,
  x: -30,
  opacity: 0,
  duration: 2,
  delay: 1,
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
    stagger: 0.5,
  }
);

const tl = gsap.timeline();

tl.from("#profile-name", {
  y: -20,
  x: 20,
  opacity: 0,
  duration: 1,
  delay: 1,
});

tl.from("#name", {
  x: -100,
  scale: 0,
  opacity: 0,
  duration: 1,
});

tl.from("#ld-detailed-section", {
  x: -20,
  opacity: 0,
  duration: 1,
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
