{
const playGame = function(x){

    clearMessages();

    const playerInput = x, 
        randomNumber = Math.floor(Math.random() * 3 + 1 );

    const getMoveName = function(playerInput){
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

    const  argPlayerMove = getMoveName(playerInput),
        argComputerMove = getMoveName(randomNumber);


    const displayResult = function(argComputerMove, argPlayerMove){
    
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

    const argGameResult = displayResult(argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + ' ' + argGameResult);

    console.log('Wylosowany numer: ' + randomNumber + ' ' + argComputerMove);
    console.log('Gracz wpisał: ' + playerInput + ' ' + argPlayerMove);

}

const buttonRock = document.getElementById('play-rock'),
    buttonPaper = document.getElementById('play-paper'),
    buttonScissors = document.getElementById('play-scissors');


buttonRock.addEventListener('click', function() {
  playGame(1);
});
  
buttonPaper.addEventListener('click', function() {
    playGame(2);
});

buttonScissors.addEventListener('click', function() {
    playGame(3);
});

}