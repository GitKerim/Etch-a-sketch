
let grid = 16;

for (let i = 0; i < (grid*grid); i++) {
    let container = document.querySelector('#container');   
    let box = document.createElement('div')
    box.addEventListener('mouseover', () => box.style.backgroundColor = randomColor())
    box.classList.add('box');
    container.appendChild(box); 

}
function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}
let title = document.querySelector('.navigation > p');
title.addEventListener('mouseover', () => title.style.color = randomColor());