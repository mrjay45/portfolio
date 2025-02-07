document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#s4-heading p", {
    scrollTrigger: {
      trigger: "#s4-heading",
      start: "top 80%",
      end: "bottom 60%",
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#s4-para3, #s4-para4", {
    scrollTrigger: {
      trigger: "#s4-heading", // Changed trigger element
      start: "top 80%",
      end: "bottom 60%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
  });

  gsap.from(".swiper-slide", {
    scrollTrigger: {
      trigger: "#s4-heading", // Changed trigger element
      start: "top 80%",
      end: "bottom 60%",
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });

  gsap.from("#s4-heading img", {
    scrollTrigger: {
      trigger: "#s4-heading", // Changed trigger element
      start: "top 80%",
      end: "bottom 60%",
    },
    opacity: 0,
    rotation: 360,
    scale: 0.5,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
  });
});
