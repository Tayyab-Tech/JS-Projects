let firstPlayer = "X";
let arr = [null, null, null, null, null, null, null, null, null]; 
let gameover = false;

function winner() {
    if (
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
    ) {
        document.getElementById('msg').innerText = `Winner is ${firstPlayer}`;
        document.getElementById('msg-container').classList.remove('hide');
        gameover = true;
        return;
    }

    if (!arr.includes(null)) {
        document.getElementById('msg').innerText = "It's a draw!";
        document.getElementById('msg-container').classList.remove('hide');
        gameover = true;
    }
}

function game(e) {
    let a = e.target.getAttribute('data-index');
    if (gameover || arr[a] !== null) {
        return;
    }
    arr[a] = firstPlayer;
    e.target.innerText = firstPlayer;
    winner();
    firstPlayer = firstPlayer === "X" ? "O" : "X";
}

function resetGame() {
    arr = [null, null, null, null, null, null, null, null, null];
    gameover = false;
    firstPlayer = "X";
    document.querySelectorAll('.box').forEach(button => button.innerText = '');
    document.getElementById('msg-container').classList.add('hide');
}

document.querySelectorAll('.box').forEach(button => {
    button.addEventListener('click', game);
});

document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('new-btn').addEventListener('click', resetGame);