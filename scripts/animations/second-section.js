/*Second Section animation */
// const t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#name2",
//     scroller: "body",
//     start: "top 60%",
//     scrub: 2,
//   },
// })

gsap.from("#profile-img", {
  y: -100,
  duration: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});

gsap.from("#profile-img img", {
  x: 0,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});

gsap.from("#name2", {
  x: 70,
  opacity: 0,
  duration: 0.3,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
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
    end: "top 30%",
    // scrub: 1.5,
  },
});

gsap.from("#links img", {
  y: -100,
  opacity: 0,
  stagger: 0.3,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});

gsap.from("#heading p", {
  y: 20,
  opacity: 0,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});

gsap.from("#heading img", {
  rotate: 360,
  opacity: 0,
  duration: 0.8,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});

gsap.from("#about > p", {
  y: -100,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#para1",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    // markers:true,
    // scrub: 1.5,
  },
});
