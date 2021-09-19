import { homePage } from "./homepage";
const initialpageLoad = function () {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.id = 'header';
    const restaurant_name = document.createElement('div');
    restaurant_name.innerText = 'Dhamaka';
    restaurant_name.id = 'restaurant-name';
    const nav_bar = document.createElement('nav');
    const home = document.createElement('button');
    home.innerText = 'Home';
    home.id = 'home';
    const menu = document.createElement('button');
    menu.innerText = 'Menu';
    menu.id = 'menu'
    const contact = document.createElement('button');
    contact.innerText = 'Contact';
    contact.id = 'contact';
    
    nav_bar.append(home, menu, contact);
    header.append(restaurant_name, nav_bar);
    content.append(header);
    homePage();
}

export { initialpageLoad };