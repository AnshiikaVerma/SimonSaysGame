let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"]
let started=false;
let level=0;
let h2=document.querySelector("h2")
let highestScore=0;

document.addEventListener("keypress",function(){
    if(started==false){
 console.log("game started");
 started=true;
 levelUp()
    }
   })


   function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
   btn.classList.remove("flash");
},250)
   }
   
   function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
   btn.classList.remove("userFlash");
},250)
   }
  
//itself btn flash &level up
   function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`
   
let r=Math.floor(Math.random()*4) //choosing ran btn
let ranClr=btns[r];
let ranBtn=document.querySelector(`.${ranClr}`)
gameSeq.push(ranClr);
console.log(gameSeq)
  gameFlash(ranBtn);  //btn flash
   }


   function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){ //-1 becoz array h game nd user seq ...length me se -1 krenge for indx
     if(userSeq.length==gameSeq.length){
setTimeout(levelUp,1000)
       
     }
    }else{
         highestScore=highestScore+level;
     h2.innerHTML=`GAME OVER!<br>Your Score was <b> ${level}</b> <br>(press any key to restart the game)<br><u>The highest score was:<b>${highestScore}<b></u>`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";
        },150)
     reset();
 

    }
   }
   let allBtns=document.querySelectorAll(".btn");

   //user press the btn
   function btnPress(){
    let btn=this;//btn jisk liye user press call hoga--->this
    userFlash(btn);
let userClr=btn.getAttribute("id");
userSeq.push(userClr);
checkAns(userSeq.length-1);
     }


   for (const btn of allBtns) {
     btn.addEventListener("click",btnPress); //hr ek btn k liye user oress call hoga
   }
  function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }