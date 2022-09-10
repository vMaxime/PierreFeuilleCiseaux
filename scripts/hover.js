// change images on hover

let elementNames = ['rock', 'paper', 'scissors'];

for (let name of elementNames) {
    let element = document.getElementById(name);
    if (element === null || element === undefined)
        continue;

    let img = element.querySelector('img');
    let label = element.querySelector('label');

    element.addEventListener('mouseenter', () => {
        if (canSelect) {
            img.src = 'images/' + name + '-hover.png';
            label.style.color = 'rgb(170, 170, 170)';
        }
    } );

    element.addEventListener('mouseleave', () => {
        if (canSelect) {
            img.src = 'images/' + name + '.png';
            label.style.color = '#FFF';
        }
    });

    element.addEventListener('click', () => {
        let selected = onSelect(name, () => {
            img.src = 'images/' + name + '.png';
            label.style.color = '#FFF';
        });

        if (selected) {
            new Audio('sounds/click.mp3').play();
        }
    });
}