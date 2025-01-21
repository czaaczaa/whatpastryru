const buttonHeight = 200;
const buttonWidth = 200;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight =window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('nB');

    button.addEventListener('click', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth+1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight+1)) + 'px';
    });
    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth+1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight+1)) + 'px';
    })
})