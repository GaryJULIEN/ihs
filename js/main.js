"use strict";
/**
 * Allow us to use scrollTrigger with GSAP
 */
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, gsap);


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

// Animation initiale du logo
const logoTl = gsap.timeline({
    scrollTrigger: {
        id: "logo",
        trigger: "#titre",
        start: "top top",
        end: "bottom top",
        toggleAction: "play none reverse none",
        scrub: 1.5,
        markers: true,
    }
});
logoTl.from(".page-logo", {
    scale: 1.5,
    x: "40vw",
    y: "35vh"
}, 0);



// Animation C'est
// const cElt = document.querySelector('.c');
// cElt.innerHTML = "<div class='lettre'>" + cElt.innerHTML.split("").join("</div><div class='lettre'>") + "</div>";

// const cTl = gsap.timeline({
//     scrollTrigger: {
//         id: "c",
//         trigger: "#titre",
//         start: "+=50% top",
//         end: "bottom top",
//         toggleAction: "play none reverse none",
//         scrub: 1,
//         pin: true,
//         markers: true
//     }
// })
// cTl.from(".lettre", {
//     scale: 1.5,
//     opacity: 0,
//     stagger: 1,
//     y: 200,
//     x: 300
// }),
//     cTl.to(".lettre", {
//         color: "red",
//         duration: 0.1,
//         stagger: -0.1
//     }),
//     cTl.to(".lettre", {
//         color: "white",
//         stagger: -0.1
//     }),
//     cTl.to(".c", {
//         scale: 0.5,
//         duration: 0.1
//     }),
//     cTl.to(".c", {
//         scale: 2,
//         y: "2vh",
//         opacity: 0
//     });



// Animation Equipe
const equipeTitleElt = document.querySelector('.equipe-title');

// const equipeTl = gsap.timeline({
//     scrollTrigger: {
//         id: "equipe",
//         trigger: "#equipe",
//         start: "top top",
//         end: "center top",
//         toggleAction: "play none reverse none",
//         scrub: 1,
//         markers: true
//     }
// })
// equipeTl.from('.equipe-title',{
//     opacity: 0,
//     y: -500,
//     scale: 2
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

