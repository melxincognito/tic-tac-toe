
let currentPlayer;

function Player(name, marker) {
    this.name = name, 
    this.marker = marker
}


const playGame = () => {
    board.boxes.forEach((box) => {
        box.addEventListener('click', boxClicked);
    });
};


const board = (() => {
    const boxes = Array.from(document.getElementsByClassName('box'));
    const spaces = [];
    const players = [];
    var round = 0;


    return { boxes, spaces, players, round }
})();

const newPlayers = ((playerOne, playerTwo) => {

    var playerOneName = prompt('enter player one name');
    var playerOneMarker = 'O';
    var playerOne = new Player(playerOneName, playerOneMarker);
    var playerTwoName = prompt('enter player two name');
    var playerTwoMarker = 'X';
    var playerTwo = new Player(playerTwoName, playerTwoMarker);
    board.players.push(playerOne, playerTwo)
    return { playerOne, playerTwo }

})();

const makePlayerCard = (() => {
    const playerOneCard = document.createElement('div');
    const playerTwoCard = document.createElement('div');
    playerOneName = document.createElement('h3');
    playerOneMarker = document.createElement('h3');
    playerTwoName = document.createElement('h3');
    playerTwoMarker = document.createElement('h3');
    playerOneName.innerHTML = `Player: ${newPlayers.playerOne.name}`;
    playerOneMarker.innerHTML = `Marker: '${newPlayers.playerOne.marker}'`;
    playerTwoName.innerHTML = `Player: ${newPlayers.playerTwo.name}`;
    playerTwoMarker.innerHTML = `Marker: '${newPlayers.playerTwo.marker}'`;
    playerOneCard.appendChild(playerOneName);
    playerOneCard.appendChild(playerOneMarker);
    playerTwoCard.appendChild(playerTwoName);
    playerTwoCard.appendChild(playerTwoMarker);
    document.getElementById('players').appendChild(playerOneCard);
    document.getElementById('players').appendChild(playerTwoCard);
})();




const boxClicked = (e) => {
    const id = e.target.id;

    const markO = newPlayers.playerOne.marker;
    const markX = newPlayers.playerTwo.marker;
    currentPlayer = currentPlayer === markO ? markX : markO;
    

    if(!board.spaces[id]){
            board.spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;

            if(playerHasWon()) {
                var winningPlayer = document.createElement('div');
                round = board.round += 1;
                winningPlayer.innerHTML = `Round ${round} - ${currentPlayer} has won!`;
                document.getElementById('playerCards').appendChild(winningPlayer);
                return round; 
            }
    }
    return {
        markO, markX, currentPlayer
    }

};


const playerHasWon = () => {
    if(board.spaces[0] === currentPlayer) {
        if(board.spaces[1] === currentPlayer && board.spaces[2] === currentPlayer) {
            alert(`${currentPlayer} wins up top bitch`)
            return true;
        }
        if(board.spaces[3] == currentPlayer && board.spaces[6] == currentPlayer) {
            alert(`${currentPlayer} wins on left bitch`)
            return true;
        }
        if(board.spaces[4] == currentPlayer && board.spaces[8] == currentPlayer) {
            alert(`${currentPlayer} wins diagnal bitch`)
            return true;
        }
    } else if(board.spaces[8] === currentPlayer) {
        if(board.spaces[7] === currentPlayer && board.spaces[6] === currentPlayer) {
            alert(`${currentPlayer} wins on bottom puta`)
            return true;
        }
        if(board.spaces[2] == currentPlayer && board.spaces[5] == currentPlayer) {
            alert(`${currentPlayer} wins on right putita`)
            return true;
        }
    } else if(board.spaces[4] === currentPlayer) {
        if(board.spaces[3] === currentPlayer && board.spaces[5] === currentPlayer) {
            alert(`${currentPlayer} wins center horizantal`)
            return true;
        }
        if(board.spaces[1] == currentPlayer && board.spaces[7] == currentPlayer) {
            alert(`${currentPlayer} wins center vertical, hooyaa`)
            return true;
        }
        if(board.spaces[2] == currentPlayer && board.spaces[6] == currentPlayer) {
            alert(`${currentPlayer} wins diagnal, putera`)
            return true;
        }

    }
 }



const restart = () => {
    board.spaces = [];
    board.boxes.forEach((box) => {
        box.innerText = '';
    })
    currentPlayer = null;

};



document.getElementById('reset').addEventListener('click', restart)


restart()
playGame()

