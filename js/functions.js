function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
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