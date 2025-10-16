gsap.registerPlugin(ScrollTrigger);

/*
Agora o scroll é normal (a .scroll-area cria altura),
e as animações são controladas pelo progresso do ScrollTrigger.
*/
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-area",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  }
});

// cada trecho ocupa 1/3 do scroll total (3 trocas)
timeline.fromTo(".s2",
  { clipPath: "circle(0% at 50% 50%)" },
  { clipPath: "circle(150% at 50% 50%)", ease: "none", duration: 1 }
);
timeline.fromTo(".s3",
  { clipPath: "circle(0% at 50% 50%)" },
  { clipPath: "circle(150% at 50% 50%)", ease: "none", duration: 1 }
);
timeline.fromTo(".s4",
  { clipPath: "circle(0% at 50% 50%)" },
  { clipPath: "circle(150% at 50% 50%)", ease: "none", duration: 1 }
);

