let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let span=document.querySelector("span");

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress", function(){
    if(started == false) {
        started = true;
        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    span.innerText=`Level ${level}`;


    //Random Button Choose
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function btnPress(){
    let btn= this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        span.innerHTML=`Game Over! Your score is ${level} <br> Press any key to start again.`;
        document.querySelector("body").style.background="rgb(225, 76, 76)";
        setTimeout(function(){
            document.querySelector("body").style.background="linear-gradient(to right,  #fde1ee,#e8dffd)";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}