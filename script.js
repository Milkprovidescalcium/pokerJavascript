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
                communitySuites.push(cardDrawn.split('_')[1])
                communityVals.push(cardDrawn.split('_')[0])
                // let temp = cardDrawn.split('_')[1]
                // console.log(temp)
            }
            console.log(communityCardsArray)
        break;
        case 2:
            console.log('turn')

            cardDrawn = generateCard()
            communityCardsArray.push(cardDrawn) //add the drawn card to the community cards
            communitySuites.push(cardDrawn.split('_')[1])
            communityVals.push(cardDrawn.split('_')[0])
            console.log(communityCardsArray)
        break;
        case 3:
            console.log('river')
            cardDrawn = generateCard()
            communityCardsArray.push(cardDrawn) //add the drawn card to the community cards
            communitySuites.push(cardDrawn.split('_')[1])
            communityVals.push(cardDrawn.split('_')[0])
            
          
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
        handSuites.push(cardDrawn.split('_')[1])
        handVals.push(cardDrawn.split('_')[0])
    }
    console.log('hand: ' + hand)

    // console.log('cards dealt ' + cardsDealt)
}

function bet(){

}
function checkFlush(){
    //*if suite appears 5 times in whole hand, return true
}
function combineArrays(){
    wholeHandVals = wholeHandVals.concat(handVals, communityVals);
    wholeHandSuites = wholeHandSuites.concat(handSuites, communitySuites);


    console.log('whole hand values: ' + wholeHandVals);
    console.log('whole hand suites: ' + wholeHandSuites);
}

let startingIndex = 0;
let difference = -1;

let tempArray = [1,2,3,4,5,6]
function checkStraight(){
    for(let i = 1; i < tempArray.length; i++){
        let startingIndex = tempArray[0]
        if(startingIndex - tempArray[i] === difference){
            difference--;
            console.log('passed')

        }else{
            break
        }

    }
    if(difference <= -5){
        console.log('is a straight!')
    }else{
        console.log('not a straight :(')
    }
}

function checkPair(){

}
function checkThree(){

}
function checkFour(){

}
function checkFull(){
    //* if checkPair, and checkThree both return true, return true
}
//TODO: add betting function, to bet
//TODO: display the community cards and your hand (try ascii first)
//TODO: create card assets


//Oct-1-2024---------
//!PROBLEM, when I'm trying to push the seperate values and suites to the wholeHand array
//!i'm calling the generateCard function AGAIN, which causes a new value and array to be generated
//*SOLUTION: split the existing card into two parts, and push those parts to the respective arrays
//!PROBLEM, values appear twice in the console log, uhh why?

