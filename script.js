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

function getColorPickerValue() {
    const colorpicker = document.querySelector('.color-picker')
    colorpicker.onchange = (e) => {
        colorValue = e.target.value; 
        setRecentColor(colorValue);};
}

function setRecentColor (colorValue){
    const div = document.querySelector(`#rec${index}`)
    div.style.backgroundColor = `${colorValue}`
    switch (index) {
        case 1: recentColor1 = colorValue;
        break;
        case 2: recentColor2 = colorValue;
        break;
        case 3: recentColor3 = colorValue;
        break;
    }
    index++;
    if (index > 3) {
        index = 1;
    }
}

function openEyeDropper() {
    if (!window.EyeDropper) {
        noEyeDropperModal();
        return;
      }
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((result) => {
        colorValue = result.sRGBHex;
        setRecentColor(colorValue);
      });
}


function generateCanvas(gridValue ,containerSize) {
         const container = document.querySelector('.div-container');
        container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`
        container.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`
        gridValue = parseInt(gridValue);
        calculateCellSize(gridValue, containerSize);
        for (let j= 0; j < gridValue * gridValue; j++) {
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'row');
            div2.setAttribute('draggable', 'false');
            container.append(div2);
            divEventListener(div2);
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
        generateCanvas(gridValue ,containerSize);
    }

    function decisionRoom() {
        yesButton.onclick = function() { 
            clearCanvas();
            disableAskModalButtons();
            }
        noButton.onclick = function() {
            disableAskModalButtons();
        }
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
            case "orange": e.target.style.backgroundColor = "var(--clr-6)";
            break;
            case "rainbow": e.target.style.backgroundColor = `var(--clr-${Math.floor(Math.random() * 5) + 2})`;
            break;
            case "white": e.target.style.backgroundColor = "var(--clr-8)";
            break;
            case "color": e.target.style.backgroundColor = `${colorValue}`;
            break;
            case "rec1": e.target.style.backgroundColor = `${recentColor1}`;
            break;
            case "rec2": e.target.style.backgroundColor = `${recentColor2}`;
            break;
            case "rec3": e.target.style.backgroundColor = `${recentColor3}`;
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
            case "orange": activeButton = "orange";
            break;
            case "rainbow": activeButton = "rainbow";
            break;
            case "white": activeButton = "white";
            break;
            case "color": activeButton = "color";
            break;
            case "rec1": activeButton = "rec1";
            break;
            case "rec2": activeButton = "rec2";
            break;
            case "rec3": activeButton = "rec3";
            break;
        }
    }
    

function calculateCellSize(gridValue, containerSize) {
    rowHeight = (containerSize / gridValue);
    rowWidth = rowHeight;
}

function getContainerSize (){
    let divSize = parseFloat(document.querySelector('.div-container').offsetWidth);
    divSize = divSize;
    console.log(divSize);
    return divSize;
}

function getRangeValue(x) {
        
        document.querySelector('.slider').oninput = function () {
        gridValue = parseInt(this.value);
        y = this.value;
        this.style.background = `linear-gradient(to right, #ff7ee5 ${y * x}%, white 75%`;
        const textValue = document.querySelector('.count');
        textValue.textContent = y + " x " + y;
    }
}
//reduce available canvas size on mobile devices
function setRangeSlider() {
    const slider = document.querySelector('.slider');
    slider.setAttribute('max', 24);
    slider.setAttribute('value', 8);
    gridValue = 8;
}

function adjustSliderBasedonDevice() {
if (window.matchMedia("(max-width: 800px)").matches)  {
    setRangeSlider();
    getRangeValue(4);
    const slider = document.querySelector('.slider');
    const count = document.querySelector('.count');
    slider.setAttribute('value', '8');
    count.textContent = "8 x 8";
}
    else if (window.matchMedia("(min-width: 801px)").matches){
    getRangeValue(1.56);
}
}

function unsupportedBrowserNotice(){
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        createModal(false);
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        createModal(false);
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        createModal(false);
    } else {
        createModal(true);
    }
}

function noEyeDropperModal() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const text = document.querySelector('.modal-text');
    const text1 = document.querySelector('.modal-text1');
    text1.style.display = "none";
    const modContent = document.querySelector('.browser-list');
    text.textContent = "NOTE: Eyedropper is not available on mobile browsers. Use desktop/laptop for better experience!"
    modalButtons(modal, span, modContent);
}

function createModal(isUnsupported) {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const text = document.querySelector('.modal-text');
    const modContent = document.querySelector('.browser-list');
    if (isUnsupported == true) {
        const text1 = document.createElement('p');
        const list = document.createElement('ul');
        const item1 = document.createElement('li');
        const item2 = document.createElement('li');
        const item3 = document.createElement('li');
        const item4 = document.createElement('li');
        text.textContent = "We noticed that you are using an unsupported browser. You may not be able to save your canvas.";
        text1.textContent = "List of supported browsers:";
        item1.textContent = "Google Chrome";
        item2.textContent = "Microsoft Edge";
        item3.textContent = "Mozilla Firefox";
        item4.textContent = "Opera Browser";
        list.style.fontSize = "0.8rem";
        list.style.listStyleType = "none";
        list.style.paddingLeft = "0px";
        text1.style.fontSize = "0.8rem";
        modContent.append(text1,list);
        list.append(item1, item2, item3, item4);
    }
    else {
        if ((window.matchMedia("(min-width: 801px)").matches)) {
            text.textContent = "Hi! You are using PixelPaint on desktop. Enable browser fullscreen for better experience. Thanks!";
        }
    }
    modalButtons(modal, span, modContent);
}

function askModal(){
    const text1 = document.querySelector('.modal-text1');
    text1.style.display = "none";
    const container = document.querySelector('.butContainer');
    yesButton.setAttribute('class', 'yesButton')
    noButton.setAttribute('class', 'noButton')
    yesButton.textContent = "Yes";
    noButton.textContent = "No";
    container.append(yesButton,noButton);
    const modal = document.getElementById("myModal");
    const text = document.querySelector('.modal-text');
    text.textContent = "Are you sure? Your progress will be deleted.";
    modal.style.display = "block";
    yesButton.style.display = "block";
    noButton.style.display = "block";
    decisionRoom();
}

function modalButtons(modal, span, modContent) {
  
        modal.style.display = "block";
        span.onclick = function() {
            modContent.style.display = "none";
            modal.style.display = "none";
        }
    window.onclick = function(event) {
    if (event.target == modal) {
        modContent.style.display = "none";
    modal.style.display = "none";
    }
    }
}

function disableAskModalButtons () {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    yesButton.style.display = "none";
    noButton.style.display = "none";
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
let gridValue = 16;
let colHeight = 0.0;
let colWidth = 0.0;
let rowHeight = 0.0;
let rowWidth = 0.0;
let containerSize = getContainerSize();
let activeButton;
let mouseDown = false;
let modalCreated = true;
let colorValue = getColorPickerValue();
let index = 1;
let recentColor1;
let recentColor2;
let recentColor3;


generateColors();
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
adjustSliderBasedonDevice();
unsupportedBrowserNotice();

const genButton = document.querySelector('.gen-button');
const clearButton = document.querySelector('.clear-button');
const blackButton = document.querySelector('#colordiv1');
const redButton = document.querySelector('#colordiv2');
const yellowButton = document.querySelector('#colordiv3');
const blueButton = document.querySelector('#colordiv4');
const greenButton = document.querySelector('#colordiv5');
const orangeButton = document.querySelector('#colordiv6');
const rainbowButton = document.querySelector('#colordiv7');
const whiteButton = document.querySelector('#colordiv8');
const customColor = document.querySelector('.color-picker');
const eyedropper = document.querySelector('#eyedropper');
const recColor1 = document.querySelector('#rec1');
const recColor2 = document.querySelector('#rec2');
const recColor3 = document.querySelector('#rec3');
const yesButton =  document.createElement('button');
const noButton =  document.createElement('button');

genButton.addEventListener('click', () => askModal());
clearButton.addEventListener('click', () => askModal());
blackButton.addEventListener('click',() =>  setActiveButton("black"));
redButton.addEventListener('click', () =>  setActiveButton("red"));
yellowButton.addEventListener('click', () =>  setActiveButton("yellow"));
blueButton.addEventListener('click', () =>  setActiveButton("blue"));
greenButton.addEventListener('click', () =>  setActiveButton("green"));
orangeButton.addEventListener('click', () =>  setActiveButton("orange"));
rainbowButton.addEventListener('click', () =>  setActiveButton("rainbow"));
whiteButton.addEventListener('click', () =>  setActiveButton("white"));
customColor.addEventListener('change', () =>  setActiveButton("color"));
recColor1.addEventListener('click', () =>  setActiveButton("rec1"));
recColor2.addEventListener('click', () =>  setActiveButton("rec2"));
recColor3.addEventListener('click', () =>  setActiveButton("rec3"));
eyedropper.addEventListener('click', () => openEyeDropper());

generateCanvas(gridValue, containerSize);
window.onbeforeunload = function () {
    return 'Do you really want to perform the action?';
   }



