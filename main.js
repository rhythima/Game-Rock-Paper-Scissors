const choices=document.querySelectorAll(".choice");
const modal=document.querySelector(".modal");
const score=document.querySelector("#score");
const restart=document.querySelector("#restart");
const result=document.querySelector("#result")
const scoreBoard={
    player : 0,
    computer : 0
};

function play(e){
    // console.log("hi");
    restart.style.display="inline-block";
    const playerChoice=e.target.id;
    const computerChoice=getCompChoice();
    let winner=getWinner(playerChoice,computerChoice);
    // console.log(winner,computerChoice);
    showWinner(winner,computerChoice);
}

function getCompChoice(){
    const randomNum=Math.random();
    if(randomNum<0.35)
        return "scissors"
    else if(randomNum<0.50)
        return "paper"
    else
        return "rock"
}

function getWinner(p,c){
    if(p===c){
        return "Draw"
    }
    else if(p==='rock'){
        if(c==='paper'){
            return 'computer'
        }
        else{
            return 'player'
        }
    }
    else if(p==='paper'){
        if(c==='rock'){
            return 'player'
        }
        else{
            return 'computer'
        }
    }
    else if(p==='scissors'){
        if(c=='rock'){
            return 'computer'
        }
        else{
            return 'player'
        }
    }
}

function showWinner(winner,computerChoice)
{
    if(winner=='player'){
        scoreBoard.player++;
        result.innerHTML=`
        <h1 class="text-win">You Won</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }
    else if(winner=='computer'){
        scoreBoard.computer++;
        result.innerHTML=`
        <h1 class="text-lose">You Lose</h1>
        <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }
    else{
        result.innerHTML=`
        <h1>It's a Draw</h1>
        <i class=""choice fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }


// show score
score.innerHTML=`
<p> Player : ${scoreBoard.player}</p>
<p> Computer : ${scoreBoard.computer}</p>
`

modal.style.display="block";
}

function clearModal(e){
    if(e.target==modal){
        modal.style.display="none";
    }
}

function restartGame(){
    scoreBoard.player=0;
    scoreBoard.computer=0;
    score.innerHTML=`
    <p>Player : 0</p>
    <p>Computer :0</p>
    `
}

choices.forEach(choice =>{choice.addEventListener("click",play)});
window.addEventListener("click",clearModal);
restart.addEventListener("click",restartGame);