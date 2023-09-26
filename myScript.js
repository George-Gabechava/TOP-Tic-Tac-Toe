console.log("Hello Worlds!")

addEventListener("click", function(event){
    event.preventDefault()
});

var TicTacToe = (function(){
    // store the gameboard as an array inside of a Gameboard object,
    var gameBoard = ['', '', '', '', '', '', '', '', ''];
    var currentTurn = 1;
    var gameover = 0;
    
    var firstPlayerName = 'Player1';
    var secondPlayerName = 'Player2';
    var currentPlayer = 'noname';
    var currentMarker = 'X';

    //a button was selected by a player:
    function select(n) {
        if (gameover == 1) {
            reset();
        }
        const currentCell = `cellValue${n}`;
        const cell = document.getElementById(currentCell);
        //get current player, get current marker
        checkPlayer();

        //check if cell is filled in gameBoard, then add marker if not.
        if (gameBoard[n-1] == ''){
            cell.innerHTML = currentMarker;
            gameBoard[n-1] = currentMarker;
            checkWin(currentMarker);
            currentTurn += 1;
        }        
    }

    //check who's turn it is
    function checkPlayer() {
        if (currentTurn % 2 == 0){
            currentPlayer = secondPlayerName;
            currentMarker = 'O';
        }
        else {
            currentPlayer = firstPlayerName;
            currentMarker = 'X';
        }
        return currentPlayer;
    }

    //check which marker is in use
    function checkMarker() {
        return currentMarker;
    }

    //check for a winner using current marker 'm'
    function checkWin(m) {
        //check for a row win
        if (gameBoard[0] == m && gameBoard[1] == m && gameBoard[2] == m) {
            var winner = currentPlayer;
        }
        if (gameBoard[3] == m && gameBoard[4] == m && gameBoard[5] == m) {
            var winner = currentPlayer;
        }
        if (gameBoard[6] == m && gameBoard[7] == m && gameBoard[8] == m) {
            var winner = currentPlayer;
        }

        //check for a column win
        if (gameBoard[0] == m && gameBoard[3] == m && gameBoard[6] == m) {
            var winner = currentPlayer;
        }
        if (gameBoard[1] == m && gameBoard[4] == m && gameBoard[7] == m) {
            var winner = currentPlayer;
        }
        if (gameBoard[2] == m && gameBoard[5] == m && gameBoard[8] == m) {
            var winner = currentPlayer;
        }

        //check for a diagonal win
        if (gameBoard[0] == m && gameBoard[4] == m && gameBoard[8] == m) {
            var winner = currentPlayer;
        }
        if (gameBoard[2] == m && gameBoard[4] == m && gameBoard[6] == m) {
            var winner = currentPlayer;
        }

        //declare winner or tie
        if (winner == currentPlayer) {
            var theDiv = document.getElementById("resultDisplay");
            theDiv.textContent = `${currentPlayer} Wins!`;
            gameover = 1;

        }
        else if (currentTurn >= 9) {            
            var theDiv = document.getElementById("resultDisplay");
            theDiv.textContent = `It's a Tie!`;
            gameover = 1;
        }
    };

    function updatePlayers(firstP, secondP) {
        console.log(firstP, secondP);
        firstPlayerName = firstP;
        console.log('old current', currentPlayer);
        currentPlayer = firstP;
        console.log('new current', currentPlayer);

        secondPlayerName = secondP;   
    }

    //new game function
    function reset() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentTurn = 1;

        for (let i = 1; i <= 9; i++) {
            var currentCell = `cellValue${i}`;
            var cell = document.getElementById(currentCell);
            cell.innerHTML = '';
        } 

        var theDiv = document.getElementById("resultDisplay");
        theDiv.textContent = '';

        gameover = 0;
    }

    return {select: select,
            updatePlayers,
            reset,

            //to remove
            currentPlayer: () => checkPlayer(), 
            currentMarker: () => checkMarker(),
            };

})();