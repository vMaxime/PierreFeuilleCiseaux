const playerPointsElement = document.getElementById('player').getElementsByClassName('subtitle')[0];
const maximePointsElement = document.getElementById('maxime').getElementsByClassName('subtitle')[0];

let playerPoints =  parseInt(localStorage.getItem('player_points'));
if (playerPoints === null || playerPoints === null || isNaN(playerPoints)) {
    localStorage.setItem('player_points', 0);
    playerPoints = 0;
}
playerPointsElement.innerHTML = playerPoints + (playerPoints > 1 ? " points" : " point");

let maximePoints = parseInt(localStorage.getItem('maxime_points'));
if (isNaN(maximePoints)) {
    localStorage.setItem('maxime_points', 0);
    maximePoints = 0;
}
maximePointsElement.innerHTML = playerPoints + (playerPoints > 1 ? " points" : " point");

function addPointsToPlayer(amount) {
    if (amount === null || amount === null || isNaN(amount))
        return;
    
    playerPoints += amount;
    localStorage.setItem('player_points', playerPoints);
    playerPointsElement.innerHTML = playerPoints + (playerPoints > 1 ? " points" : " point");
}

function addPointsToMaxime(amount) {
    if (amount === null || amount === null || isNaN(amount))
        return;
    
    maximePoints += amount;
    localStorage.setItem('maxime_points', maximePoints);
    maximePointsElement.innerHTML = maximePoints + (maximePoints > 1 ? " points" : " point");
}