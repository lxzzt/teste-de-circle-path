gsap.registerPlugin(ScrollTrigger);

// timeline principal
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-area",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5, // suaviza a relação entre scroll e animação
    pin: false,
  }
});

// Configura fade-in do texto e expansão circular
const sections = [".s2", ".s3", ".s4"];
sections.forEach((sec, i) => {
  tl.fromTo(sec,
    { clipPath: "circle(0% at 50% 50%)" },
    {
      clipPath: "circle(150% at 50% 50%)",
      ease: "power2.out",
      duration: 1,
      onStart: () => document.querySelector(sec).classList.add("active"),
      onReverseComplete: () => document.querySelector(sec).classList.remove("active")
    }
  );
});

// Ativa a primeira seção imediatamente
document.querySelector(".s1").classList.add("active");
