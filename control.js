"use strict";
// HTML ELEMENTS
const videoContainerElt = document.getElementById('video-container');
const contentPageElt = document.getElementById('content-page');
const logoElt = document.querySelector('.logo');
const soundBarsElt = logoElt.querySelector('.sound-bars');
const theVoiceElt = document.querySelector('.the-voice');
const theVoiceParagraphElt = theVoiceElt.querySelector('p');


// DATAS
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
const sizesFrequenceBar = {
    0 : 37.5,
    1 : 56,
    2 : 47.5,
    3 : 37.5,
    4 : 29,
    5 : 65,
    6 : 57,
    7 : 53,
    8 : 47,
    9 : 34,
    10: 58,
    11: 74,
    12: 63,
    13: 61,
    14: 52,
    15: 48,
    16: 44,
    17: 39,
    18: 34,
    19: 64,
    20: 74,
    21: 53,
    22: 46.5,
    23: 43,
    24: 46.5,
    25: 43,
    26: 37,
    27: 17,
    28: 74,
    29: 26,
    30: 27.5,
    31: 53.5,
    32: 37.5,
    33: 59,
    34: 64,
    35: 66.5,
    36: 56.5,
    37: 52.5,
    38: 47.5,
    39: 42.5,
    40: 35,
    41: 59,
    42: 54,
    43: 44.5,
    44: 31.5,
    45: 28,
    46: 32.5,
    47: 47,
    48: 56,
    49: 37
}

const infosMedias = {
    facebook : {
        name: 'Facebook',
        url: 'https://www.facebook.com/inharderstylepodcast/',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'abonnés',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.
                    Minima non aliquid fugit nulla ipsa amet illo ab dolor, atque aperiam temporibus, necessitatibus tempore ducimus consequatur. Autem, quasi assumenda. Inventore assumenda eligendi perspiciatis incidunt nostrum voluptatum delectus dolore ratione.
                    Temporibus officiis laborum itaque natus repudiandae velit nostrum eaque dicta laudantium nulla! Architecto animi quasi doloribus id nemo et omnis aut facilis, repellendus harum laboriosam beatae molestiae debitis ex accusamus.`        
    },
    twitch : {
        name: 'Twitch',
        url: 'https://www.twitch.tv/inharderstyle',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.
                    Minima non aliquid fugit nulla ipsa amet illo ab dolor, atque aperiam temporibus, necessitatibus tempore ducimus consequatur. Autem, quasi assumenda. Inventore assumenda eligendi perspiciatis incidunt nostrum voluptatum delectus dolore ratione.
                    Temporibus officiis laborum itaque natus repudiandae velit nostrum eaque dicta laudantium nulla! Architecto animi quasi doloribus id nemo et omnis aut facilis, repellendus harum laboriosam beatae molestiae debitis ex accusamus.`
    },
    instagram : {
        name: 'Instagram',
        url: 'https://www.instagram.com/inharderstyle/',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.
                    Minima non aliquid fugit nulla ipsa amet illo ab dolor, atque aperiam temporibus, necessitatibus tempore ducimus consequatur. Autem, quasi assumenda. Inventore assumenda eligendi perspiciatis incidunt nostrum voluptatum delectus dolore ratione.
                    Temporibus officiis laborum itaque natus repudiandae velit nostrum eaque dicta laudantium nulla! Architecto animi quasi doloribus id nemo et omnis aut facilis, repellendus harum laboriosam beatae molestiae debitis ex accusamus.`
    },
    youtube : {
        name: 'Youtube',
        url: 'https://www.youtube.com/channel/UCk3w4OaZJ66cmdr0APurPjg',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'abonnés',
        description: `Minima sit amet fugit nulla ipsa amet illo, consectetur adipisicing elit. Magni, iure itaque. Eveniet pariatur, neque modi, incidunt veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error.
                    Temporibus, necessitatibus tempore ducimus consequatur. Autem, quasi assumenda. Inventore assumenda eligendi perspiciatis incidunt nostrum voluptatum delectus dolore ratione.
                    Temporibus officiis laborum itaque natus repudiandae velit nostrum eaque dicta laudantium nulla! Architecto animi quasi doloribus id nemo et omnis aut facilis, repellendus harum laboriosam beatae molestiae debitis ex accusamus.`
    },
    soundcloud : {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/insuspect',
        followers: Math.ceil(Math.random(1) * 10000),
        followers_libelle: 'followers',
        description: `Magni, iure itaque. Veniam molestias possimus porro rem laudantium dolore accusamus sed odit inventore tempora optio error. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Itaque natus repudiandae velit nostrum eaque dicta laudantium nulla! Architecto animi quasi doloribus id nemo et omnis aut facilis, repellendus harum laboriosam beatae molestiae debitis ex accusamus.`
    }
};

const createIframe = () => {
    const iframeElt = document.createElement('iframe');
    iframeElt.setAttribute('width', windowWidth);
    iframeElt.setAttribute('height', windowHeight);
    iframeElt.setAttribute('id', 'youtube-iframe');
    // iframeElt.onload = function() { alert('myframe is loaded'); };
    iframeElt.setAttribute('src', 'https://www.youtube.com/embed/sdXeXHA08fI?version=3&controls=0&autoplay=1&fs=0&loop=1&mute=1&playlist=sdXeXHA08fI');
    iframeElt.setAttribute('frameborder', '0');
    iframeElt.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframeElt.setAttribute('allowfullscreen', true);
    return iframeElt;
};

const createFrequencyElts = () => {
    for(const item in sizesFrequenceBar) {
        const frequenceELt = document.createElement('div');
        frequenceELt.classList.add('frequence-bar');
        frequenceELt.style.height = `${sizesFrequenceBar[item]}px`
        soundBarsElt.appendChild(frequenceELt);
    }
};

const displayInfosMedia = (media) => {
    if(infosMedias.hasOwnProperty(media)) {
        const targetMedia = infosMedias[media];
        
    }
};

const manageTransparency = () => {
    const ratio = ((windowHeight * 5) - window.scrollY) / windowHeight;
    console.log(ratio)
    const vector = 0.01;
    if( ratio >= 0.5) {
        contentPageElt.style.opacity = ratio === 1 ? ratio.toString() : (ratio - vector).toString();
        logoElt.style.opacity = ratio.toString();
    } else {
        contentPageElt.style.opacity = (1 - ratio).toString();
        logoElt.style.opacity = (1 - ratio).toString();
    }
};

const manageLogo = () => {
    if (window.scrollY < windowHeight / 10) {
        if (!logoElt.classList.contains('scaled')) {
            logoElt.classList.add('scaled')
        }
    } else if (logoElt.classList.contains('scaled')) {
        logoElt.classList.remove('scaled')
    }
}

const manageTheVoice = () => {
    const startYPosition = windowHeight/2 - theVoiceElt.clientHeight/2;
    const newYPosition = startYPosition + window.scrollY;
    let startXPosition = -100;
    const startScale = 2;
    const finalScale = 1;

    // When scroll is half of the windowHeight or more
    if (window.scrollY > windowHeight / 2) {
        if (!theVoiceElt.classList.contains('shown')) {
            theVoiceElt.classList.add('shown');
        }
        if (!theVoiceParagraphElt.classList.contains('shown')) {
            theVoiceParagraphElt.textContent = `C'est ...`;
            theVoiceParagraphElt.classList.add('shown');

        }

        if (window.scrollY >= 12321) {

        }
    // On the top of the page
    } else {
        if (theVoiceElt.classList.contains('shown')) {
            theVoiceElt.classList.remove('shown');
        }
        if (theVoiceParagraphElt.classList.contains('shown')) {
            theVoiceParagraphElt.classList.remove('shown');
            theVoiceParagraphElt.textContent = ``;
        }

    }
    theVoiceElt.style.transform = `translateY(${newYPosition}px) translateX(${startXPosition}px) scale(1)`;
}

const init = () => {
    const iframeElt = createIframe();
    videoContainerElt.appendChild(iframeElt);
    createFrequencyElts();

    window.addEventListener('scroll', e => {
        manageTransparency();
        manageLogo();
        manageTheVoice();
    });

    window.onresize = () => {
        const iframeElt = document.getElementById('youtube-iframe');
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        iframeElt.setAttribute('width', windowWidth);
        iframeElt.setAttribute('height', windowHeight);
    }
};



window.onload =  init();
