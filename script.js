
let resetButton = document.querySelector('#clearbutton');
let title = document.querySelector('header > p');
let container = document.querySelector('#container');  
let slider = document.getElementById('slider');
let valueSpan = document.getElementById('value');
let grid = slider.value;
let blackBrush = document.querySelector('.blackBrush');
let shader = document.querySelector('.shader');
let eraser = document.querySelector('.eraser');
let rainbow = document.querySelector('.rainbow')



function createGrid(){
    container.innerHTML = ''
    for (let i = 0; i < (grid*grid); i++) {
    let box = document.createElement('div');
    let sizeValues = Number(1/grid).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:5}); 
    box.setAttribute('id', 'box');
    box.style.setProperty('--value', sizeValues);
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
        box.style.borderColor = "white";    
    });
    rainbow.addEventListener('click',() => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = randomColor();
            box.style.borderColor = "black";});  
    });
    
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
    grid = 16;
});

function brush(){

    let colorBlack = "rgb(0,0,0)";
    return colorBlack;
    
    
}
function randomColor() {
    let r = Math.round( Math.random() * 255);
    let g = Math.round( Math.random() * 255);
    let b = Math.round( Math.random() * 255);
    let colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;}
    

title.addEventListener('mouseover', () => title.style.color = randomColor());

window.onload = ()=> {
    createGrid();
}