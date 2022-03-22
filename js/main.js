"use strict";

// Allow us to use GSAP animations
gsap.registerPlugin(ScrollTrigger);




/************************ LOGO **********************/


/*** HTML Elements * @type {Element} */
const logoElt = document.querySelector('.ihs-logo');
const soundBarsElt = logoElt.querySelector('.sound-bars');

/*** Variables for Logo * @type {number} */
let yOffset = 0;
let flowAnimation = 0;
const originalSizesFrequenceBar = [
    37.5, 56, 47.5, 37.5, 29, 65, 57, 53, 47, 34, 58, 74, 63, 61, 52, 48, 44, 39, 34, 64, 74, 53, 46.5, 43, 46.5, 43, 37,
    17, 74, 26, 27.5, 43.5, 53.5, 59, 64, 66.5, 56.5, 52.5, 47.5, 42.5, 35, 59, 54, 44.5, 31.5, 28, 32.5, 47, 56, 37
];
let cloneSizesFrequenceBar = [...originalSizesFrequenceBar];

/*** Functions for Logo * @type {function resetLogoVariables() {}} */
const resetLogoVariables = () => {
    cloneSizesFrequenceBar = [...originalSizesFrequenceBar];
    yOffset = 0;
    flowAnimation = 0;
}
/*** Functions for Logo * @type {createFrequencyElts() {}} */
const createFrequencyElts = () => {
    soundBarsElt.innerHTML = "";
    for (const item of cloneSizesFrequenceBar) {
        const frequenceELt = document.createElement('div');
        frequenceELt.classList.add('frequence-bar');
        frequenceELt.style.height = `${item}px`
        soundBarsElt.appendChild(frequenceELt);
    }
};

/*** Vanilla Animations for logo */
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





/************************ ACCUEIL **********************/

/**** GSAP Animation for logo */ 
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
logoTl.from(".ihs-logo", {
    scale: 1.5,
    x: "40vw",
    y: "35vh"
}, 0);





/************************ EQUIPE **********************/

/*** HTML Elements * @type {Element} */
const memberCardElts = Array.from(document.querySelectorAll('.member-card'));

/*** Animation Vanilla.tilt **/
VanillaTilt.init(memberCardElts, {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.8
});






/************************ ACTION **********************/

/*** HTML Elements * @type {Element} */
const videoBlanketElt = document.querySelector('.video-blanket');
console.log(videoBlanketElt);
// Animation apparition de la video et disparition au scroll
const videoTl = gsap.timeline({
    scrollTrigger: {
        id: "video",
        trigger: "#video",
        start: "top center",
        end: "bottom top",
        toggleAction: "play none reverse none",
        scrub: 1.5,
        markers: true,
    }
});
videoTl.to(".video-blanket", {
    opacity: 0
});
videoTl.to(".video-blanket", {
    opacity: 1
});






/************************ CONTACT **********************/





/******************* Init App *******************/

const init = () => {
    createFrequencyElts();

    /** HANDLE SCROLL EVENT **/
    document.addEventListener('scroll', () => {
        animateLogo();
    });
}


/****************** LAUNCHING  🚀🚀🚀  **********/
init();

