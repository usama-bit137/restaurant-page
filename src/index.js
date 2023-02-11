import MenuItem, {homepage, menu, contact} from './tab';
import './style.css'; 

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', homepage);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);

console.log('webpack worked! Hello');