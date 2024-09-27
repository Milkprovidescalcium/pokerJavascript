//? for the river:
//? create three radnom numbers (flop)
//? then one more (turn) and then the last one (river)

//? after each turn, you will bet
//jack = 11
//queen = 12
//king = 13
//ace 1


let stage = 0;
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



function checkEmpty(){
    //* a function to check if any of the keys values from the deck are 0
    //* if they are, remove them

    //forloop goes through all keys in deck
    ///if a key's value = 0, delete[key]
}
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
        return card

    }else{
        console.log('all cards dealt bozo')
    }

    // console.log('card: ' + card)
    // console.log(cardsDealt)

//if the cardsDealt array includes the card, generate new card
}

let communityCardsArray = [];
function flipCommunityCards(){
    let dealt = generateCard() //draw a card

    //*function to display the random numbers, this function calls the generateNums() function
    switch(stage){
        case 1:
            console.log('flop') //draw three random cards
            for(let i = 0; i < 3; i++){ 
                dealt = generateCard()
                communityCardsArray.push(dealt) //add the drawn card to the community cards
            }
            console.log(communityCardsArray)
        break;
        case 2:
            console.log('turn')
            dealt = generateCard()
            communityCardsArray.push(dealt)
            console.log(communityCardsArray)
        break;
        case 3:
            console.log('river')
            dealt = generateCard()
            communityCardsArray.push(dealt)
            console.log(communityCardsArray)
        break;
        default:
            console.log('bruh error')
        break;
    }
    stage++;
 }

//TODO:FOR GENERATING CARDS---------------------
//TODO: Generate random card
//TODO: Check if the random card has already been dealt
//TODO: IF no, deal the cards once the card is cleared
//TODO: IF yes, reroll new card
//TODO:
