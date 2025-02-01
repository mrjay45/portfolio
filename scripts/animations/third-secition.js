gsap.from("#section3-heading p", {
  y: 30,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#section3-des",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    // markers: true,
    scrub: 2,
  },
});

gsap.from("#section3-heading img", {
  rotate: 360,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#section3-des",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    scrub: 2,
  },
});

gsap.from("#section3-des", {
  x: -30,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: "#section3-des",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from("#section3-skills .skill", {
  y: -50,
  opacity: 0,
  stagger: 0.3,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#section3-des",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});
