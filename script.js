console.log("Welcome to Tic-Tac-Toe");

let turn = "X";
let gameover = false;

// to change the turn
const changeTurn = () => {
    if (turn === "X")
        return "0";
    else
        return "X";
};

// to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2, -13, 7, 0],
        [3, 4, 5, -13, 17, 0],
        [6, 7, 8, -13, 27, 0],
        [0, 3, 6, -23, 17, 90],
        [1, 4, 7, -13, 17, 90],
        [2, 5, 8, -3, 17, 90],
        [0, 4, 8, -15, 15, 45],
        [2, 4, 6, -10, 15, 135]
    ];


    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.spaninfo').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('#imgbox').getElementsByTagName('img')[0].style.width = "170px";
            
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "20vw";
        }
    })
};

// main logic
let boxes = document.getElementsByClassName("gamebox");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            
            if (!gameover){
                document.getElementsByClassName('spaninfo')[0].innerText = "Turn of " + turn;
            }
        }
    })
})

// to reset screen
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turn = 'X';
    document.getElementsByClassName('spaninfo')[0].innerText = "Turn of " + turn;
    gameover = false;
    document.querySelector('#imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw";
})

