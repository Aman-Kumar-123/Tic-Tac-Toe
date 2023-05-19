let turn = new Audio("click.mp3")
let chance = "X"
let gameover = false
const change = () => {
    return chance === "X" ? "O" : "X"
}
const win = () => {
    let boxtext = document.getElementsByClassName("box")
    let pos = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 5, 6, 5, 15, 135]
    ]
    pos.forEach(e => {
        if ((boxtext[e[0]].innerText !== "") && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)) {
            document.querySelector(".Turn").innerText = boxtext[e[0]].innerText + " won"
            gameover = true
            document.querySelector(".wining").style.width = '12vw';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width='20vw'
        }
    })
}
let box = document.getElementsByClassName("box")
Array.from(box).forEach(element => {
    let text = element.querySelector(".text")
    element.addEventListener("click", (e) => {
        if (text.innerHTML === '' && !gameover) {
            text.innerHTML = chance;
            turn.play();
            chance = change();
            win();
            if (!gameover)
                document.getElementsByClassName("Turn")[0].innerHTML = "Turn for " + chance;
        }

    })
})
document.getElementById("reset").addEventListener("click",()=>{
    Array.from(box).forEach(element =>{
        element.querySelector(".text").innerHTML=""
    })
    gameover=false
    chance="X"
    document.getElementsByClassName("Turn")[0].innerHTML = "Turn for " + chance;
    document.querySelector(".wining").style.width = '0';
    document.querySelector('.line').style.width='0'
})