// change images on hover

let elementNames = ['rock', 'paper', 'scissors'];

for (let name of elementNames) {
    let element = document.getElementById(name);
    if (element === null || element === undefined)
        continue;

    element.addEventListener('mouseenter', () => {
        let img = element.querySelector('img');
        if (img !== undefined)
            img.src = 'images/' + name + '-hover.png';
            new Audio('sounds/select-menu.mp3').play();
    });

    element.addEventListener('mouseleave', () => {
        let img = element.querySelector('img');
        if (img !== undefined)
            img.src = 'images/' + name + '.png';
    });

    element.addEventListener('click', () => {
        new Audio('sounds/click.mp3').play();
    });
}