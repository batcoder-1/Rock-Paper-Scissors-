const choices=document.querySelectorAll(".option");
const generate=()=>{                      
    let s=["rock","paper","scissor"];
    let i=Math.floor(Math.random()*3);
    return s[i];
}
let winneruser=0;
let winnercomputer=0;
const play=(userchoice)=>{
     let computerchoice=generate();
     if(userchoice=="rock"&&computerchoice=="scissor"){
        winner(1);
        winneruser++;
     }
     if(userchoice=="rock"&&computerchoice=="paper"){
        winner(0);
        winnercomputer++;
     }
     if(userchoice=="rock"&&computerchoice=="rock"){
        draw();
     }
     if(userchoice=="scissor"&&computerchoice=="rock"){
            winner(0);
        winnercomputer++;
     }
     if(userchoice=="scissor"&&computerchoice=="paper"){
         winner(1);
        winneruser++;
     }
     if(userchoice=="scissor"&&computerchoice=="scissor"){
        draw();
     }
     if(userchoice=="paper"&&computerchoice=="scissor"){
        winner(0);
        winnercomputer++;
     }
     if(userchoice=="paper"&&computerchoice=="rock"){
         winner(1);
        winneruser++;
     }
     if(userchoice=="paper"&&computerchoice=="paper"){
        draw();
     }
   let userpoint=document.querySelector("#ypoints");
   let computerpoint=document.querySelector("#cpoints");
    userpoint.innerText=winneruser;
     computerpoint.innerText=winnercomputer;
}
const winner=(s)=>{
    let msg=document.querySelector(".message");
      msg.className="message";
    if(s===1){
        msg.classList.add("win");
        msg.innerText="YOU WIN";
    }
    else{
        msg.classList.add("lose");
        msg.innerText=" YOU LOST";
    }
     setTimeout(() => {
    msg.className = "message";
    msg.innerText = "✨ Ready? Make your move!";
  }, 2000);
}

const draw=()=>{
    let msg=document.querySelector(".message");
    msg.className="message";
    msg.classList.add("draw");
    msg.innerText="DRAW";
     setTimeout(() => {
    msg.className = "message";
    msg.innerText = "✨ Ready? Make your move!";
  }, 2000);
}
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
     winnercomputer=0;
     winneruser=0;
     let u=document.querySelector("#ypoints");
     let c=document.querySelector("#cpoints");
     let msg=document.querySelector(".message");
     msg.className="message";
     msg.innerText="Play your move";
     msg.className="message";
     u.innerText="0";
     c.innerText="0";

})
choices.forEach(choice => {
choice.addEventListener("click",()=>{
      let userchoice=choice.getAttribute("id");
      play(userchoice);
})
});