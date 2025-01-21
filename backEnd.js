const buttonWidth = 250;
const buttonHeight = 100;


const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const no = document.getElementById("noButton");
    const yes = document.getElementById("yesButton");

    no.addEventListener('click', () => {
        no.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        no.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
    no.addEventListener('mouseover', () => {
        no.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        no.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});

