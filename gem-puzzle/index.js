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

const range = [...Array(innerNum - 1 + 1).keys()].map(x => x + 1);
const numsArr = range.concat('');

const shuffle = document.querySelector('#shuffle');
const stop = document.querySelector('#stop');
const save = document.querySelector('#save');
const results = document.querySelector('#results');

for (i=0; i<=range.length; i++) {
    const tableItems = document.createElement('div');
    tableItems.setAttribute('class', 'table-items');
    tableItems.innerHTML = numsArr[i];    
    table.appendChild(tableItems);
}

const shuffleItems = () => {
    console.log('shuffle')
    let frag = this.document.createDocumentFragment();
    while (table.children.length) {
        frag.appendChild(table.children[Math.floor(Math.random() * table.children.length)]);
    }
    table.appendChild(frag);
    main.appendChild(table);
}
shuffleItems()
shuffle.addEventListener('click', shuffleItems);

const staticInfoSizes = document.createElement('div');
staticInfoSizes.className = 'static-info';
staticInfoSizes.innerHTML = `<h5 class="static-info-text static-info__current-size">Frame size: <i class="current-size">4x4</i></h5>`
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
