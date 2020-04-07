let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMove(playerInput);
printMessage('Twój ruch to: ' + playerMove);

let computerMove = randomMove();
printMessage('Ruch komputera to: ' + computerMove);

printMessage(getResult(playerMove, computerMove));
