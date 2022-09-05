// change images on hover

const rockElement = document.getElementById('rock');

rockElement.addEventListener('mouseenter', () => {
    let img = rockElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/rock-hover.png';
});

rockElement.addEventListener('mouseleave', () => {
    let img = rockElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/rock.png';
});

const paperElement = document.getElementById('paper');

paperElement.addEventListener('mouseenter', () => {
    let img = paperElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/paper-hover.png';
});

paperElement.addEventListener('mouseleave', () => {
    let img = paperElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/paper.png';
});

const scissorsElement = document.getElementById('scissors');

scissorsElement.addEventListener('mouseenter', () => {
    let img = scissorsElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/scissors-hover.png';
});

scissorsElement.addEventListener('mouseleave', () => {
    let img = scissorsElement.querySelector('img');
    if (img !== undefined)
        img.src = 'images/scissors.png';
});