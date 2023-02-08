import './style.css'; 
import Icon from './chai.jpg';

console.log('webpack worked! Hello');

function component() {
    
    const home = document.querySelector('.home');
    const tag = document.querySelector('.tag');


    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('chai-image');
    home.insertBefore(myIcon, tag)   
}

document.body.appendChild(component());