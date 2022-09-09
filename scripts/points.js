const playerPointsElement = document.getElementById('player').getElementsByClassName('subtitle')[0];
const maximePointsElement = document.getElementById('maxime').getElementsByClassName('subtitle')[0];

let playerPoints = localStorage.getItem('player_points');
if (playerPoints === null || playerPoints === null || isNaN(playerPoints)) {
    localStorage.setItem('player_points', 0);
    playerPoints = 0;
}
playerPointsElement.textContent = playerPoints + (playerPoints > 1 ? " points" : " point");

let maximePoints = localStorage.getItem('maxime_points');
if (isNaN(maximePoints)) {
    localStorage.setItem('maxime_points', 0);
    maximePoints = 0;
}
maximePointsElement.textContent = playerPoints + (playerPoints > 1 ? " points" : " point");

function addPointsToPlayer(amount) {
    if (amount === null || amount === null || isNaN(amount))
        return;
    
    playerPoints += amount;
    localStorage.setItem('player_points', playerPoints);
}

function addPointsToMaxime(amount) {
    if (amount === null || amount === null || isNaN(amount))
        return;
    
    maximePoints += amount;
    localStorage.setItem('maxime_points', maximePoints);
}