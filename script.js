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


const cardImages = {
    'BACK': 'light/BACK.png',
    //CLUBS
    '1_clubs': 'light/A-C.png',
    '2_clubs': 'light/2-C.png',
    '3_clubs': 'light/3-C.png',
    '4_clubs': 'light/4-C.png',
    '5_clubs': 'light/5-C.png',
    '6_clubs': 'light/6-C.png',
    '7_clubs': 'light/7-C.png',
    '8_clubs': 'light/8-C.png',
    '9_clubs': 'light/9-C.png',
    '10_clubs': 'light/10-C.png',
    '11_clubs': 'light/J-C.png',
    '12_clubs': 'light/Q-C.png',
    '13_clubs': 'light/K-C.png',
    //DIAMONDS
    '1_diamonds': 'light/A-D.png',
    '2_diamonds': 'light/2-D.png',
    '3_diamonds': 'light/3-D.png',
    '4_diamonds': 'light/4-D.png',
    '5_diamonds': 'light/5-D.png',
    '6_diamonds': 'light/6-D.png',
    '7_diamonds': 'light/7-D.png',
    '8_diamonds': 'light/8-D.png',
    '9_diamonds': 'light/9-D.png',
    '10_diamonds': 'light/10-D.png',
    '11_diamonds': 'light/J-D.png',
    '12_diamonds': 'light/Q-D.png',
    '13_diamonds': 'light/K-D.png',
    //HEARTS
    '1_hearts': 'light/A-H.png',
    '2_hearts': 'light/2-H.png',
    '3_hearts': 'light/3-H.png',
    '4_hearts': 'light/4-H.png',
    '5_hearts': 'light/5-H.png',
    '6_hearts': 'light/6-H.png',
    '7_hearts': 'light/7-H.png',
    '8_hearts': 'light/8-H.png',
    '9_hearts': 'light/9-H.png',
    '10_hearts': 'light/10-H.png',
    '11_hearts': 'light/J-H.png',
    '12_hearts': 'light/Q-H.png',
    '13_hearts': 'light/K-H.png',
    //SPADES
    '1_spades': 'light/A-P.png',
    '2_spades': 'light/2-P.png',
    '3_spades': 'light/3-P.png',
    '4_spades': 'light/4-P.png',
    '5_spades': 'light/5-P.png',
    '6_spades': 'light/6-P.png',
    '7_spades': 'light/7-P.png',
    '8_spades': 'light/8-P.png',
    '9_spades': 'light/9-P.png',
    '10_spades': 'light/10-P.png',
    '11_spades': 'light/J-P.png',
    '12_spades': 'light/Q-P.png',
    '13_spades': 'light/K-P.png',


}

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



function generateCardForHand(whichHand) {//by default, the hand that is drawin is a community card
    let randomCard, randomSuite, card;
    
    do { //generate random card here
        randomCard = generateRandNums(values.length) + 1;
        randomSuite = suites[generateRandNums(suites.length)];
        card = randomCard + "_" + randomSuite;
    } while (cardsDealt.includes(card));

    cardsDealt.push(card);

    switch (whichHand) {
        case 'community':
            communityVals.push(randomCard);
            communitySuites.push(randomSuite);
            break;
            
        case 'player':
            handVals.push(randomCard);
            handSuites.push(randomSuite);
            break;
            
        case 'opp1':
            oppHandVals1.push(randomCard);
            oppHandSuites1.push(randomSuite);
            break;
            
        case 'opp2':
            oppHandVals2.push(randomCard);
            oppHandSuites2.push(randomSuite);
            break;
            
        case 'opp3':
            oppHandVals3.push(randomCard);
            oppHandSuites3.push(randomSuite);
            break;
            
        default:
            alert('Invalid hand type');
    }

    return card;
}

function generateHandCard(){

}





function setCardImage(card,which) {
    // console.log(card)
    // console.log(which)
    let cardDiv = document.getElementById('card' + which.toString());
    cardDiv.style.backgroundImage = `url(${cardImages[card]})`;
}
function setCardImageDeal(card,which) { //*I KNOW IT'S BAD PRACTICE SHUT UP
    // console.log(card)
    // console.log(which)

    let cardDiv = document.getElementById('handCard' + which.toString());
    cardDiv.style.backgroundImage = `url(${cardImages[card]})`;
}
function setOpponentCardImageDeal(card,which,whichOpp) { //*I KNOW IT'S BAD PRACTICE SHUT UP
    // console.log(card)
    // console.log(which)
    // console.log(whichOpp)
    let cardDiv = document.getElementById('opponent' + whichOpp.toString() + 'Card' + which.toString());
    cardDiv.style.backgroundImage = `url(${cardImages[card]})`;
}




let communityCardsArray = [];
let cardDrawn;
function flipCommunityCards(){

    // console.log(cardsDealt)
    //*function to display the random numbers, this function calls the generateNums() function
    switch(stage){
        case 1:
            case 1: // Flop
            for (let i = 0; i < 3; i++) {
                const cardDrawn = generateCardForHand('community'); //generates a card for the community hand
                setCardImage(cardDrawn, i + 1);
            }
            break;
        case 3: // Turn
            const turnCard = generateCardForHand('community');
            setCardImage(turnCard, 4);
        break;
        case 5: // River
            const riverCard = generateCardForHand('community');
            setCardImage(riverCard, 5);
        break;
        default:
            console.log('bruh error')

    }
    stage++;
}

let hand = []
let dealt = false;
function dealPlayerHand() {
    if (handVals.length === 0) {
        for (let i = 0; i < 2; i++) {
            let cardDrawn = generateCardForHand('player'); // false means it's not a community card
            setCardImageDeal(cardDrawn, i + 1);
        }
    }
}
let opponentHand1 = [];
let opponentHand2 = [];
let opponentHand3= [];

let oppHandVals1 = [];
let oppHandVals2 = [];
let oppHandVals3 = [];
let oppHandSuites1 = [];
let oppHandSuites2 = [];
let oppHandSuites3 = [];
 
let opponentDealing = 1;
let opponentDealt = false;

let whichOpponent = 1;
let whichOpponentCard = 1;
function opponentDeal(){
    let cardDrawn;
        for(let i = 0; i < 2; i++){

            if(whichOpponent === 1){

                cardDrawn = generateCardForHand('opp1')
                // console.log('opponentHand1: ' + opponentHand1)
            }else if(whichOpponent === 2){

                cardDrawn = generateCardForHand('opp2')

                // console.log('opponentHand2: ' + opponentHand2)
            }else if(whichOpponent === 3){

                cardDrawn = generateCardForHand('opp3')

                // console.log('opponentHand3: ' + opponentHand3)
            }

            let whichCard = i +1
            
            // setCardImageDeal(cardDrawn,whichCard)
            setOpponentCardImageDeal(cardDrawn,whichCard,whichOpponent)
        }
        whichOpponent++;
        // console.log(whichOpponent)
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
function combineArrays(handVals, communityVals, handSuites, communitySuites) {
    // Combine the passed-in value and suit arrays
    const wholeHandVals = handVals.concat(communityVals);
    const wholeHandSuites = handSuites.concat(communitySuites);

    // Sort the combined wholeHandVals array numerically
    wholeHandVals.sort(function(a, b) {
        return a - b;
    });

    console.log(handVals)
    console.log('whole hand values: ' + wholeHandVals);
    console.log('whole hand suites: ' + wholeHandSuites);
    return{
        wholeHandVals,
        wholeHandSuites
    }
}
// let tempArray = ["diamonds", "diamonds", "hearts","hearts","hearts","hearts","spades"]

function checkFlush(wholeHandSuites){
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
function checkStraight(hand){


//*checking through all the values in the array, comapring them to the next value above it, by the difference variable
    for(let index = 0; index < hand.length; index++){
        difference = -1; 

        for(let i = 1; i < hand.length - index; i++){
            startingIndex = hand[0]
            if(startingIndex - hand[index + i] === difference){
                difference--;
                // console.log('passed')
            }else{
                startingIndex = hand[1]
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

function checkPair(wholeHandVals){
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
function checkThree(wholeHandVals){

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
function checkFour(wholeHandVals){
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
function checkFull(wholeHandVals){
    //* if checkPair, and checkThree both return true, return true
    if (checkThree(wholeHandVals) && checkPair(wholeHandVals) > 0) {
        return true; // Full house found
    } else {
        return false; // Not a full house
    }
    
}

let resultDiv = document.getElementById('result')
let resultText = ''
let winResultDiv = document.getElementById('winResult')

let handValue = 0; //if you're hand value is the highest you win!
function checkPlayerHand() {
    // Generate the combined hand of player and community cards
    const { wholeHandVals, wholeHandSuites } = combineArrays(handVals, communityVals, handSuites, communitySuites);
    // Check for different hand types
    let resultText = '';
    if (checkStraight(wholeHandVals)) {
        resultText = 'straight';
        handValue = 6;
    } else if (checkFour(wholeHandVals)) {
        resultText = 'four of a kind!';
        handValue = 5;
    } else if (checkFull(wholeHandVals)) {
        resultText = 'full house!';
        handValue = 4;
    } else if (checkFlush(wholeHandSuites)) {
        resultText = 'flush!';
        handValue = 3;
    } else if (checkThree(wholeHandVals)) {
        resultText = 'three of a kind!';
        handValue = 2;
    } else if (checkPair(wholeHandVals) > 0) {
        resultText = checkPair(wholeHandVals) + ' pairs!';
        handValue = 1;
    } else {
        resultText = 'wow you have nothing!';
        handValue = 0;
    }

    // Display the result and update the pot and balance
    resultDiv.innerHTML = resultText;
    winResultDiv.innerHTML = `The value of your hand is ${handValue}`;
    balance += pot;
    pot = 0;
    potDiv.innerHTML = pot;
    handDiv.innerHTML = balance;
}
function checkOppHand(){
    console.log(oppHandVals1)

    const { wholeHandVals, wholeHandSuites } = combineArrays(oppHandVals1, communityVals, oppHandSuites1, communitySuites);
    // Check for different hand types
    let resultText = '';
    if (checkStraight(wholeHandVals)) {
        resultText = 'straight';
        handValue = 6;
    } else if (checkFour(wholeHandVals)) {
        resultText = 'four of a kind!';
        handValue = 5;
    } else if (checkFull(wholeHandVals)) {
        resultText = 'full house!';
        handValue = 4;
    } else if (checkFlush(wholeHandSuites)) {
        resultText = 'flush!';
        handValue = 3;
    } else if (checkThree(wholeHandSuites)) {
        resultText = 'three of a kind!';
        handValue = 2;
    } else if (checkPair(wholeHandVals) > 0) {
        resultText = checkPair(wholeHandVals) + ' pairs!';
        handValue = 1;
    } else {
        resultText = 'wow they have nothing!';
        handValue = 0;
    }
    resultDiv.innerHTML = resultText;
    winResultDiv.innerHTML = `The value of their hand is ${handValue}`;
}

//TODO: add bad bots, like the bots go all in every time
//TODO: add an equation to evaluate the 'value' of each hand

//Oct-1-2024---------DONE
//!PROBLEM, when I'm trying to push the seperate values and suites to the wholeHand array
//!i'm calling the generateCard function AGAIN, which causes a new value and array to be generated
//*SOLUTION: split the existing card into two parts, and push those parts to the respective arrays
//!PROBLEM, values appear twice in the console log, uhh why?
//*SOLUTION: you dummy! you were pushing the values to the array twice! You were already pushing them in the generateCards() function, and you pushed them again when drawing and flipping! How silly

//Oct-8-2024-------DONE
//!PROBLEM, the 'handvals' arent actually hand vals. They're just an extension of the community hand
//*SOLUTION, make handVals a real thing? Push the items to handVals and then merge them (for real this time)
//*SOLUTION: handle all the pushing array sorting stuff in the generateCard function