let numberOfDivs = 16;
const grid = document.getElementById('containerGrid');
const buttonGrid = document.getElementById('buttonGrid');
let mouseDown = false;
const rainbowButton = document.getElementById('rainbowColor');
const blackButton = document.getElementById('defaultColor');
let rainbow = false;
let black = true;

rainbowButton.addEventListener('click', colorR);
blackButton.addEventListener('click', colorB);

buttonGrid.addEventListener('click', gridInput);

function colorR(){
    rainbow = true;
    black = false;
}
function colorB(){
    rainbow = false;
    black = true;
}


function gridInput(){
    numberOfDivs = prompt("Enter Grid Dimensions", "16");
    if(numberOfDivs > 100){
        numberOfDivs = prompt("Too big, keep it under 100", "16");
    }
    if(numberOfDivs < 0){
        numberOfDivs = prompt("Too small, keep it over 0", "16");
    }
    createGrid(numberOfDivs);
}



function createGrid(numberOfDivs){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    grid.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
    for(divColumns = 0; divColumns < numberOfDivs; divColumns++){
        for(divRows = 0; divRows < numberOfDivs; divRows++){
            let square = document.createElement('div');
            square.className = 'square';
            grid.appendChild(square);
            square.addEventListener('mouseover', color); 
            square.addEventListener('mousedown', color);
        }
    }
}

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function color (e) {
    if(e.type === 'mouseover' && mouseDown == false){
        return;  
    } 
    else if(e.type === 'mouseover' && mouseDown == true && black == true){
        this.style.backgroundColor = "#000000";
    }
    else if(e.type === 'mouseover' && mouseDown == true && rainbow == true){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    }    
}
window.onload = () => {
    createGrid(numberOfDivs);
}