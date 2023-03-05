

let randomNumber = Math.floor(Math.random() * 3 + 1 );

console.log('Wylosowany numer: ' + randomNumber);

let computerMove = '';

if(randomNumber == 1){
    computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else {
    computerMove = 'nożyce';
}

printMessage('Ruch komputera: ' + computerMove);

let playerInput = prompt('Wybierz swój tuch! 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wpisał: ' + playerInput)

let playerMove = '';

if(playerInput == '1') {
    playerMove = 'kamień'
}
else if(playerInput == '2'){
    playerMove = 'papier'
}
else  if(playerInput=='3'){
    playerMove = 'nożyce';
}
else{
    playerMove = 'ruch nieznany';
}

printMessage('Twój ruch: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('WYGRAŁEŚ! :)')
}
else if(computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('WYGRAŁEŚ :)');
} 
else if(computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('WYGRAŁEŚ :)');
} 
else if(computerMove == playerMove) {
    printMessage('REMIS!');
}
else if(computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('PRZEGRAŁEŚ :(');
}
else if(computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('PRZEGRAŁEŚ :(');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('PRZEGRAŁEŚ :(');
}
else {
    printMessage('Niedozwolony ruch, zagraj jeszcze raz!')
}