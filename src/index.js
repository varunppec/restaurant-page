console.log("Working");
import { initialpageLoad } from "./initialpageload";
import { removeContent } from "./removecontent";
import { menuPage } from "./menupage";
import { homePage } from "./homepage";
import { contactPage } from "./contactpage"
initialpageLoad();
const menu = document.querySelector('#menu');
menu.onclick = function () {
    removeContent();
    menuPage();
}

const home = document.querySelector('#home');
home.onclick = function () {
    removeContent();
    homePage();
}

const contact = document.querySelector('#contact');
contact.onclick = function () {
    removeContent();
    contactPage();
}
