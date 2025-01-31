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

/*Second Section animation */
// const t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#name2",
//     scroller: "body",
//     start: "top 60%",
//     scrub: 2,
//   },
// })

gsap.from("#profile-img",{
  y: -100,
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
})

gsap.from("#profile-img img",{
  x: 0,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
})

gsap.from("#name2", {
  x: 70,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
});

gsap.from("#profile-name2", {
  x: -40,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
});

gsap.from("#links img",{
  y: -100,
  opacity: 0,
  stagger:0.3,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
})

gsap.from("#heading p", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
});

gsap.from("#heading img",{
  rotate:360,
  opacity:0,
  duration:0.8,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
})

gsap.from("#about > p", {
  y: -100,
  opacity: 0,
  stagger:0.3,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end:"top 30%",
    // markers:true,
    scrub: 1.5,
  },
});

