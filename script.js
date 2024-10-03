//? for the river:
//? create three radnom numbers (flop)
//? then one more (turn) and then the last one (river)

//? after each turn, you will bet
//jack = 11
//queen = 12
//king = 13
//ace 1


let stage = 1;
//stage 0 = pre flop bet
//stage 1 = flop
//stage 2 = bet
//stage 3 = turn
//stage 4 = bet
//stage 5 = river
//stage 6 = bet

//*ORDER OF HANDS (ascending order)
//*one pair
//*two pair
//*three of a kind
//*straight
//*flush
//*full house
//*four of a kind
//*straight flush
//*royal flush

//!PROBLEM, I dont know how do have 'limits' on my cards, like
//! you cant draw 5 jacks right? but how do I limit that?
//?maybe make an object filled with all card types, and then subract when cards are drawn?
//! wait, I have to randomize the suites too, uhh.

let deck = {
    1: 4, //aces
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 4,
    8: 4,
    9: 4,
    10: 4,
    11: 4, //jacks
    12: 4, //queens
    13: 4  //kings
};
//*making an array of suites, then when a random value from decks is created, it's then assigned a random suite
let suites = ['hearts', 'diamonds', 'clubs', 'spades']
let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    
//*AND THENNN, AFTER A RANDOM CARD AND SUITE IS MADE
//*THEY'RE PUSHED INTO AN ARRAY
//*AND THEN THE ARRAY IS CHECKED BEFORE GENERATING ANOTHER CARD TO PREVENT DUPLICARE VALUES

let cardsDealt = [];

let balance = 100;
const balanceText = document.getElementById('balance')
balanceText.innerHTML = balance;
const button = document.getElementById('temp')


const keysArray = Object.keys(deck)
// console.log(keysArray.length) //!*you have to push all keys into an array, and then get the array length to find the amount of keys in an object


let wholeHandVals = [];
let wholeHandSuites = [];

let handVals = [];
let handSuites =[];

let communityVals = [];
let communitySuites =[];

function generateRandNums(max){
    //*function to generate random numbers
    return Math.floor(Math.random()*max);
}

// Get all keys from the object


let card = ""
function generateCard(){
//check if cards have been dealt
    const key = Object.keys(deck);
    let randomCard = (generateRandNums(key.length)) + 1
    let randomSuite = suites[generateRandNums(suites.length)]
    // console.log('suite: ' + randomSuite)
    // console.log('card ' + randomCard)
    card = randomCard + "_" + randomSuite
    // let card = randomCard + "_" + randomSuite

    if(cardsDealt.length <52){
        while (cardsDealt.includes(card)){ //*SOLUTON: run a loop that continues generating random cards as long as the cardsDealt array includes the random card
            randomCard = (generateRandNums(key.length)) + 1
            randomSuite = suites[generateRandNums(suites.length)]
            card = randomCard + "_" + randomSuite
        }
        cardsDealt.push(card)
       
        communityVals.push(randomCard)
        communitySuites.push(randomSuite)
        return card;


    }else{
        console.log('all cards dealt bozo')
    }

    // console.log('card: ' + card)
    // console.log(cardsDealt)

//if the cardsDealt array includes the card, generate new card
}

let communityCardsArray = [];
let cardDrawn;
function flipCommunityCards(){

    // console.log(cardsDealt)
    //*function to display the random numbers, this function calls the generateNums() function
    switch(stage){
        case 1:
            console.log('flop') //draw three random cards
            for(let i = 0; i < 3; i++){ 

                cardDrawn = generateCard()
                communityCardsArray.push(cardDrawn) //add the drawn card to the community cards
             
                // let temp = cardDrawn.split('_')[1]
                // console.log(temp)
            }
            document.getElementById('communityCards').innerHTML = communityCardsArray
            console.log(communityCardsArray)
        break;
        case 2:
            console.log('turn')

            cardDrawn = generateCard()
            communityCardsArray.push(cardDrawn) //add the drawn card to the community cards
      
            document.getElementById('communityCards').innerHTML = communityCardsArray
            console.log(communityCardsArray)
        break;
        case 3:
            console.log('river')
            cardDrawn = generateCard()
            communityCardsArray.push(cardDrawn) //add the drawn card to the community cards
       
            
            document.getElementById('communityCards').innerHTML = communityCardsArray
            console.log(communityCardsArray)
        break;
        default:
            console.log('bruh error')
        break;
    }
    stage++;
}

let hand = []
function dealCards(){
    for(let i = 0; i < 2; i++){
        let cardDrawn = generateCard()
        hand.push(cardDrawn)
  
    }
    console.log('hand: ' + hand)
    document.getElementById('hand').innerHTML = hand

    // console.log('cards dealt ' + cardsDealt)
}

let pot = 0;
let howMuch = 10;

let potDiv = document.getElementById('pot')
let handDiv = document.getElementById('balance') 
function bet(){
    balance -=howMuch
    pot += howMuch
    potDiv.innerHTML = pot
    handDiv.innerHTML = balance
}

function combineArrays(){
    wholeHandVals = []; 
    wholeHandSuites = []; 

    wholeHandVals = wholeHandVals.concat(handVals, communityVals);
    wholeHandSuites = wholeHandSuites.concat(handSuites, communitySuites);

    //this function sorts the array numerically
    wholeHandVals.sort(function(a, b) {
        return a - b;
    });

    // console.log('whole hand values: ' + wholeHandVals);
    // console.log('whole hand suites: ' + wholeHandSuites);
}
// let tempArray = ["diamonds", "diamonds", "hearts","hearts","hearts","hearts","spades"]

function checkFlush(){
    //*if suite appears 5 times in whole hand, return true
    for(let index = 0; index < suites.length; index++){ //checking for every possible suite if is contained in the array of suites in hand
        let searchString = suites[index];
        let count = 0;  

        for(let i = 0; i < wholeHandSuites.length; i++){
            if(wholeHandSuites[i]===searchString){//if it's found a suite that matches 'searchString' which is checked for every suite 
                count++;
            }
            if(count >= 5){
                // console.log('is a flush!')
                return true;
            }
        }
    }
    // console.log('not a flush :(')
    return false;
    
}

let startingIndex = 0;
let difference = -1;
// let tempArray = [2,3,3,4,5,6,7]
function checkStraight(){


//*checking through all the values in the array, comapring them to the next value above it, by the difference variable
    for(let index = 0; index < wholeHandVals.length; index++){
        difference = -1; 

        for(let i = 1; i < wholeHandVals.length - index; i++){
            startingIndex = wholeHandVals[0]
            if(startingIndex - wholeHandVals[index + i] === difference){
                difference--;
                // console.log('passed')
            }else{
                startingIndex = wholeHandVals[1]
                break
            }
        }
        if(difference <= -5){
            // console.log('is a straight!')
            return true;
        }
    }
    // console.log('not a straight :(')
    return false;
}

function checkPair(){
    let pairNum = 0;
    let countedPairs = new Set(); //*sets in javascript are objects that store UNIQUE values, if you try to give a duplicate value, the duplicate value will be ignored

    for(let index = 0; index < values.length; index++){ //checking for every possible suite if is contained in the array of suites in hand
        let searchPair = values[index];
        let pairCount = 0;  
        if (countedPairs.has(searchPair)) {
            continue;  // if searchValue is already found in the set, skip the value
        }

        for(let i = 0; i < wholeHandVals.length; i++){
            if(wholeHandVals[i]===searchPair){//if it's found a suite that matches 'searchString' which is checked for every suite 
                pairCount++;
            }
            if(pairCount === 2){
                // console.log('is a pair!')
                pairNum++;
                countedPairs.add(searchPair);
                break;
            }
        }
    }
    // console.log('not a pair :(')
    return pairNum;

}
function checkThree(){

    for(let index = 0; index < values.length; index++){ //checking for every possible suite if is contained in the array of suites in hand
        let searchThree = values[index];
        let threeCount = 0;  

        for(let i = 0; i < wholeHandVals.length; i++){
            if(wholeHandVals[i]===searchThree){//if it's found a suite that matches 'searchString' which is checked for every suite 
                threeCount++;
            }
            if(threeCount === 3){
                // console.log('is a three!')
                return true;
            }
        }
    }
    // console.log('not a three :(')
    return false;

}
function checkFour(){
    for(let index = 0; index < values.length; index++){ //checking for every possible suite if is contained in the array of suites in hand
        let searchFour = values[index];
        let fourCount = 0;  

        for(let i = 0; i < wholeHandVals.length; i++){
            if(wholeHandVals[i]===searchFour){//if it's found a suite that matches 'searchString' which is checked for every suite 
                fourCount++;
            }
            if(fourCount === 4){
                // console.log('is a four!')
                return true;
            }
        }
    }
    // console.log('not a four :(')
    return false;
}
function checkFull(){
    //* if checkPair, and checkThree both return true, return true
    if(checkThree() && checkPair()){
        // console.log('is a full!')
        return true;
    }else{
        // console.log('not a full :(')
        return false;
    }
}

let resultDiv = document.getElementById('result')
let resultText = ''
let winResultDiv = document.getElementById('winResult')
function checkHand(){
    combineArrays()

    checkPair()
    checkThree()
    checkFour()
    checkFlush()
    checkFull()
    checkStraight()
    if(checkStraight()){
        // console.log('straight!')
        resultText = 'straight'
    }else if(checkFour()){
        // console.log('four of a kind!')
        resultText = 'four of a kind!'
    }else if(checkFull()){
        // console.log('full house!')
        resultText = 'full house!'
    }else if(checkFlush()){
        // console.log('flush!')
        resultText = 'flush!'
    }else if(checkThree()){
        // console.log('three of a kind!')
        resultText = 'three of a kind!'
    }else if(checkPair()){
        // console.log(checkPair() + ' pairs!')
        resultText = checkPair() + ' pairs!'
    }else{
        // console.log('wow you have nothing!')
        resultText = 'wow you have nothing!'
    }

    // console.log('you win the ' + potDiv.innerHTML + ' pot')
    resultDiv.innerHTML = resultText

    winResultDiv.innerHTML =  'you win the pot of ' + potDiv.innerHTML
    balance += pot
    pot = 0
    potDiv.innerHTML = pot
    handDiv.innerHTML = balance

   
}

//TODO: add bad bots, like the bots go all in every time
//TODO: check how many pairs are in your hand

//Oct-1-2024---------
//!PROBLEM, when I'm trying to push the seperate values and suites to the wholeHand array
//!i'm calling the generateCard function AGAIN, which causes a new value and array to be generated
//*SOLUTION: split the existing card into two parts, and push those parts to the respective arrays
//!PROBLEM, values appear twice in the console log, uhh why?
//*SOLUTION: you dummy! you were pushing the values to the array twice! You were already pushing them in the generateCards() function, and you pushed them again when drawing and flipping! How silly

