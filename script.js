
let grid = 16;
let resetButton = document.querySelector('.navigation > button');
let title = document.querySelector('.navigation > p');
let container = document.querySelector('#container');  

function createGrid(){
    for (let i = 0; i < (grid*grid); i++) {
    let box = document.createElement('div')
    box.setAttribute('id', 'box')
    box.addEventListener('mouseover', () => box.style.backgroundColor = randomColor())
    container.appendChild(box); };
}

resetButton.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid();
    title.style.color = 'white';
});
function randomColor() {
    let r = Math.round( Math.random() * 255);
    let g = Math.round( Math.random() * 255);
    let b = Math.round( Math.random() * 255);
    let colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}

title.addEventListener('mouseover', () => title.style.color = randomColor());

window.onload = ()=> {
    createGrid();
}