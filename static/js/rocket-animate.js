gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

let smoother = ScrollSmoother.create({
  content: '#smooth-content',
  smooth: 2,
  effects: true,
})

gsap.defaults(
  {
    immediateRender: false,
  }
)

//############# OTHER ANIMATIONS #############
gsap.fromTo('#shooting-star',
  {
    height: "0.3vh",
    x: "-100vw",
    y: "-40vh",
    // rotation: 17.5,
    rotation: 7,
  },
  {
    x: "100vw",
    y: "0vh",
    ease: 'none',
    delay: 1,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#outro",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reset play play",
      // markers: true, // for debugging,
    }
  }
)

// ############# STAGE SIX ROCKET - Position Satellite #############

gsap.to("#satellite", 
  { 
    y: "-1.9vh",
    rotation: 0,
    height: "6vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#outro",
      start: "center center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.set('#satellite',
  {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#outro",
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
      // markers: true // for debugging
    }
  }
)

// ############# STAGE FIVE ROCKET - Expand Solar Panels #############

gsap.set('#payload',
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#outro",
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)

gsap.set('.panel',
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#outro",
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)

gsap.to("#solar-panel-left", 
  { 
    rotateY: -90,
    ease: "none",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#solar-panel-left-2", 
  { 
    rotateY: -90,
    x: "-3.6vh",
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#solar-panel-left-3", 
  { 
    rotateY: -90,
    x: "-3.6vh",
    ease: "power2.in",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#solar-panel-right", 
  { 
    rotateY: 90,
    ease: "none",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#solar-panel-right-2", 
  { 
    rotateY: 90,
    x: "3.6vh",
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#solar-panel-right-3", 
  { 
    rotateY: 90,
    x: "3.6vh",
    ease: "power2.in",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.set('.panel',
  {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "bottom center",
      end: "bottom center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)


// ############# STAGE FOUR ROCKET - Payload covers and booster detach #############

// Re-display Assets

gsap.set("#payload-cover-left, #payload-cover-right",
  { 
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#rocket-stg-4",
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none",
      // markers: true // for debugging
    }
  }
)

// Animate Assets

gsap.from("#rckt-stage-4", 
  { 
    y: "85vh",
    x: "-10vh",
    rotation: 8,
    ease: "none",
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "center center",
      endTrigger: "#rocket-stg-4",
      end: "top center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.set("#rckt-stage-4",
  { 
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#rocket-stg-5",
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
      // markers: true // for debugging
    }
  }
)

gsap.from("#payload-cover-left", 
  { 
    y: "70vh",
    x: "-60vh",
    rotation: -70,
    ease: "none",
    scrollTrigger: {
      trigger: "#rocket-stg-4",
      start: "top center",
      endTrigger: "#rocket-stg-4",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.from("#payload-cover-right", 
  { 
    y: "90vh",
    x: "50vh",
    rotation: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#rocket-stg-4",
      start: "top center",
      endTrigger: "#rocket-stg-4",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

// HIDE STAGE 4 ASSETS

gsap.set('#payload, #rckt-stage-4, #payload-cover-left, #payload-cover-right', {
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "#rocket-stg-4",
    start: "center center",
    end: "center center",
    toggleActions: "play none reverse none",
    // markers: true // for debugging
  }  
});

// ############# STAGE THREE ROCKET - Detach Main booster #############

gsap.fromTo('#propulsion',
  {
    autoAlpha: 0,
    height: "50vh",
    width: "0vh",
    y: "38vh",
  },
  {
    autoAlpha: 1,
    height: "50vh",    
    width: "5vh",
    y: "38vh",
    scrollTrigger: {
      trigger: "#rocket-stg-4",
      start: "center 25%",
      end: "75% 25%",
      scrub: true,
      // markers: true, // for debugging,
    }
  }
)

gsap.set('#rckt-stg-three, #rckt-main-booster',
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#rocket-stg-4",
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)

gsap.to("#rckt-stg-three", 
  { 
    y: "-14.5vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#experience",
      start: "75% center",
      endTrigger: "#rocket-stg-3",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.fromTo("#propulsion",
  {
    autoAlpha: 1,
    height: "50vh",
    width: "5vh",
    y: "38vh",
  }, 
  {
    autoAlpha: 0,
    y: "35vh",
    height: "50vh",
    width: "0vh",
    scrollTrigger: {
      trigger: "#experience",
      start: "75% center",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.from("#rckt-main-booster", 
  { 
    y: "85vh",
    x: "-8vh",
    rotation: 10,
    ease: "none",
    scrollTrigger: {
      trigger: "#experience",
      start: "center center",
      endTrigger: "#rocket-stg-3",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.set('#rckt-main-booster, #rckt-stg-three', {
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "#rocket-stg-3",
    start: "center center",
    end: "center center",
    toggleActions: "play none reverse none",
    // markers: true // for debugging
  }
});

// ############# STAGE TWO ROCKET - Detach small boosters #############

gsap.fromTo('#propulsion',
  {
    autoAlpha: 0,
    height: "50vh",
    width: "0vh",
    y: "52.5vh",
  },
  {
    autoAlpha: 1,
    height: "50vh",    
    width: "5vh",
    y: "52.5vh",
    scrollTrigger: {
      trigger: "#rocket-stg-3",
      start: "60% center",
      end: "80% center",
      scrub: true,
      // markers: true, // for debugging,
    }
  }
)

gsap.fromTo('#propulsion',
  {
    autoAlpha: 1,
    height: "50vh",
    width: "5vh",
    y: "52.5vh",
  },
  {
    autoAlpha: 0,
    height: "50vh",    
    width: "0vh",
    y: "52.5vh",
    scrollTrigger: {
      trigger: "#rocket-stg-2",
      start: "top center",
      end: "20% center",
      scrub: true,
      // markers: true, // for debugging,
    }
  }
)

gsap.set('#rckt-stg-two, #rckt-left-booster, #rckt-right-booster', 
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#rocket-stg-3",
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
      // markers: true,
    }
  }
);

gsap.from("#rckt-left-booster", 
  { 
    y: "85vh",
    x: "-30vh",
    rotation: -20,
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      start: "center center",
      endTrigger: "#rocket-stg-2",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.from("#rckt-right-booster", 
  { 
    y: "90vh",
    x: "24vh",
    rotation: 14,
    ease: "none",
    scrollTrigger: {
      trigger: "#projects",
      start: "center center",
      endTrigger: "#rocket-stg-2",
      end: "center center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.set('#rckt-stg-two, #rckt-left-booster, #rckt-right-booster',
  {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: "#rocket-stg-2",
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)

// ############# STAGE ONE ROCKET - Rocket launches and flies into view #############

gsap.set('#rckt-stg-one',
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#rocket-stg-2",
      start: "center center",
      end: "center center",
      toggleActions: "play none reverse none",
      // markers: true, // for debugging
    }
  }
)

gsap.fromTo('#propulsion',
  {
    autoAlpha: 0,
    height: "95vh",
    width: "0vh",
    y: "73vh",
  },
  {
    autoAlpha: 1,
    height: "95vh",
    width: "9.5vh",
    y: "73vh",
    scrollTrigger: {
      trigger: "#rocket-stg-2",
      start: "center 25%",
      end: "75% 25%",
      scrub: true,
      // markers: true, // for debugging
    }
  }
)

gsap.to("#rckt-stg-one", 
  { 
    y: "85vh",    
    ease: "elastic.in(1,0.5)",
    scrollTrigger: {
      trigger: "#about-me",
      start: "75% center",
      endTrigger: "#rocket-entrance",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);

gsap.to("#propulsion", 
  { 
    y: "158vh",
    ease: "elastic.in(1,0.5)",
    scrollTrigger: {
      trigger: "#about-me",
      start: "75% center",
      endTrigger: "#rocket-entrance",
      end: "bottom center",
      scrub: true,
      // markers: true // for debugging
    }
  }
);