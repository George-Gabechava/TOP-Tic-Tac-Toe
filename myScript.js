console.log("Hello Worlds!")



var TicTacToe = (function(){
    function hoopla() {
        console.log('hoopla');
    }


    // store the gameboard as an array inside of a Gameboard object,
    var gameBoard = ['', '', '', '', '', '', '', '', ''];
    //var players = ["Player1", "Player2"];
    var currentTurn = 1;
    // render?
    //_render();
    var currentPlayer = 'Player1';
    var currentMarker = 'X';

    //which button was selected by a player:
    function select(n) {
        const currentCell = `cellValue${n}`;
        const cell = document.getElementById(currentCell);
        //get current player, get current marker
        currentPlayer = checkPlayer();

        //check if cell is used, then add marker
        if (gameBoard[n-1] == '') {
            cell.innerHTML = currentMarker;
            gameBoard[n-1] = currentMarker;
            currentTurn += 1;
        }        
        checkWin;
    }


    //check who is playing
    function checkPlayer() {
        if (currentTurn % 2 == 0){
            currentPlayer = "Player2"
            currentMarker = 'O';
        }
        else {
            currentPlayer = 'Player1';
            currentMarker = 'X';
        }
        return currentPlayer;
        checkWin;
    }

    //check for result
    function checkWin() {
        //
    };
    //new game function
    




    return {select: select,

            
            //to remove
            gameBoard: gameBoard,
            currentPlayer,
            currentMarker,
                        };





    function myFunction() {
        document.getElementById('cellValue1');
      cell1.innerHTML= "ayy"
      }

    // function _render() {
    //     var 
    // }
    







})();