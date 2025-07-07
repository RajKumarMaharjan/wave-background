document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(MorphSVGPlugin);

    const firstWave = document.getElementById("squiggle");
    const secondWave = document.getElementById("squiggleAlt");

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to (firstWave, {
        duration: 2,
        ease: "power2.inOut",
        morphSVG: secondWave
    })
    .to(secondWave, {
        duration: 2,
        ease: "power2.inOut",
        morphSVG: firstWave
    }, 0);
});