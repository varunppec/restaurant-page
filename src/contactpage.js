const contactPage = function () {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const contactpage = document.createElement('div');
    contactpage.id = 'contactpage';
    const number = document.createElement('div');
    container.id = 'container';
    const phone = document.createElement('img');
    phone.src = '../images/phone.png';
    phone.id = 'phone';
    const no = document.createElement('h4');
    no.innerText = '123 456 789';
    number.append(phone, no);
    number.classList.add('phone');

    const location_div = document.createElement('div');
    location_div.classList.add('location');
    const location_symbol = document.createElement('img');
    location_symbol.src = '../images/location.png';
    const location = document.createElement('h4');
    location.innerText = 'Area 51, Secret Location, USA';
    const location_image = document.createElement('img');
    location_image.src = '../images/location_img.png';
    location_div.append(location_symbol, location);
    contactpage.append(number, location_div, location_image);
    container.append(contactpage);
    content.append(container);
}

export { contactPage };