let numberOfDivs = 16;
const grid = document.getElementById('containerGrid');
const buttonGrid = document.getElementById('buttonGrid');



buttonGrid.addEventListener('click', gridInput);

function gridInput(){
    numberOfDivs = prompt("Enter Grid Dimensions", "16");
    if(numberOfDivs > 100){
        numberOfDivs = prompt("Too big, keep it under 100", "16");
    }
    if(numberOfDivs < 0){
        numberOfDivs = prompt("Too small, keep it under 0", "16");
    }
    createGrid(numberOfDivs);
}


function createGrid(numberOfDivs){
    for(divColumns = 0; divColumns < numberOfDivs; divColumns++){
        for(divRows = 0; divRows < numberOfDivs; divRows++){
            let square = document.createElement('div');
            square.classNamed = 'square';
            grid.appendChild(square);
        }
    }
}
window.onload = () => {
    createGrid(numberOfDivs);
}