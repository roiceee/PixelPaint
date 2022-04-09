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

function generateCanvas(x ,num) {
        calculateCellSize(x, num);
    for (let i = 0; i < x; i++){
        const container = document.querySelector('.div-container');
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'column');
        div1.setAttribute('style', `height: ${colHeight}px; width: ${colWidth}px`);
        container.append(div1);
        for (let j= 0; j < x; j++) {
            const div2 = document.createElement('div');
            div2.setAttribute('class', 'row');
            div2.setAttribute('style', `height: ${rowHeight}px; width: ${rowWidth}px`);
            div1.append(div2);
        }
    }
}
function getContainerSize (){
    let divSize = document.querySelector('.div-container').offsetHeight;
    divSize = divSize - 4;
    console.log(divSize);
    return divSize;
}

function calculateCellSize(x, num) {
    colHeight = num / x;
    colWidth = num;
    rowHeight = colHeight;
    rowWidth = num / x;
}

let gridValue = 100;
let colHeight = 0;
let colWidth = 0;
let rowHeight = 0;
let rowWidth = 0;
let containerSize = getContainerSize();
generateColors();
generateCanvas(gridValue, containerSize);
