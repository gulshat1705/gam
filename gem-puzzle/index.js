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

const ul = document.createElement('ul');
ul.className = 'menu';
nav.appendChild(ul);

ul.innerHTML += `
                <li class="menu-item"><a class="menu-button">Shuffle and start</a></li>
                <li class="menu-item"><a class="menu-button stop">Stop</a></li>
                <li class="menu-item"><a class="menu-button">Save</a></li>
                <li class="menu-item"><a class="menu-button">Results</a></li>
                `;

const main = document.createElement('main');
main.className = 'main';

header.appendBefore(main);



// main.innerHTML += `<div class="static-info">
// <h5 class="static-info-text static-info__moves">Moves: <i class="moves">1</i></h5>
// <h5 class="static-info-text static-info__time">Time: <i class="times">10:55</i></h5>
// </div>
// <div class="table table-four">
// <div class="table-items">5</div>
// <div class="table-items empty-box"></div>
// <div class="table-items">5</div>
// <div class="table-items">5</div>
// <div class="table-items">5</div>
// <div class="table-items">5</div>                
// </div>
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


