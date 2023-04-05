let numberOfDivs = 16;
const grid = document.getElementById('containerGrid');
const buttonGrid = document.getElementById('buttonGrid');
let mouseDown = false;
const rainbowButton = document.getElementById('rainbowColor');
const blackButton = document.getElementById('defaultColor');
const hueButton = document.getElementById('hueColor');
let rainbow = false;
let black = true;
let hue = false
let hueScale = 0;

rainbowButton.addEventListener('click', colorR);
blackButton.addEventListener('click', colorB);
hueButton.addEventListener('click', colorH);


buttonGrid.addEventListener('click', gridInput);

function colorR(){
    rainbow = true;
    black = false;
    hue = false;
}
function colorB(){
    rainbow = false;
    black = true;
    hue = false;
}
function colorH(){
    rainbow = false;
    black = false;
    hue = true;
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
    else if(e.type === 'mouseover' && mouseDown == true && hue == true){
        for(i = 0; i <=9; i++){
            if(hueScale == 9){
                this.style.backgroundColor = "#E2E2E2"; 
                hueScale = 0;
            }
            if(hueScale == 8){
                this.style.backgroundColor = "#C6C6C6";    
                hueScale++;   
                console.log(hueScale);
            }
            if(hueScale == 7){
                this.style.backgroundColor = "#ABABAB";    
                hueScale++;   
            }
            if(hueScale == 6){
                this.style.backgroundColor = "#919191";
                hueScale++;       
            }
            if(hueScale == 5){
                this.style.backgroundColor = "#777777";    
                hueScale++;   
            }
            if(hueScale == 4){
                this.style.backgroundColor = "#5E5E5E";    
                hueScale++;   
            }
            if(hueScale == 3){
                this.style.backgroundColor = "#474747";  
                hueScale++;     
            }
            if(hueScale == 2){
                this.style.backgroundColor = "#303030";   
                hueScale++;    
            }
            if(hueScale == 1){
                this.style.backgroundColor = "#1B1B1B";  
                hueScale++;     
            }
            if(hueScale == 0){
                this.style.backgroundColor = "#000000";
                hueScale++; 
            }
        }  
    }
}
window.onload = () => {
    createGrid(numberOfDivs);
}