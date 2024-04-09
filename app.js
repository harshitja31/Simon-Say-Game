let gameSeq = [];
let userSeq = [];

let started = false;
 let level = 0;
 let highScore = 0;


let btns = ["red","orange","green","blue"]

let h2 = document.querySelector('h2');

 
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
};

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
};

function levelUp(){
    userSeq  = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
};

function chackAns(idx){
if(userSeq[idx] == gameSeq[idx]){
if(userSeq.length == gameSeq.length){
setTimeout(levelUp,750);
}
}
else{
    h2.innerHTML = `Game Over! Your Score was <b>${level*10}</b><br/>Press any Key to start.`;
    if (level > highScore) {
        highScore = level;
        document.getElementById('hs').innerText = `Highest Score: ${highScore * 10}`;
    }
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = 'white';
    },200);
    reset();
}
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    chackAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}