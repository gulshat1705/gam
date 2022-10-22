const body = document.body;
const div = document.createElement('div');
div.className = 'wrapper';
const wrapper = document.getElementsByClassName('wrapper');

document.getElementsByTagName('body')[0].appendChild(div);
//header
const header = document.createElement('header');
let innerDiv = document.createElement('div');
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
staticInfo.innerHTML = `
                        <h5 class="static-info-text static-info__moves">Moves: <i class="moves">1</i></h5>
                        <h5 class="static-info-text static-info__time">Time: <i class="times">10:55</i></h5>
                    `
main.appendChild(staticInfo);                    

const table = document.createElement('div');
table.setAttribute('class', 'table');

const sizesArr = [3, 4, 5, 6, 7, 8];
let userSelect = sizesArr[1];
let innerNum = (userSelect * userSelect) - 1;
console.log(innerNum);

const range = [...Array(innerNum - 1 + 1).keys()].map(x => x + 1);
console.log(range.concat(''));
const numsArr = range.concat('');

const itemsShuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
    console.log('shuffle');
}

const shuffle = document.querySelector('#shuffle');
const stop = document.querySelector('#stop');
const save = document.querySelector('#save');
const results = document.querySelector('#results');


shuffle.addEventListener('click', itemsShuffle(numsArr));

for (i=0; i<=range.length; i++) {
    const tableItems = document.createElement('div');
    tableItems.setAttribute('class', 'table-items');
    tableItems.innerHTML = numsArr[i];
    
    table.appendChild(tableItems);
}

main.appendChild(table)
// <div class="static-info">
// <h5 class="static-info-text static-info__current-size">Frame size: <i class="current-size">4x4</i></h5>
// </div>
// <div class="static-info ">
// <ul class="static-info-text static-info__sizes">
//     Other sizes: 
//     <li class="sizes"><i class="sizes-three">3x3</i></li> 
//     <li class="sizes"><i class="sizes-three"></i></li> 
//     <li class="sizes"><i class="sizes-three">3x3</i></li> 
//     <li class="sizes"><i class="sizes-three">3x3</i></li> 
//     <li class="sizes"><i class="sizes-three">3x3</i></li> 
//     <li class="sizes"><i class="sizes-three">3x3</i></li>                     
// </ul>
// </div>
// `


