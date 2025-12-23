const container = document.getElementById('codeContainer');
const inputs = document.querySelectorAll('.code-inputs input');
const SP = document.getElementById('StoryP');
const code = '4901SY'; //4901SY

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase().replace(/[^a-z0-9]/gi, '');
        e.target.value = value.slice(0, 1);
        
        // Move to next input
        if (e.target.value && index < 5) inputs[index + 1].focus();
        
        //check the full code
        if (index === 5) checkCode();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0){inputs[index - 1].focus();
        }
    });
});

function checkCode(){
    const userCode = Array.from(inputs).map(input => input.value.toLowerCase()).join('');
    if (userCode === code.toLowerCase()) {
        disappearContainer();
        appearStory();
    }
}


// Auto focus the first input
inputs[0].focus();



///////////////////ANIMATIONS///////////////////

import { animate, text, stagger, onScroll, createTimeline} from 'animejs';

const meteor = document.getElementById('m')
const StartS = document.getElementById('StartScreen');
meteor.addEventListener("click", hovered);
function hovered() {
    meteor.style.cursor = "pointer";
    animate(m, {
        translateY: 1000,
        translateX: -400,
        scale: 0.2,
        duration: 800,
        ease: 'inCirc',

        onComplete: () => {
            StartS.style.display = 'none';
            appearContainer();
        }
    });
};


function appearContainer(){
    container.style.display = 'flex';
    animate(container, {
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 2100,
        ease: 'outElastic(1,0.8)'
    });
}

function disappearContainer(){
    animate(container, {
        opacity: 1,
        scale: [1, 0.8],
        translateY: [0, "-100vh"],
        duration: 2500,
        ease: 'outExpo',

        onComplete: () => {
            container.style.display = 'none';
        }
    });
}

function appearStory(){
    SP.style.display = 'flex';
    animate(SP, {
        scale: [0.8, 1],
        translateY: ["100vh", 0],
        duration: 2500,
        ease: 'outExpo'
    });
}