
let resetButton = document.querySelector('.clearbutton');
let title = document.querySelector('header > p');
let container = document.querySelector('#container');  
let slider = document.getElementById('slider');
let valueSpan = document.getElementById('value');
let grid = slider.value;
let buttons = document.querySelectorAll('.buttons')


let color = "black";

function createGrid(){
    container.innerHTML = ''
    for (let i = 0; i < (grid*grid); i++) {
    let box = document.createElement('div');
    let sizeValues = Number(1/grid).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:5}); 
    box.setAttribute('id', 'box');
    box.style.setProperty('--value', sizeValues);
    container.appendChild(box); 
};
let boxes = container.querySelectorAll('div');
boxes.forEach(box => box.addEventListener('mouseover', brushColor));
}

function brushColor(){
    switch (color){
        case 'rainbow':
            this.style.backgroundColor = randomColor();
            break;
        case 'shader':
            this.style.backgroundColor = "gray";
            break;
        case 'eraser':
            this.style.backgroundColor = "white";
            break;
        default:
            this.style.backgroundColor = "black";
            break;


    }
}

function changeColor(event) {
    switch (event.target.dataset.color) { 
        case 'rainbow':
            color = 'rainbow';
            break;  
        case 'shader':
            color = 'shader';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    } 
}

let update = () => {
    valueSpan.innerHTML = slider.value;
    grid = valueSpan.innerHTML;
    createGrid();
}
slider.addEventListener('input', update);


resetButton.addEventListener('click', () => {
    container.innerHTML = ''
    createGrid();
    title.style.color = 'white';
    grid = 16;
});

function randomColor() {
    let r = Math.round( Math.random() * 255);
    let g = Math.round( Math.random() * 255);
    let b = Math.round( Math.random() * 255);
    let colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;}
    

window.onload = ()=> {
    createGrid();
}
buttons.forEach(button => button.addEventListener('click', changeColor));
