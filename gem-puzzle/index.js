const body = document.body;
const div = document.createElement('div');
div.className = 'wrapper';
const wrapper = document.getElementsByClassName('wrapper');

document.getElementsByTagName('body')[0].appendChild(div);
const header = document.createElement('header');
const innerDiv = document.createElement('div');
header.className = 'header';
div.appendChild(header);

const nav = document.createElement('nav');
nav.className = 'nav';
header.appendChild(nav);

const menuArr = ['shuffle and start', 'stop', 'save', 'results'];
const ul = document.createElement('ul');

ul.setAttribute('class', 'menu');

for(i=0; i<=menuArr.length - 1; i++) {
    const li = document.createElement('li');
    const menuLink = document.createElement('a');

    li.setAttribute('class', 'menu-item');
    menuLink.setAttribute('class', 'menu-button');
        
    menuLink.innerHTML = menuArr[i];
    
    menuLink.setAttribute('id', ((menuLink.innerHTML).split(' '))[0]);

    if(menuLink.innerHTML === 'stop') {
        menuLink.className += menuLink.className ? ' stop' : 'stop';
    }
    li.appendChild(menuLink);
    ul.appendChild(li);
}

nav.appendChild(ul);

const main = document.createElement('main');
main.className = 'main';
header.after(main);
const staticInfo = document.createElement('div');
staticInfo.setAttribute('class', 'static-info');
const shuffle = document.querySelector('#shuffle');
const stop = document.querySelector('#stop');
const save = document.querySelector('#save');
const results = document.querySelector('#results');
let moves = 0;
let minutes = 00;
let seconds = 00;

staticInfo.innerHTML = `
                        <h5 class="static-info-text static-info__moves">Moves: <i class="moves">${moves}</i></h5>
                        <h5 class="static-info-text static-info__time">Time: <i class="minute">00</i> : <i class="times">00</i></h5>
                    `

main.appendChild(staticInfo);   


let times = document.querySelector('.times');
let minutesInner = document.querySelector('.minute');
let interVal;

const showMoves = () => {

}
shuffle.addEventListener('click', function() {
    clearInterval(interVal);
    interVal = setInterval(startTimer, 1000);
})

stop.addEventListener('click', function() {
    clearInterval(interVal);
});
function startTimer () {
    stop.style.display = "inline-block";
    seconds++;
    
    if(seconds <= 9){
      times.innerHTML = "0" + seconds;
    }
    
    if (seconds > 9){
      times.innerHTML = seconds;
    }
  
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      minutesInner.innerHTML = "0" + minutes;
      seconds = 0;
      times.innerHTML = "0" + 0;
    }
    if (minutes > 9){
      minutesInner.innerHTML = minutes;
    }
  }

const table = document.createElement('div');
table.setAttribute('class', 'table');

const sizesArr = [3, 4, 5, 6, 7, 8];
let userSelect = sizesArr[1];
let innerNum = (userSelect * userSelect) - 1;
const range = [...Array(innerNum - 1 + 1).keys()].map(x => x + 1);
const numsArr = range.concat('');

for (i=0; i<=range.length; i++) {
    const tableItems = document.createElement('div');
    tableItems.setAttribute('class', 'table-items');
    tableItems.innerHTML = numsArr[i];    
    table.appendChild(tableItems);
}

const shuffleItems = () => {
    let frag = this.document.createDocumentFragment();
    while (table.children.length) {
        frag.appendChild(table.children[Math.floor(Math.random() * table.children.length)]);
    }
    table.appendChild(frag);
    staticInfo.after(table);
}
shuffleItems()
shuffle.addEventListener('click', shuffleItems);

const staticInfoSizes = document.createElement('div');
staticInfoSizes.className = 'static-info';
staticInfoSizes.innerHTML = `<h5 class="static-info-text static-info__current-size">Frame size: <i class="current-size">${sizesArr[1]}x${sizesArr[1]}</i></h5>`
table.after(staticInfoSizes);

const staticInfoAllSizes = document.createElement('div');
staticInfoAllSizes.className = 'static-info';
const ulSizes = document.createElement('ul');
ulSizes.className = 'static-info-text static-info__sizes';
ulSizes.innerHTML = 'Other sizes: ';

staticInfoAllSizes.appendChild(ulSizes);
staticInfoSizes.after(staticInfoAllSizes);

for(i=0; i<=sizesArr.length - 1; i++) {
    const li = document.createElement('li');
    const size = document.createElement('i');

    li.setAttribute('class', 'sizes');
    size.setAttribute('class', 'size');
        
    size.innerHTML = `${sizesArr[i]}x${sizesArr[i]}`;
    
    li.appendChild(size);
    ulSizes.appendChild(li);
}
