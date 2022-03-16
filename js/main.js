"use strict";

// Allow us to use scrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, gsap);




/*** HTML ELEMENTS * @type {Element} */


const logoElt = document.querySelector('.page-logo');
const soundBarsElt = logoElt.querySelector('.sound-bars');
const videoContainerElt = document.getElementById('video-container');
const infosMediasElt = document.getElementById('infos-medias');



/*** VARIABLES FOR LOGO * @type {number} */

let yOffset = 0;
let flowAnimation = 0;
const originalSizesFrequenceBar = [
    37.5, 56, 47.5, 37.5, 29, 65, 57, 53, 47, 34, 58, 74, 63, 61, 52, 48, 44, 39, 34, 64, 74, 53, 46.5, 43, 46.5, 43, 37,
    17, 74, 26, 27.5, 43.5, 53.5, 59, 64, 66.5, 56.5, 52.5, 47.5, 42.5, 35, 59, 54, 44.5, 31.5, 28, 32.5, 47, 56, 37
];
let cloneSizesFrequenceBar = [...originalSizesFrequenceBar];

// Resets logo variables
const resetLogoVariables = () => {
    cloneSizesFrequenceBar = [...originalSizesFrequenceBar];
    yOffset = 0;
    flowAnimation = 0;
}

// Create logo depending to cloneSizesFrequenceBar items
const createFrequencyElts = () => {
    soundBarsElt.innerHTML = "";
    for (const item of cloneSizesFrequenceBar) {
        const frequenceELt = document.createElement('div');
        frequenceELt.classList.add('frequence-bar');
        frequenceELt.style.height = `${item}px`
        soundBarsElt.appendChild(frequenceELt);
    }
};

/*** VANILLA ANIMATIONS */
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

/*** GSAP ANIMATIONS */
const isMobile = window.innerWidth < 767;

// Animation du logo
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






/**** VARIABLES FOR VIDEO * @type {Element} */

// Create iframe for including youtube video
const createIframe = () => {
    const iframeElt = document.createElement('iframe');
    iframeElt.classList.add('video-screen');
    iframeElt.setAttribute('id', 'youtube-iframe');
    iframeElt.setAttribute('src', 'https://www.youtube.com/embed/sdXeXHA08fI?version=3&controls=0&autoplay=1&fs=0&loop=1&mute=1&playlist=sdXeXHA08fI');
    iframeElt.setAttribute('title', "YouTube video player");
    iframeElt.setAttribute('frameborder', '0');
    iframeElt.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframeElt.setAttribute('allowfullscreen', '');
    iframeElt.onload = console.log('my frame is loaded !')
    return iframeElt;
}






/**** VARIABLES FOR MEDIAS **/

// Datas for Medias
const infosMedias = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/inharderstylepodcast/',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'abonnés',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.`,
        imgLogo: 'fa-brands fa-facebook-square'

    },
    {
        name: 'Twitch',
        url: 'https://www.twitch.tv/inharderstyle',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.`,
        imgLogo: 'fa-brands fa-twitch'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/inharderstyle/',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.`,
        imgLogo: 'fa-brands fa-instagram'
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCk3w4OaZJ66cmdr0APurPjg',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'abonnés',
        description: `Minima sit amet fugit nulla ipsa amet illo, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.`,
        imgLogo: 'fa-brands fa-youtube'
    },
    {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/insuspect',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Magni, iure itaque. Veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        imgLogo: 'fa-brands fa-soundcloud'
    }
];

// Media's creation and insertion
const mediasContainerElt = document.getElementById('medias-container');

// Create and insert each media of infosMedias
const createMedia = () => {
    for (let media of infosMedias) {
        const newMediaElt = document.createElement('div');
        newMediaElt.classList.add('media');

        const logoContainerElt = document.createElement('div');
        logoContainerElt.classList.add('logo-media-container');

        const logoMediaElt = document.createElement('i');
        logoMediaElt.setAttribute('class', `${media.imgLogo}`);
        logoMediaElt.style.height = '10vh';
        logoMediaElt.style.width = '10vh';

        const titleMediaElt = document.createElement('h3');
        titleMediaElt.textContent = media.name;
        

        const descriptionMediaElt = document.createElement('p');
        descriptionMediaElt.textContent = `${media.followers} ${media.followers_libelle}`;

        const buttonMediaElt = document.createElement('button');
        buttonMediaElt.type = 'button';
        buttonMediaElt.textContent = "Voir";
        buttonMediaElt.setAttribute('url', `${media.url}`);
        buttonMediaElt.addEventListener('click', () => {
            window.open(`${media.url}`, '_blank');
        })


        logoContainerElt.appendChild(logoMediaElt);
        newMediaElt.appendChild(titleMediaElt);
        newMediaElt.appendChild(logoContainerElt);
        newMediaElt.appendChild(descriptionMediaElt);
        newMediaElt.appendChild(buttonMediaElt);
        mediasContainerElt.appendChild(newMediaElt);
    }
}






/**** VARIABLES FOR CONTACT **/

// HTML Elements
const contactFormElt = document.getElementById('contact-form');










/******************* Init App *******************/

const init = () => {
    const iframeElt = createIframe();
    videoContainerElt.appendChild(iframeElt);
    createFrequencyElts();
    createMedia();

    /** HANDLE SCROLL EVENT **/
    document.addEventListener('scroll', () => {
        animateLogo();
    });
}



/**
 **************************************************************** LAUNCHING  🚀🚀🚀
 */
init();

