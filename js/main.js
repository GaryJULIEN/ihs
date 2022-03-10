"use strict";
/**
 * Allow us to use scrollTrigger with GSAP
 */
gsap.registerPlugin(ScrollTrigger);


/**
 * HTML ELEMNTS
 * @type {Element}
 */
const logoElt = document.querySelector('.page-logo');
const soundBarsElt = logoElt.querySelector('.sound-bars');

/**
 * VARIABLES FOR LOGO
 * @type {number}
 */
let yOffset = 0;
let flowAnimation = 0;
const originalSizesFrequenceBar = [
    37.5, 56, 47.5, 37.5, 29, 65, 57, 53, 47, 34, 58, 74, 63, 61, 52, 48, 44, 39, 34, 64, 74, 53, 46.5, 43, 46.5, 43, 37,
    17, 74, 26, 27.5, 43.5, 53.5, 59, 64, 66.5, 56.5, 52.5, 47.5, 42.5, 35, 59, 54, 44.5, 31.5, 28, 32.5, 47, 56, 37
];
let cloneSizesFrequenceBar = [...originalSizesFrequenceBar];

/**
 * Resets logo variables
 */
const resetLogoVariables = () => {
    cloneSizesFrequenceBar = [...originalSizesFrequenceBar];
    yOffset = 0;
    flowAnimation = 0;
}

/**
 * Create logo depending to cloneSizesFrequenceBar items
 */
const createFrequencyElts = () => {
    soundBarsElt.innerHTML = "";
    for (const item of cloneSizesFrequenceBar) {
        const frequenceELt = document.createElement('div');
        frequenceELt.classList.add('frequence-bar');
        frequenceELt.style.height = `${item}px`
        soundBarsElt.appendChild(frequenceELt);
    }
};

/**
 * VANILLA ANIMATIONS
 */
const animateLogo = () => {
    if (window.scrollY === 0) {
        resetLogoVariables();
        createFrequencyElts();
    } else {
        if (flowAnimation % 0.5 === 0) {
            if (yOffset < window.scrollY) {
                const lastItem = cloneSizesFrequenceBar.pop();
                cloneSizesFrequenceBar.unshift(lastItem);
            } else {
                const firstItem = cloneSizesFrequenceBar.shift();
                cloneSizesFrequenceBar.push(firstItem);
            }
            createFrequencyElts();
        }
        yOffset = window.scrollY;
        flowAnimation += 0.5;
    }
}

/**
 * GSAP ANIMATIONS
 */
const isMobile = window.innerWidth < 767;

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page-logo",
//         start: "-20% top",
//         end: "+=100%",
//         toggleAction: "play none reverse none",
//         scrub: 1.5,
//         markers: true,
//     }
// });

// tl.to(".page-logo", {
//     scale: 0.5,
//     margin: 0,
//     x: "-120%",
//     y: "-100%"
// });





/**
 * ************************ Init App ************************ *
 */
const init = () => {
    createFrequencyElts();

    /**
     * HANDLE SCROLL EVENT
     */
    document.addEventListener('scroll', () => {
        animateLogo();
    });
}



/**
 **************************************************************** LAUNCHING  🚀🚀🚀
 */
init();

