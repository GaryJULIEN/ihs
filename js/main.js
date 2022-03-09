"use strict";


// *******************   LOGO   *********************


const logoElt = document.querySelector('.page-logo');
const soundBarsElt = logoElt.querySelector('.sound-bars');
// Création et insertion : SoundBars du LOGO
const sizesFrequenceBar = [
    37.5, 56, 47.5, 37.5, 29, 65, 57, 53, 47, 34, 58, 74, 63, 61, 52, 48, 44, 39, 34, 64, 74, 53, 46.5, 43, 46.5, 43, 37, 17, 74, 26, 27.5, 43.5, 53.5, 59, 64, 66.5, 56.5, 52.5, 47.5, 42.5, 35, 59, 54, 44.5, 31.5, 28, 32.5, 47, 56, 37];

const createFrequencyElts = () => {
    soundBarsElt.innerHTML = "";
    for (const item of sizesFrequenceBar) {
        const frequenceELt = document.createElement('div');
        frequenceELt.classList.add('frequence-bar');
        frequenceELt.style.height = `${item}px`
        soundBarsElt.appendChild(frequenceELt);
    }
};
createFrequencyElts();

// Animation des SoundBars
const soundBarsAnimation = document.addEventListener('scroll', () => {
    const dernierElt = sizesFrequenceBar.pop();
    sizesFrequenceBar.unshift(dernierElt);
    createFrequencyElts();
})

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page-logo",
        start: "top top",
        end: "+=100%",
        toggleAction: "play none reverse none",
        scrub: 1,
        markers: true
    }
});
tl.to(".page-logo", {
    scale: 0.8,
    margin: 0,
    x: 0,
    y: 0,
    padding: 0
});

