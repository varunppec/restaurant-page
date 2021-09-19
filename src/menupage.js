

const menuPage = function () {
    const img_array = ['../images/food0.jpeg', '../images/food1.jpeg','../images/food2.jpeg','../images/food3.jpeg']
    const name_array = ['Chicken Tofu', 'Paneer Butter Masala', 'Chikken Tikka', 'Gulab Jamun'];
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const menupage = document.createElement('div');
    menupage.id = 'menupage';
    container.id = 'container';
    
    
    for (let img of img_array) {
        const item = document.createElement('div');
        item.id = 'item';
        const image = document.createElement('img');
        image.src = img;
        const image_name = document.createElement('div');
        image_name.innerText = name_array[img_array.indexOf(img)];
        item.append(image, image_name);
        menupage.append(item);
    }
    container.append(menupage);
    content.append(container);
    
}
export {menuPage};