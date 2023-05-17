let turn = new Audio("click.mp3")
let chance="X"
const change = ()=>{
    return chance === "X"?"O":"X"
}
let box=document.getElementsByClassName("box")
Array.from(box).forEach(element =>{
    let text=element.querySelector(".text")
    element.addEventListener("click",(e)=>{
        if(text.innerHTML=== ''){
            text.innerHTML=chance;
            turn.play();
            chance=change();
        }
    })
})