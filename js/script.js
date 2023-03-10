{
function playGame(x){

    clearMessages();

    let playerInput = x;

    function getMoveName(playerInput){
        if(playerInput == 1){
            return 'kamień';
        }
        else if(playerInput == 2){
            return 'papier';
        }
        else if(playerInput == 3){
            return 'nożyce';
        }
    }

    let argPlayerMove = getMoveName(playerInput);

    let randomNumber = Math.floor(Math.random() * 3 + 1 );

    let argComputerMove = getMoveName(randomNumber);

    function displayResult(argComputerMove, argPlayerMove){
    
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            return 'WYGRAŁEŚ! :)';
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            return 'WYGRAŁEŚ! :)';
        } 
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            return 'WYGRAŁEŚ! :)';
        } 
        else if(argComputerMove == argPlayerMove) {
            return 'REMIS!';
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            return 'PRZEGRAŁEŚ! :(';
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            return 'PRZEGRAŁEŚ! :(';
        }
        else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            return 'PRZEGRAŁEŚ! :(';
        }
        else {
            return 'ZAGRAJ JESZCZE RAZ!';
        }
    }

    let argGameResult = displayResult(argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + ' ' + argGameResult);

    console.log('Wylosowany numer: ' + randomNumber + ' ' + argComputerMove);
    console.log('Gracz wpisał: ' + playerInput + ' ' + argPlayerMove);

}

let buttonRock = document.getElementById('play-rock');
buttonRock.addEventListener('click', function() {
  playGame(1);
});

  let buttonPaper = document.getElementById('play-paper');
  buttonPaper.addEventListener('click', function() {
    playGame(2);
});

  let buttonScissors = document.getElementById('play-scissors');
  buttonScissors.addEventListener('click', function() {
    playGame(3);
});

}