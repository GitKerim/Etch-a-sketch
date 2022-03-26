
let resetButton = document.querySelector('.navigation > button');
let title = document.querySelector('.navigation > p');
let container = document.querySelector('#container');  
let slider = document.getElementById('slider');
let valueSpan = document.getElementById('value');
let grid = slider.value;


function createGrid(){
    container.innerHTML = ''
    for (let i = 0; i < (grid*grid); i++) {
    let box = document.createElement('div');
    let sizeValues = Number(1/grid).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:5}); 
    box.setAttribute('id', 'box');
    box.style.setProperty('--value', sizeValues);
    box.addEventListener('click', () => box.style.backgroundColor = randomColor())
    container.appendChild(box); 
};
}

let update = () => {
    valueSpan.innerHTML = slider.value;
    grid = valueSpan.innerHTML;
    createGrid();
}
slider.addEventListener('input', update);
update();


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