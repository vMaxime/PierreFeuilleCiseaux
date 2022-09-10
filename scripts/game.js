var canSelect = true;
const choices = [
    'rock',
    'paper',
    'scissors'
];

const translations = {
    'rock': 'Pierre',
    'paper': 'Feuille',
    'scissors': 'Ciseaux'
};

function getWinner(playerSelection, maximeSelection) {
    if ((playerSelection === 'rock' && maximeSelection === 'scissors') || (playerSelection === 'paper' && maximeSelection === 'rock') || (playerSelection === 'scissors' && maximeSelection === 'paper'))
        return 'player';
    else if ((maximeSelection === 'rock' && playerSelection === 'scissors') || (maximeSelection === 'paper' && playerSelection === 'rock') || (maximeSelection === 'scissors' && playerSelection === 'paper'))
        return 'maxime';
    else
        return 'nobody';
}

function onSelect(selection, callback) {
    if (!canSelect)
        return false;
    canSelect = false;

    // random choice in choices Array
    let rdm = Math.floor(Math.random() * choices.length);
    let choice = choices[rdm];

    // change img & label for Maxime
    let element = document.getElementById('question-mark');
    element.classList.add('selection');
    let img = element.querySelector('img');
    img.src = 'images/' + choice + '.png';
    let label = element.querySelector('label');
    label.textContent = translations[choice];

    setTimeout(() => {
        let winner = getWinner(selection, choice);
        if (winner === 'player') {
            addPointsToPlayer(1);
        } else if (winner === 'maxime') {
            addPointsToMaxime(1);
        }
 
        callback();
        element.classList.remove('selection');
        img.src = 'images/question-mark-red.png';
        label.textContent = 'Pierre ? Feuille ? Ciseaux ?';
        canSelect = true;
    }, 1500);

    return true;
}