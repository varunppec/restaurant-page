const removeContent = function() {
    const content = document.querySelector('#content');
    const container = document.querySelector('#container');
    content.removeChild(container);
}

export {removeContent};