let gameSeq=[];
let userSeq=[];

let btn=["red","green","yellow","purple"];

let gameStarted=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(gameStarted==false){
        console.log("Game is Started");
        gameStarted=true;

        levelUp();
    }

    
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randCol=btn[randIndx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(indx){
    //console.log("current level : " + level);
    if(userSeq[indx]===gameSeq[indx]){
        //console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnPress(){
    let bt=this;
    userFlash(bt);
    let userColor=bt.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click" , btnPress);
}

function reset(){
    gameStarted=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

