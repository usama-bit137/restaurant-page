import Icon from './chai.jpg';

export default class MenuItem {
    
    constructor(item, price) {
        this.item = item; 
        this.price = price;
    }

    constructString(item, price) {
        console.log(`${this.item} is ${this.price}`);
    }
}

export function homepage() {
    console.log('you just pressed home...');
    
    const page = document.querySelector('.page');
    page.innerHTML = "";

    const title = document.createElement('div');
    title.textContent = 'Home';
    title.classList.add('title');
    title.classList.add('slide');
    
    const infoContainer = document.createElement('div');
    infoContainer.textContent = 'Welcome to ChaiShai, aiwjbfvibsd naos ifhvpoiqhiohq woh reh giuhriugh vu hgoih epough vopiaehsov nkjdbv oirhpihdvoiajslkm oisdhoi jergfh [ioe c lvkn oisgh voi[a sdgoh eoihg voislvkn gohg[oih oihg oi gh oidhg oih doighoshg oeh ogih eapiough voiuehoyfg euydh kjbjkv poih guipvhe odghv oiehf ovhfghohg[oieh gopih oh ogh oeauih ';
    infoContainer.classList.add('info');
    infoContainer.style.cssText = "display: flex;";
    
    page.appendChild(title);
    page.appendChild(infoContainer);
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('chai-image');
    infoContainer.appendChild(myIcon);
}

export function menu() {
    const page = document.querySelector('.page');
    page.innerHTML = "";
    console.log('you just pressed menu...');

    const title = document.createElement('div');
    title.textContent = 'Menu';
    title.classList.add('title');
    title.classList.add('slide');

    page.appendChild(title);

}

export function contact() {
    const page = document.querySelector('.page');
    page.innerHTML = "";
    
    const title = document.createElement('div');
    title.textContent = 'Contact';
    title.classList.add('title');
    title.classList.add('slide');
    page.appendChild(title);

    const infoContainer = document.createElement('div');
    const invitation = document.createElement('div');
    const addressContainer = document.createElement('div');
    const phoneContainer = document.createElement('div');
    const emailContainer = document.createElement('div');
    
    invitation.textContent = "If you like what you see here, pop down for a cuppa!"
    addressContainer.textContent = " Address: 32 Restaurant Road, Soho, London, W1 2GL";
    phoneContainer.textContent = "Phone: 020 356 785";
    emailContainer.textContent = "Email: chaishai@tea.co.uk";
    
    infoContainer.classList.add('info-container');
    invitation.classList.add('info');
    invitation.classList.add('invite');
    invitation.classList.add('slide');
    addressContainer.classList.add('info');
    addressContainer.classList.add('slide');
    phoneContainer.classList.add('info');
    phoneContainer.classList.add('slide');
    emailContainer.classList.add('info');
    emailContainer.classList.add('slide');
    
    infoContainer.appendChild(invitation);
    infoContainer.appendChild(addressContainer);
    infoContainer.appendChild(phoneContainer);
    infoContainer.appendChild(emailContainer);
    page.appendChild(infoContainer); 


    console.log('you just pressed contact...');
}

homepage(); 