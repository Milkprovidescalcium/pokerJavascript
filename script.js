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
            alert('INVALID HAND!!!!!!');
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

let ifRaised = false;//checking if the bot or player has raised, if they have, instead of checking the next bot has to call to that value
function flipCommunityCards(){


    // console.log(cardsDealt)
    //*function to display the random numbers, this function calls the generateNums() function
    switch(stage){
        case 0:
            // console.log('preflop bet')
            for (let i = 0; i < 3; i++) {
                opponentDecision(i+1)
            }
            break
        case 1:// Flop

            for (let i = 0; i < 3; i++) {
                const cardDrawn = generateCardForHand('community'); //generates a card for the community hand
                setCardImage(cardDrawn, i + 1);

            }
            opp1ResultDiv.innerHTML = ""
            opp2ResultDiv.innerHTML = ""
            opp3ResultDiv.innerHTML = ""

            break;
        case 2:

            // console.log('flop bet')
            for (let i = 0; i < 3; i++) {
                opponentDecision(i+1) //call opponent decision three times, each time with a different opponent
            }

            break;
            
        case 3: // Turn
            const turnCard = generateCardForHand('community');
            setCardImage(turnCard, 4);

            // console.log('turn')
            opp1ResultDiv.innerHTML = ""
            opp2ResultDiv.innerHTML = ""
            opp3ResultDiv.innerHTML = ""
        break;

        case 4:
            // console.log('turn bet')
            for (let i = 0; i < 3; i++) {
                opponentDecision(i+1)
            }
            break;
        case 5: // River
            const riverCard = generateCardForHand('community');
            setCardImage(riverCard, 5);
            opp1ResultDiv.innerHTML = ""
            opp2ResultDiv.innerHTML = ""
            opp3ResultDiv.innerHTML = ""
        break;
        case 6:
            // console.log('river bet')
            for (let i = 0; i < 3; i++) {
                opponentDecision(i+1)
            }

            break;
        case 7:
            let hiders = document.getElementsByClassName('cardHider')

            for (let i = 0; i < hiders.length; i++){
                hiders[i].style.display = 'none';
            }

            checkOppHand()
            checkOppHand()
            checkOppHand()

            checkPlayerHand()
            checkWhoWins()
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
dealPlayerHand()

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

let whichOppHandVals = oppHandVals1
let whichOppHandSuites = oppHandSuites1

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
opponentDeal()
opponentDeal()
opponentDeal()

function revealOpponentHands(){
    setOpponentCardImageDeal(cardDrawn,whichCard,whichOpponent)

}

function combineArrays(handVals, communityVals, handSuites, communitySuites) {
    // Combine the passed-in value and suit arrays
    const wholeHandVals = handVals.concat(communityVals);
    const wholeHandSuites = handSuites.concat(communitySuites);

    // Sort the combined wholeHandVals array numerically
    wholeHandVals.sort(function(a, b) {
        return a - b;
    });

    // console.log(handVals)
    // console.log('whole hand values: ' + wholeHandVals);
    // console.log('whole hand suites: ' + wholeHandSuites);
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

let pairsFound = [];
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

let playerHandValue = 0;
let opp1HandValue = 0;
let opp2HandValue = 0;
let opp3HandValue = 0;

let highestHandValue = 0;//if handValue is greater than highestHand value, you win!
function checkPlayerHand() {

    
    // Generate the combined hand of player and community cards
    let { wholeHandVals, wholeHandSuites } = combineArrays(handVals, communityVals, handSuites, communitySuites);
    // Check for different hand types
    let resultText = '';
    if (checkStraight(wholeHandVals)) {
        resultText = 'player straight';
        playerHandValue  = 8;
    } else if (checkFour(wholeHandVals)) {
        resultText = 'player four of a kind!';
        playerHandValue  = 7;
    } else if (checkFull(wholeHandVals)) {
        resultText = 'player full house!';
        playerHandValue  = 6;
    } else if (checkFlush(wholeHandSuites)) {
        resultText = 'player flush!';
        playerHandValue  = 5;
    } else if (checkThree(wholeHandVals)) {
        resultText = 'player three of a kind!';
        playerHandValue  = 4;
    } else if (checkPair(wholeHandVals)) {
        resultText = checkPair(wholeHandVals) + 'player pairs!';
        playerHandValue  = checkPair(wholeHandVals);
    } else {
        resultText = 'player wow you have nothing!';
        playerHandValue  = 0;
    }

    // Display the result and update the pot and balance
    resultDiv.innerHTML = resultText;
    winResultDiv.innerHTML = `The value of your hand is ${playerHandValue}`;
    balance += pot;
    pot = 0;
    potDiv.innerHTML = (`L£${pot}`);
    handDiv.innerHTML = balance;
}

let oppHandValNum = 0;


let opp1ResultDiv = document.getElementById('opp1Result');
let opp2ResultDiv = document.getElementById('opp2Result');
let opp3ResultDiv = document.getElementById('opp3Result');


function checkOppHand(){

    let handValue = 0;

    let { wholeHandVals, wholeHandSuites } = combineArrays(whichOppHandVals, communityVals, whichOppHandSuites, communitySuites);
    
    
    // console.log(wholeHandVals)
    // console.log(wholeHandSuites)
    // Check for different hand types
    let resultText = '';
    if (checkStraight(wholeHandVals)) {
        resultText = 'straight';
        handValue = 8;
    } else if (checkFour(wholeHandVals)) {
        resultText = 'four of a kind!';
        handValue = 7;
    } else if (checkFull(wholeHandVals)) {
        resultText = 'full house!';
        handValue = 6;
    } else if (checkFlush(wholeHandSuites)) { 
        resultText = 'flush!';
        handValue = 5;
    } else if (checkThree(wholeHandSuites)) {
        resultText = 'three of a kind!';
        handValue = 4;
    } else if (checkPair(wholeHandVals)) {
        resultText = checkPair(wholeHandVals) + ' pairs!';
        handValue = checkPair(wholeHandVals);
        console.log(handValue)

    } else {
        resultText = 'wow they have nothing!';
        handValue = 0;
    }



    if (oppHandValNum === 1) {
        opp1HandValue = handValue;
    } else if (oppHandValNum === 2) {
        opp2HandValue = handValue;
    } else if (oppHandValNum === 3) {
        opp3HandValue = handValue;
    }

    // console.log(opp1HandValue)
    // console.log(opp2HandValue)
    // console.log(opp3HandValue)



    if (opponentFold1 === true) {
        opp1ResultDiv.innerHTML = 'FOLDEDDD'
        opp1HandValue = 0
    }else if(oppHandValNum === 1){
        opp1ResultDiv.innerHTML = resultText;
    }

    if (opponentFold2 === true) {
        opp2ResultDiv.innerHTML = 'FOLDEDDD'
        opp2HandValue = 0
    }else if(oppHandValNum === 2){
        opp2ResultDiv.innerHTML = resultText;
    }

    if (opponentFold3 === true) {
        opp3ResultDiv.innerHTML = 'FOLDEDDD'
        opp3HandValue = 0
    }else if(oppHandValNum === 3){
        opp3ResultDiv.innerHTML = resultText;
    }

    if(oppHandValNum === 1){ //what the freak does opphandvalnum mean

        whichOppHandVals = oppHandVals1
        whichOppHandSuites = oppHandSuites1

    }else if(oppHandValNum === 2){

        whichOppHandVals = oppHandVals2
        whichOppHandSuites = oppHandSuites2

    }else if(oppHandValNum===3){

        whichOppHandVals = oppHandVals3 
        whichOppHandSuites = oppHandSuites3

    }
    else{
        console.log('No opps left (opper stopper)')
    }

    oppHandValNum++

    resultDiv.innerHTML = resultText;
    winResultDiv.innerHTML = `The value of your hand is ${playerHandValue}`;
    // winResultDiv.innerHTML =`The value of opponent ${oppHandValNum}'s hand is ${handValue}`;
}


function checkWhoWins(){
    let winner = 'Player';
    let highestHandValue = playerHandValue;

    if (opp1HandValue > highestHandValue) {
        winner = 'Opponent 1';
        highestHandValue = opp1HandValue;

    }
    if (opp2HandValue > highestHandValue) {
        winner = 'Opponent 2';
        highestHandValue = opp2HandValue;

    }
    if (opp3HandValue > highestHandValue) {
        winner = 'Opponent 3';
        highestHandValue = opp3HandValue;

    }

    winResultDiv.innerHTML = `${winner} wins `
}

function fold(){
    console.log('folded')
}
function check(){
    console.log('checked')
}
const raiseContainerDiv = document.getElementById('raiseContainer')
let raiseState = 0;
function raise(){
    console.log('called')

    if(raiseState===0){
        raiseState++
        raiseContainerDiv.style.display = 'block'
    }else{
        raiseState = 0;
        raiseContainerDiv.style.display = 'none'
    }

}
let pot = 0;
let howMuch = 10;
let submitRaiseButtonDiv = document.getElementById('submitRaiseButton')
let howMuchRaiseDiv = document.getElementById('howMuchRaise')

function submitRaise(){
    pot += parseInt(howMuchRaiseDiv.value)
    potDiv.innerHTML = (`L£${pot}`)

    flipCommunityCards()
    stage++;
}

let potDiv = document.getElementById('pot')
let handDiv = document.getElementById('balance') 
function bet(){
    balance -=howMuch
    pot += howMuch
    potDiv.innerHTML = (`L£${pot}`)
    handDiv.innerHTML = balance
}

let opponentFold1 = false;
let opponentFold2 = false;
let opponentFold3 = false;


let botBalance1 = 1000000;
let botBalance2 = 1000000;
let botBalance3 = 1000000;

document.getElementById('opp1BalanceValue').innerHTML = (`L£${botBalance1}`)
document.getElementById('opp2BalanceValue').innerHTML = (`L£${botBalance2}`)
document.getElementById('opp3BalanceValue').innerHTML = (`L£${botBalance3}`)



let raiseWhaat;//VALUE OF HOW MUCH THE BOT HAS RAISED

function opponentDecision(whichOpponent){

    // console.log(opponentFold1)
    // console.log(opponentFold2)
    // console.log(opponentFold3)


    let randNum = generateRandNums(3) //four possible decisions the bots can make
    // console.log(whichOpponent)
    // console.log(randNum)

    if(whichOpponent===1 && opponentFold1 === false){
        if(randNum === 0){//*FOLDING----------
            // console.log(`opponent ${1} folded`)
            opp1ResultDiv.innerHTML = 'folded'
            opponentFold1 = true
        }
        if(randNum === 1){//*CHECKING/CALLING------------
            // console.log(`opponent ${1} checked`)

            opp1ResultDiv.innerHTML = 'checked'


        }
        if(randNum === 2){ //*RASING----------
            // console.log(`opponent ${1} raised`)
            botRaise(botBalance1) //raise with the first bot's balance
            botBalance1 -= botRaise(botBalance1);

            raiseWhaat = botRaise(botBalance1); //VALUE OF HOW MUCH THE BOT HAS RAISED
            botBalance1 -= raiseWhaat;
            document.getElementById('opp1BalanceValue').innerHTML = (`L£${botBalance1}`)

            pot += raiseWhaat;
            potDiv.innerHTML = (`L£${pot}`);

            opp1ResultDiv.innerHTML = (`raised ${raiseWhaat}`)

        }
    }else if(opponentFold1 === true){
        // console.log('opponent 1 has folded')
    }

    if(whichOpponent===2 && opponentFold2 === false){
        if(randNum === 0){//*FOLDING---------
            // console.log(`opponent ${2} folded`)
            opp2ResultDiv.innerHTML = 'folded'
            opponentFold2 = true
        }
        if(randNum === 1){//*CHECKING/CALLING----------
            // console.log(`opponent ${2} checked`)

            opp2ResultDiv.innerHTML = 'checked'
   
        }
        if(randNum === 2){//*RASING-----------
            // console.log(`opponent ${2} raised`)
            botRaise(botBalance2) //raise with the second bot's balance

            raiseWhaat = botRaise(botBalance2); //VALUE OF HOW MUCH THE BOT HAS RAISED
            botBalance2 -= raiseWhaat;
            document.getElementById('opp2BalanceValue').innerHTML = (`L£${botBalance2}`)
            pot += raiseWhaat;
            potDiv.innerHTML = (`L£${pot}`);

            opp2ResultDiv.innerHTML = (`raised ${raiseWhaat}`)


        }
    }else if(opponentFold2 === true){
        // console.log('opponent 2 has folded')
    }

    if(whichOpponent===3  && opponentFold3 === false){
        if(randNum === 0){//*FOLDING---------
            // console.log(`opponent ${3} folded`)
            opp3ResultDiv.innerHTML = 'folded'
            opponentFold3 = true
        }
        if(randNum === 1){//*CHECKING/CALLING-----------
            // console.log(`opponent ${3} checked`)

            opp3ResultDiv.innerHTML = 'checked'

        }
        if(randNum === 2){//*RASING------------
            // console.log(`opponent ${3} raised`)
            botRaise(botBalance3) //raise with the third bot's balance
            botBalance3 -= botRaise(botBalance3);

            raiseWhaat = botRaise(botBalance3); //VALUE OF HOW MUCH THE BOT HAS RAISED
            botBalance3 -= raiseWhaat;
            document.getElementById('opp3BalanceValue').innerHTML = (`L£${botBalance3}`)

            pot += raiseWhaat;
            potDiv.innerHTML = (`L£${pot}`);

            opp3ResultDiv.innerHTML = (`raised ${raiseWhaat}`)
        }
    }else if(opponentFold3 === true){
        // console.log('opponent 3 has folded')
    }

}



let maxPercent = 20; //*Max percent bots can raise is 20% of their hand

function playerFold(){
    console.log('folded')
    alert('never give up!')
}

function check(){
    flipCommunityCards()

}

function botRaise(whichBotBalance){//returns a random raise value
    let result = (whichBotBalance * maxPercent) / 100;
    let howMuchBotRaise = generateRandNums(result)
    // console.log(howMuchBotRaise)
    return howMuchBotRaise;
    // generateRandNums
}

//TODO: add bad bots, like the bots go all in every time
//TODO: add an equation to evaluate the 'value' of each hand

//TODO: Add logic for bot raising and checking
//TODO: Make the opponent cards be hidden until the last round. Or when they go all in

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

//Oct-9-2024------
//!PROBLEM, I dont know how do evaluate all the opponent hands!
//*SOLUTIION? Try and

//Oct-15-2024-----
//*BOTS CALLING LETS GO!
//*If someone has raised, then checking makes the bot match the raise
//*let callValue = raise (how much raised?)
//*At the beginning of each turn, the 'ifRaised' variable is zero
///*AAAND if someone raises, its now true, and then instead of checking, the call function is called
//* AAAND after the call function is called the 'ifRaised' variable is now false

//!PROBLEM, I don't want to keep coding the bots!
//*SOLUTION: Stop coding the bots!