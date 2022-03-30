"use strict";

// Allow us to use GSAP animations
gsap.registerPlugin(ScrollTrigger, gsap);




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
        scrub: 1.5
    }
});
logoTl.from(".ihs-logo", {
    scale: 1.5,
    x: "40vw",
    y: "35vh"
}, 0);





/************************ EQUIPE **********************/


// C'est - Animation GSAP
const cTl = gsap.timeline({
    scrollTrigger: {
        id: "c",
        trigger: ".c",
        start: "top top+=70%",
        end: "top top+=30%",
        ease: "circ.in",
        toggleAction: "play none none reset",
        scrub: 1.5,
        markers: true
    }
});
cTl.from(".c", {
    opacity: "0",
    scale: "4",
    marginLeft: "150vw",
    duration: "1"
}),
    cTl.to(".c", {
        ease: "bounce",
        fontStyle: "initial",
        marginLeft: "-20vw",
        opacity: "1",
        duration: "1.5"
    }),
    cTl.to(".c", {
        opacity: 0,
        duration: "0.5"
    });


// Une équipe - Animation GSAP
const equipeTitleTl = gsap.timeline({
    scrollTrigger: {
        id: "equipe-title",
        trigger: "#equipe",
        start: "top +300vh",
        end: "bottom +600vh",
        toggleAction: "play none none none",
        duration: "3.5",
        scrub: 3,
        markers: true
    }
}, 1);
equipeTitleTl.from(".equipe-title", {
    opacity: "0",
    ease: "bounce",
    marginLeft: "-20vw",
    y: -800
}),
    equipeTitleTl.to(".equipe-title", {
        ease: "bounce",
        fontStyle: "initial",
        ease: "circ.out",
        duration: 8,
        opacity: "1",
        y: -10
    });

// Member cards - Animation Vanilla.tilt
/*** HTML Elements * @type {Element} */
const memberCardElts = Array.from(document.querySelectorAll('.member-card'));
VanillaTilt.init(memberCardElts, {
    max: 30,
    speed: 400,
    glare: true,
    "max-glare": 0.8
});

// Animate the newly-visible member-cards
let observer = new IntersectionObserver(function (memberCardElts, self) {
    // Get an array of the newly visible member card
    let targets = memberCardElts.map(memberCard => {
        console.log(memberCard);
        console.log(memberCard.intersectionRatio);

        if (memberCard.isIntersecting) {
            self.unobserve(memberCard.target);
            console.log(memberCard.target);
            return memberCard.target;
        }
    });

    // Animate the newly-visible member cards
    gsap.to(targets, {
        opacity: 1,
        stagger: 0.2
    });
});





/************************ ACTIONS **********************/

// Animation apparition de la video et disparition au scroll - GSAP
const videoTl = gsap.timeline({
    scrollTrigger: {
        id: "video",
        trigger: "#actions",
        start: "top center",
        end: "bottom top",
        toggleAction: "play none reverse none",
        scrub: 1.5
    }
});
videoTl.to(".video-blanket", {
    opacity: 0
}),
    videoTl.to(".video-blanket", {
        opacity: 1
    });


// Animation évènements

const evts = gsap.utils.toArray(".evenements");

const evtsTl = gsap.timeline({
    scrollTrigger: {
        id: "actions-title",
        trigger: "#actions",
        pin: true,
        stagger: 0.1,
        scrub: 3,
        start: "top top+=40vh",
        end: "bottom bottom",
        markers: true
    }
});
evtsTl.from(".evenements", {
    y: 0,
    ease: "ease.out"
}),
    evtsTl.to(".evenements", {
        yPercent: "-100",
        opacity: 1
    }),
    evtsTl.to(".evenements", {
        yPercent: "-200"
    }),
    evtsTl.to(".evenements", {
        yPercent: "-300"
    }),
    evtsTl.to(".evenements", {
        yPercent: "-400"
    }),
    evtsTl.to(".evenements", {
        yPercent: "-500"
    }),
    evtsTl.to(".evenements", {
        yPercent: "-600",
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

