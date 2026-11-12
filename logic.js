let gameisRunning=false;
let matchedLettersArray = [];// [empty, empty, "A", empty, "A"] 
let startingGame= prompt("do you want to start the game?")
let attemptsLeft= 5;

if (startingGame.toLowerCase()==="yes") {
    gameisRunning=true
} 

const possibleWords= ["Camel","Candy", "Colombia", "Andalusia", "Naruto"];

let machinedChoosenIndex= Math.floor(Math.random() * possibleWords.length)
let machinedChoosenWord= possibleWords[machinedChoosenIndex]
let choosenWordArray = machinedChoosenWord.split("")
console.log(choosenWordArray)

while (gameisRunning) {

    let UserGuess= prompt(` choose a word with with length of ${choosenWordArray.length}`); 
    let userGuesssArray= UserGuess.split(""); 

    attemptsLeft--

    for (let i=0; i< choosenWordArray.length; i++) {
        if (choosenWordArray[i].toLowerCase()===userGuesssArray[i].toLowerCase()) {
            matchedLettersArray[i]=userGuesssArray[i].toLowerCase(); 
        }
    }
    
    //check victory or loss
    if (matchedLettersArray.join("") === machinedChoosenWord.toLowerCase()) {
        window.alert("you won!")
        gameisRunning = false;
    } else if (attemptsLeft === 0) {
        window.alert("sorry you lost!")
        gameisRunning = false;
    }
}







/*i guesse O in colobia

loop trhough machined word 
1st is this letter presen, hor mnay timens and where

O matches the word at index 1 and 4


_O_O___*/







//step 3 gameply logic where for each iteration we check if the condition for winnin or loosing are valid

/////////Complexitiy in game= string array manipoulation, 3.1 machine word, must be put as an array where eache letter is 
// from Camel as a string to [C,A,M,E,L]











/*check only string way to do hangman
for (let letters of machinedChoosenWord) {
    console.log(letters)
    console.log(typeof(letters))
}*/









/*SCOPE

let scope= "Yo, I am global"

function scopeFunction () {
     scope= "Nope, I am in local SCOPE"
    
     if (false) {
        
        let scope= "Nope, I am in BLOCK SCOPE"
        
     }

}
console.log(scope)
scopeFunction()
console.log(scope)



*/
/*function sumNmbers (num1,num2) {
 num1+num2  
}

const checkVictory= (guesseNumber) => {
    if (guesseNumber===4) {
        return true
    }
}
 if (checkVictory(4)) {
    alert("congratulation you won the game")
 }


function sumNmbers (num1,num2) {
return num1+num2 //on return key word  more later
 
}
console.log(sumNmbers(5,7))

const arrowSumNumbers = (num1, num2) => {
    console.log(num1+num2)
    return num1+num2
}

arrowSumNumbers(3,2)

const myFavouriteNarutCh = character1 => {
    console.log(`I like ${character1}`)
}
myFavouriteNarutCh("Sasuke")

for (i=0; i<=10; i++ ) {
    myFavouriteNarutCh("Sasuke")
}*/



