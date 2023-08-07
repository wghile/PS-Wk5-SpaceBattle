//Alien Ships (enemy)
class Alien{
    constructor(hull, firepower, accuracy){
        this.hull = Math.floor(Math.random() * (6 - 3 + 1) + 3);  //random # between 3 and 6
        this.firepower = Math.floor(Math.random() * 3 + 2);  //random # between 2 and 4
        this.accuracy = Math.random() * 0.2 + 0.6   //random # between 0.6 and 0.8
        // Math.floor(Math.random() * (max - min + 1) + min)
    }
    counterAttack(){
        if(this.accuracy > Math.random()){
            console.log('Razor Crest has been hit!')
            player1.hullCheck()
        }else{
            console.log('Alien Ship missed! Razor Crest will attack')
            player1.attack()
        }
    }
    hullCheck(){
        console.log('Alien Ship Stats before Hit:') 
        console.log(alienShips[0])
        this.hull -= player1.firepower
        console.log('Alien Ship Stats after Hit:') 
        console.log(alienShips[0])
        if(this.hull <= 0){
            console.log('Enemy destroyed 💥')
            player1.retreat()
        }else{
            console.log(`Alien Ship is still alive with hull of ${this.hull}. Alien Ship will counter attack`)
            this.counterAttack()
        }
    }
}

//Razor Crest Ship (player)
class Player extends Alien{
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy)
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
    attack(){
        if(this.accuracy > Math.random()){
            console.log('Alien ship has been hit!') 
            alienShips[0].hullCheck()
        }else{
            console.log('Razor Crest missed! Prepare for Alien Ship counter attack 🚨')
            alienShips[0].counterAttack()
        }
    }
    hullCheck(){
        this.hull -= alienShips[0].firepower
        console.log(this.hull)
        if(this.hull <= 0){
            console.log('Razor Crest has been destroyed 😭. You LOST the game.')
            // this.replay()
        }else{
            console.log(`Razor Crest is still alive with health of ${this.hull}. Razor Crest will attack`)
            player1.attack()
        }
    }
    retreat(){
        let answer = prompt('Razor Crest survived to see another day.. Does Razor Crest want to retreat? (yes or no)')
        answer = answer.toLocaleLowerCase()
        if(answer === 'yes'){
            alert('Game Over')
            // this.replay()
        }else if(answer === 'no'){
            alienShips.shift()
            if(alienShips.length > 0){
                this.attack()
            }else{
                console.log('You WON the game!')
                // console.log(player1)
                // this.replay()
            }
        }else{
            alert('Error..Please enter yes or no')
            this.retreat()
        }
    }
}
//Creating 6 Alien Ships
const alienShips = []
b = 0
while (b <= 5){
    alienShips.push(new Alien())
    b++
}
console.log(alienShips)

//Declaring player
const player1 = new Player()
console.log(player1)

//DOM Manipulation
//Starting Stats for Alien & Player
let alienHull = document.querySelector('#alien-hull')
alienHull.textContent = alienShips[0].hull
let alienFirepower = document.querySelector('#alien-firepower')
alienFirepower.textContent = alienShips[0].firepower
let alienAcc = document.querySelector('#alien-accuracy')
alienAcc.textContent = Math.round(alienShips[0].accuracy*100)/100

let playerHull = document.querySelector('#player-hull')
playerHull.textContent = player1.hull
playerHull.style.color = '#008000'
let playerFirepower = document.querySelector('#player-firepower')
playerFirepower.textContent = player1.firepower
let playerAcc = document.querySelector('#player-accuracy')
playerAcc.textContent = Math.round(player1.accuracy*100)/100


//Actions
const player = document.querySelector('#player')
const updates = document.querySelector('#console-status')
const alien = document.querySelector('#alien')
alien.style.zIndex = 1
const alienLives = document.querySelector('#alien-lives')
const weapon = document.querySelector('#laser')
weapon.style.zIndex = 2

//I used the methods from the classes above to create the functions below. I wasn't sure how to call on the methods directly on the function without getting errors especially because I also wanted to add some DOM manipulation within the methods. So I know there's a lot of repetitive code here.. sorry :(
function attack(){
    if(player1.accuracy > Math.random()){
        alienShips[0].hull -= player1.firepower
        alienHull.textContent = alienShips[0].hull
        weapon.animate([
            {transform: "translateX(-60vw) scale(10)"}
        ],
        {
            duration: 1200
        })
        alien.animate([
            {transform: "rotate(360deg) scale(0.75)"}
        ],
        {
            duration: 2000
        })
        if(alienShips[0].hull <= 0){
            updates.textContent = 'Enemy destroyed 💥'
            alien.animate([
                {transform: "rotate(0) scale(1)"},
                {transform: "rotate(360deg) scale(0)"},
            ],
            {
                duration: 2400,
                iterations: 1
            })
            if(alienLives.hasChildNodes()){
                alienLives.removeChild(alienLives.children[0])
                retreat()
            }else{
                false
            }
        }else{
            updates.textContent = `Alien Ship has taken damage and will counter attack!`
        } 
    }else{
        updates.textContent = 'Razor Crest missed! Prepare for Alien Ship counter attack 🚨'
    }
}

function counterAttack(){
    if(alienShips[0].accuracy > Math.random()){
        player1.hull -= alienShips[0].firepower
        if(player1.hull >= 14  && player1.hull <= 20){
            playerHull.style.color = '#008000'
        }else if(player1.hull >= 7  && player1.hull <= 13){
            playerHull.style.color = '#ffff00'
        }else{
            playerHull.style.color = '#ff0000'
        }
        playerHull.textContent = player1.hull
        alien.animate([
            {transform: "translateX(60vw) rotate(360deg) scale(1.5)"}
        ],
        {
            duration: 1000,
            iterations: 1
        })
        if(player1.hull <= 0){
            updates.textContent = 'Razor Crest has been destroyed 😭. You LOST the game.'
            alien.animate([
                {transform: "translateX(25vw) scale(2.5)"}
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
            player.animate([
                {transform: "rotate(0) scale(1)"},
                {transform: "rotate(360deg) scale(0)"},
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
            weapon.animate([
                {transform: "scale(1)"},
                {transform: "scale(0)"},
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
        }else{
            updates.textContent = `Razor Crest has taken damage and will counter attack!`
        }
    }else{
        updates.textContent = 'Alien Ship missed! Razor Crest can attack'
    }
}

function retreat(){
    let answer = prompt('Enemy destroyed 💥 and Razor Crest survived to see another day.. Does Razor Crest want to retreat? (yes or no)')
    answer = answer.toLocaleLowerCase()
    if(answer === 'yes'){
        updates.textContent = 'Game Over'
        weapon.animate([
            {transform: "translateX(-60vw) scale(5)"}
        ],
        {
            duration: 1000,
            fill: "forwards"
        })
        player.animate([
            {transform: "rotate(180)"},
            {transform: "translateX(20vw)"}
        ],
        {
            duration: 1000,
            fill: "forwards"
        })
        alien.animate([
            {transform: "rotate(360deg) scale(0)"}
        ],
        {
            duration: 1000,
            fill: "forwards"
        })
        // playAgain()
    }else if(answer === 'no'){
        alienShips.shift()
        if(alienShips.length > 0){
            updates.textContent = 'Razor Crest\'s turn'
            alienHull.textContent = alienShips[0].hull
            alienFirepower.textContent = alienShips[0].firepower
            alienAcc.textContent = Math.round(alienShips[0].accuracy*100)/100
            updates.textContent = 'Razor Crest\'s turn'
        }else{
            alien.animate([
                {transform: "rotate(0) scale(1)"},
                {transform: "rotate(360deg) scale(0)"},
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
            player.animate([
                {transform: "scale(4) translateX(-8vw)"}
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
            weapon.animate([
                {transform: "scale(1)"},
                {transform: "scale(0)"},
            ],
            {
                duration: 1000,
                fill: "forwards"
            })
            updates.textContent = 'You WON the game!'
            // playAgain()
        }
    }else{
        alert('Error..Please enter yes or no')
        retreat()
    }
}
function playAgain(){
    let newGame = prompt('Would you like to play again? (yes or no)')
    newGame = newGame.toLocaleLowerCase()
    if(newGame === 'yes'){
        window.open('index.html', '_self')
    }else if(newGame === 'no'){
        alert('Thanks for playing!')
    }else{
        playAgain()
    }
} 


document.addEventListener('keydown', (event) => {
    const keyName = event.key
    if(keyName === "p"){
        attack()
    }else{
        false
    }
})
document.addEventListener('keydown', (event) => {
    const keyName = event.key
    if(keyName === "q"){
        counterAttack()
    }else{
        false
    }
})