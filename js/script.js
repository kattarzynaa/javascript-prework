
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
      }
      else if(argMoveId == 2){
          return 'papier';
      }
      else if(argMoveId == 3){
          return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

let randomNumber = Math.floor(Math.random() * 3 + 1 );

let argComputerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój tuch! 1: kamień, 2: papier, 3: nożyce');

let argPlayerMove = getMoveName(playerInput);

  
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






