function generateColors () {
    const container = document.querySelector('.color-panel-1');
    const container1 = document.querySelector('.color-panel-2');

    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'colordiv');
        div.setAttribute('id', `colordiv${i}`);
        div.setAttribute('style', `background-color: var(--clr-${i})`);
        container.append(div);
    }
    for (let i = 5; i <= 8; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'colordiv');
        div.setAttribute('id', `colordiv${i}`);
        if (i == 7) {
            div.setAttribute('style', `background-image:  url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fdotted-grid-paper-background-texture-seamless-repeat-pattern-picture-id1320330053%3Fb%3D1%26k%3D20%26m%3D1320330053%26s%3D170667a%26w%3D0%26h%3DXisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc%3D&imgrefurl=https%3A%2F%2Funsplash.com%2Fbackgrounds%2Fcolors%2Fwhite&tbnid=ZOoq1TDI85qMbM&vet=12ahUKEwje7brMr4b3AhVLAaYKHdKeBG8QMygAegUIARDbAQ..i&docid=kJCHVs23uYti-M&w=515&h=336&q=white%20image&ved=2ahUKEwje7brMr4b3AhVLAaYKHdKeBG8QMygAegUIARDbAQ), 
            linear-gradient(to right, #FD6060, #6384fA, #FFF970, #8BF27A, #E799EE), 
            linear-gradient(to right, #FD6060, #6384fA, #FFF970, #8BF27A, #E799EE);
            background-position: 0 0,  0 100px,0 130px;
            background-size:  640px 100px,100% 30px, 100% 30px;}`);
        }
        else {
            div.setAttribute('style', `background-color: var(--clr-${i})`);
        }
        container1.append(div);
    }
}

function generateCanvas(gridValue ,containerSize) {
        gridValue = parseInt(gridValue);
        calculateCellSize(gridValue, containerSize);
    for (let i = 0; i < gridValue; i++){
        const container = document.querySelector('.div-container');
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'column');
        div1.setAttribute('draggable', 'false');
        div1.setAttribute('style', `height: ${colHeight}px; width: ${colWidth}px`);
        container.append(div1);
        for (let j= 0; j < gridValue; j++) {
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'row');
            div2.setAttribute('draggable', 'false');
            div2.setAttribute('style', `height: ${rowHeight}px; width: ${rowWidth}px`);
            div1.append(div2);
            divEventListener(div2);
        }
    }
}

function calculateCellSize(gridValue, containerSize) {
    colHeight = containerSize / gridValue;
    colWidth = containerSize;
    rowHeight = colHeight;
    rowWidth = containerSize / gridValue;
}

function getContainerSize (){
    let divSize = document.querySelector('.div-container').offsetWidth;
    divSize = divSize;
    console.log(divSize);
    return divSize;
}

function getRangeValue(x) {
        
        document.querySelector('.slider').oninput = function () {
        gridValue = parseInt(this.value);
        y = this.value;
        this.style.background = `linear-gradient(to right, #ff7ee5 ${y * x}%, white 50%`;
        const textValue = document.querySelector('.count');
        textValue.textContent = y + " x " + y;
    }
}

function clearCanvas() {
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.column');
    rows.forEach((row) => {
        row.remove();
    })
    cols.forEach((col) => {
        col.remove();
    })
}

function setWhite() {
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.column');
    rows.forEach((row) => {
        row.style.backgroundColor = "white";
    })
    cols.forEach((col) => {
        col.style.backgroundColor = "white";
    })
}

function changeColor(e) {
    //this will only take effect on mousehold    
    if (e.type === 'mouseover' && !mouseDown){
        return;
    } 
     colorSwitch(e);
    }
    
    function changeColor1(e) {
       //for touch screen devices
       colorSwitch(e);
}

function colorSwitch(e) {
    switch(activeButton) {
        case "black": e.target.style.backgroundColor = "var(--clr-1)";
        break;
        case "red": e.target.style.backgroundColor = "var(--clr-2)";
        break;
        case "blue": e.target.style.backgroundColor = "var(--clr-4)";
        break;
        case "green": e.target.style.backgroundColor = "var(--clr-5)";
        break;
        case "yellow": e.target.style.backgroundColor = "var(--clr-3)";
        break;
        case "pink": e.target.style.backgroundColor = "var(--clr-6)";
        break;
        case "rainbow": e.target.style.backgroundColor = `var(--clr-${Math.floor(Math.random() * 5) + 2})`;
        break;
        case "white": e.target.style.backgroundColor = "var(--clr-8)";
        break;
    }
}

function setActiveButton(buttonName) {
    switch(buttonName) {
        case "black": activeButton = "black";
        break;
        case "red": activeButton = "red";
        break;
        case "blue": activeButton = "blue";
        break;
        case "green": activeButton = "green";
        break;
        case "yellow": activeButton = "yellow";
        break;
        case "pink": activeButton = "pink";
        break;
        case "rainbow": activeButton = "rainbow";
        break;
        case "white": activeButton = "white";
        break;
    }
}

//reduce available canvas size on mobile devices
function setRangeSlider() {
        const slider = document.querySelector('.slider');
        slider.setAttribute('max', 20);
}

function adjustSliderBasedonDevice() {
    if (window.matchMedia("(max-width: 800px)").matches)  {
        setRangeSlider();
        getRangeValue(5);
    }
        else if (window.matchMedia("(min-width: 801px)").matches){
        getRangeValue(2);
    }
}

function createModal() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    if ((window.matchMedia("(min-width: 801px)").matches)) {
        const text = document.querySelector('.modal-text');
        text.textContent = "Hi! You are using PixelPaint on desktop! Enable browser fullscreen for better experience. Thanks!";
        modalButtons(modal, span);
    }
    else {
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        modalButtons(modal, span);
    }
    
}

function modalButtons(modal, span) {
    modal.style.display = "block";
    generateCanvas(gridValue, containerSize);
        span.onclick = function() {
            modal.style.display = "none";
          }
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
}

function divEventListener(e) {
        e.addEventListener('touchstart', changeColor1);
        e.addEventListener('mousedown', changeColor);
        e.addEventListener('mouseover', changeColor); 
        e.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
}



let key;
let gridValue = 10;
let colHeight = 0;
let colWidth = 0;
let rowHeight = 0;
let rowWidth = 0;
let containerSize = getContainerSize();
let activeButton;
let mouseDown = false;
let modalCreated = true;

generateColors();
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
adjustSliderBasedonDevice();
createModal();

const genButton = document.querySelector('.gen-button');
const clearButton = document.querySelector('.clear-button');
const blackButton = document.querySelector('#colordiv1');
const redButton = document.querySelector('#colordiv2');
const yellowButton = document.querySelector('#colordiv3');
const blueButton = document.querySelector('#colordiv4');
const greenButton = document.querySelector('#colordiv5');
const pinkButton = document.querySelector('#colordiv6');
const rainbowButton = document.querySelector('#colordiv7');
const whiteButton = document.querySelector('#colordiv8');

genButton.addEventListener('click', () => {clearCanvas(); generateCanvas(gridValue, containerSize);});
clearButton.addEventListener('click', () => setWhite());
blackButton.addEventListener('click',() =>  setActiveButton("black"));
redButton.addEventListener('click', () =>  setActiveButton("red"));
yellowButton.addEventListener('click', () =>  setActiveButton("yellow"));
blueButton.addEventListener('click', () =>  setActiveButton("blue"));
greenButton.addEventListener('click', () =>  setActiveButton("green"));
pinkButton.addEventListener('click', () =>  setActiveButton("pink"));
rainbowButton.addEventListener('click', () =>  setActiveButton("rainbow"));
whiteButton.addEventListener('click', () =>  setActiveButton("white"));






