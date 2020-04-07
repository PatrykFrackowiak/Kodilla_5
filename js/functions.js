function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function addListeners(){
	document.getElementById('play-rock').addEventListener('click', function(){ playGame(1);});
	document.getElementById('play-paper').addEventListener('click', function(){ playGame(2);});
	document.getElementById('play-scissors').addEventListener('click', function(){ playGame(3);});
}

function playGame(playerInput) {
	clearMessages();
    let playerMove = getMove(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    let computerMove = randomMove();
    printMessage('Ruch komputera to: ' + computerMove);
    printMessage(getResult(playerMove, computerMove));
}

function randomMove() {
	return getMove(Math.floor(Math.random() * 3 + 1));
}

function getMove(input) {
	if (input == '1') {
		return 'kamień';
	} else if (input == '2') {
		return 'papier';
	} else if (input == '3') {
		return 'nożyce';
	}
	return 'nieznany ruch';
}

function getResult(playerMove, computerMove) {
	if (playerMove == computerMove) {
		return 'remis';
	}
	if (playerMove == 'kamień' && computerMove == "nożyce") {
		return 'wygrałeś';
	}
	if (playerMove == 'papier' && computerMove == "kamień") {
		return 'wygrałeś';
	}
	if (playerMove == 'nożyce' && computerMove == "papier") {
		return 'wygrałeś';
	}
	return 'przegrałeś';
}
