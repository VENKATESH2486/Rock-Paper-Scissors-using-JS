let ips = ['rock', 'paper', 'scissors'];
let result = document.getElementById('result');

let rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', ()=>{
    activate()
    document.getElementById("yourOpt").className = 'choice_rock'
    roundWinner = winner(comIp(), 'rock')
    declareWinner(roundWinner)
})

let paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', ()=>{
    activate()
    document.getElementById("yourOpt").className = 'choice_paper'
    roundWinner = winner(comIp(), 'paper')
    declareWinner(roundWinner)
})

let scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', ()=>{
    activate()
    document.getElementById("yourOpt").className = 'choice_scissors'
    roundWinner = winner(comIp(), 'scissors')
    declareWinner(roundWinner)
})

let playAgainBtn = document.getElementById("playAgain")
playAgainBtn.addEventListener('click', ()=>{
    document.getElementById('phase1').className = 'show'
    document.getElementById('phase2').className = 'unshow'
    document.getElementById('userWon').className = 'unshow'
    document.getElementById('compWon').className = 'unshow'
})

function declareWinner(winner){
    if (winner == 'Computer Wins'){
        document.getElementById('compWon').className = 'winner'
        result.innerHTML = 'You LOSE'
        let comScore = document.getElementById('computerScore')
        comScore.innerHTML = Number(comScore.innerHTML) + 1
    }
    else if(winner == 'You WIN!'){
        document.getElementById('userWon').className = 'winner'
        result.innerHTML = 'You WIN'
        let userScore = document.getElementById('userScore')
        userScore.innerHTML = Number(userScore.innerHTML) + 1
    }
    else{
        result.innerHTML = "TIE"
    }

}

function activate(){
    document.getElementById('phase1').className = 'unshow'
    document.getElementById('phase2').className = 'show'
}

function winner(comIp, userIp){
    if (userIp == comIp){
        return 'Tie'
    }

    if (userIp == 'rock'){
        if (comIp == 'paper'){
            return 'Computer Wins'
        } else{
            return 'You WIN!'
        }
    } else if(userIp == 'paper'){
        if (comIp == 'scissors'){
            return 'Computer Wins'
        } else{
            return 'You WIN!'
        }
    }else {
        if (comIp == 'rock'){
            return 'Computer Wins'
        } else{
            return 'You WIN!'
        }
    }
}

function comIp(){
    let cip = ips[Math.floor(Math.random() * ips.length)]
    document.getElementById("computerOpt").className = 'choice_'+cip
    return cip
}

let rulesBtn = document.getElementById("rulesBtn")
rulesBtn.addEventListener('click', () => {
    document.getElementById('rulesPic').className = 'show'
})

let hideRules = document.getElementById("hideRules")
hideRules.addEventListener('click', () => {
    document.getElementById('rulesPic').className = 'unshow'

})