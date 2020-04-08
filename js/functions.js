const stone = 'kamień';
const scissors = 'nożyce';
const paper = 'papier';

const printMessage = function (msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function () {
	document.getElementById('messages').innerHTML = '';
}

const addListeners = function () {
	document.getElementById('play-rock').addEventListener('click', function () { playGame(1); });
	document.getElementById('play-paper').addEventListener('click', function () { playGame(2); });
	document.getElementById('play-scissors').addEventListener('click', function () { playGame(3); });
}

const playGame = function (playerInput) {
	clearMessages();
	let playerMove = getMove(playerInput);
	printMessage('Twój ruch to: ' + playerMove);
	let computerMove = randomMove();
	printMessage('Ruch komputera to: ' + computerMove);
	printMessage(getResult(playerMove, computerMove));
}

const randomMove = function () {
	return getMove(Math.floor(Math.random() * 3 + 1));
}

const getMove = function (input) {
	if (input == '1') {
		return stone;
	} else if (input == '2') {
		return paper;
	} else if (input == '3') {
		return scissors;
	}
	return 'nieznany ruch';
}

const getResult = function (playerMove, computerMove) {
	if (playerMove == computerMove) {
		return 'remis';
	}
	if (playerMove == stone && computerMove == scissors) {
		return 'wygrałeś';
	}
	if (playerMove == paper && computerMove == stone) {
		return 'wygrałeś';
	}
	if (playerMove == scissors && computerMove == paper) {
		return 'wygrałeś';
	}
	return 'przegrałeś';
}
