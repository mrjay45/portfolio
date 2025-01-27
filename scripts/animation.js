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

const t2 = gsap.timeline({
  scrollTrigger: {
    // markers: true,
    trigger: "#name2",
    scroller: "body",
    start: "top 40%",
  },
})

t2.from("#profile-img",{
  y: -100,
  duration: 0.5,
  stagger:0.3,
  opacity: 0,
  ease: "bounce.out",
})

t2.from("#profile-img img",{
  x: -100,
  rotation:360,
  opacity: 0,
  duration: 1.5,
  ease: "elastic.out(1.5,0.4)",
})

t2.from("#name2", {
  x: 70,
  opacity: 0,
  duration: 0.3,
});

t2.from("#profile-name2", {
  x: -40,
  opacity: 0,
  duration: 0.3,
});

t2.from("#links img",{
  y: -100,
  opacity: 0,
  stagger:0.3,
  duration:0.3,
  ease: "bounce.out",
})

t2.from("#heading p", {
  y: 40,
  opacity: 0,
  duration: 0.2,
});

t2.from("#heading img",{
  rotate:360,
  opacity:0,
  duration:1,
})

t2.from("#about > p", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger:0.3,
  ease: "bounce.out",
});

t2.from("#para1 img",{
  rotate:-30,
  duration:1,
  repeat: -1,
  yoyo: true,
})
