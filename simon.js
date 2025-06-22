let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","purple","green"];
let max=0;
let started=false;
let level =0;
let h2=document.querySelector("h2");
h2.append(`Your Highest Score :${max}`);
document.addEventListener("keypress",function ()
{
    if(started==false)
    {
        console.log("game started");
        started=true;

        levelUp();
    }
});

function buttonFlash(bt)
{
    bt.classList.add("flash");
    setTimeout(function ()
{
    bt.classList.remove("flash")
},250);

}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let idx=Math.floor(Math.random()*4);
    let randColor =  btns[idx];
    let randbutton = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    buttonFlash(randbutton);
}

function checkAns(idx)
{
    console.log("current level:",level);
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(max<level)max=level-1;
        h2.innerText=`Game Over! Your Score: ${level-1} .Press any key to start again.Your Highest Score :${max}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
                    document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress()
{
    console.log(this);
    let btn = this;
    buttonFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset()
{
    started=false;
    userSeq=[];
    gameSeq=[];
    level =0;
}