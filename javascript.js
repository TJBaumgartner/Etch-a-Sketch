let numberOfDivs = 16;
const grid = document.getElementByID('containerGrid');
const buttonGrid = document.getElementById('buttonGrid');



buttonGrid.addEventListener('click', () =>{
    let numberOfDivs = prompt("Enter Grid Dimensions", "16");
    if(numberOfDivs > 100){
        let numberOfDivs = prompt("Too big, keep it under 100", "16");
    }
    if(numberOfDivs < 0){
        let numberOfDivs = prompt("Too small, keep it under 0", "16");
    }
});


function createGrid(numberOfDivs){
    for(divColumns = 0; divColumns < numberOfDivs; divColumns++){
        for(divRows = 0; divRows < numberOfDivs; divRows++){
            let square = document.createElement('div');
            square.classNamed = 'square';
            grid.appendChild(square);
        }
    }
}