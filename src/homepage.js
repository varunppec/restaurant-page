const homePage = function () {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';
    const homepage = document.createElement('div');
    homepage.id = 'homepage'; 
    const intro = document.createElement('div');
    intro.id = 'intro';
    intro.innerText = "At Dhamaka, you are guranteed to experience the explosion of flavour!";
    const image = document.createElement('img');
    image.src = '../images/face.jpg';
    image.id = 'face';
    const working = document.createElement('div');
    working.innerText = 'Working since aliens invaded this planet. Visit us please!';
    working.id = 'working';
    homepage.append(intro, image, working);
    container.append(homepage);
    content.append(container);
}

export { homePage };