// gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// Initialize the transform position of the launchpad images

gsap.set("#back-bushes", {
  height: "20vh",
  zIndex: 2,
  x: "-50%"
});

gsap.set("#launchpad", {
  height: "12vh",
  zIndex: 3,
  x: "-50%"
});

gsap.set("#tower", {
  height: "70vh",
  zIndex: 5,
  x: "-235%"
});

gsap.set("#water-tank", {
  height: "22vh",
  zIndex: 5,
  x: "80%"
});

gsap.set("#rocket-grounded", {
  height: "70vh",
  zIndex: 4,
  x: "-305%"
});

gsap.set("#front-bushes", {
  height: "14vh",
  zIndex: 6,
  x: "-50%"
});

// Parallax effect on the launch images

gsap.from("#front-bushes",
  {
    y: "30vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#landing",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true // for debugging
  
    }
  }
)

gsap.from("#launchpad, #tower, #water-tank, #rocket-grounded",
  {
    y: "20vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#landing",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true // for debugging
  
    }
  }
)

gsap.from("#back-bushes",
  {
    y: "10vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#landing",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true // for debugging
  
    }
  }
)
