// STEP 1
const playerHand = document.querySelector(".player-hand .cards");
const dealerHand = document.querySelector(".dealer-hand .cards");
const playerScore = document.querySelector(".player-score");
const dealerScore = document.querySelector(".dealre-score");
const messageBoard = document.querySelector(".message-board p");
const dealButton = document.querySelector(".deal");
const hitButton = document.querySelector(".hit");
const stayButton = document.querySelector(".stay");

// STEP 2
let deck = [];
let playerCards = [];
let delerCards = [];

// STEP 3
function createDeck() {
    // 1. Creates arrays of suits and ranks:
    // Establishes the possible values for each card.
    const suits = ["♥", "♣", "♦", "♠"];
    const ranks = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    // 2. Initializes the deck array:
    // Creates an empty array to hold card objects.
    deck = []

    // 3. Iterates through suits and ranks:
    // Uses nested loops to create a card object for
    // each combination of suit and rank.
    for(let suit of suits) {
        // 4. Assigns properties to each card object:
        // Includes suit, rank, and value.

        // 5. Utilizes getCardValue() to assign values:
        // Determines the appropiate value based on the card's rank
        // with ace starting as 11.
        for(let rank of ranks) {
            const card = {
                suit: suit,
                rank: rank,
                value: getCardValue(rank)
            };
            // 6. Pushes card objects to the deck:
            // Adds each card object to the deck array,
            // building a complete deck of 52 cards.
            deck.push(card);
        };
    };
};

// 5. getCardValue() assign values:
// Determines the appropiate value based on the card's rank
// with ace starting as 11.
function getCardValue(rank) {
    if(rank === "ACE") {
        return 11; // ace can be 1 or 11, start with 11
    } else if(rank === "J" || rank === "Q" || rank === "K") {
        return 10;
    } else {
        return parseInt(rank);
    };
};

// STEP 4
function shuffleDeck() {
    // 1. Iterates through the deck in reverse order:
    // Repeating this process multiple times effectively
    // shuffles the cards in the deck.
    for (let i = deck.length - 1; i > 0; i--) {
        // 2. Generates a random index:
        // In each iteration, randomly selects an index
        // within the current bounds of the array.
        const j = Math.trunc(Math.random() * (i + 1));
        // 3. Swap cards:
        // Using array destructuring exchanges the card at the 
        // current index with the card at the randomly generated index.
        [deck[i], deck[j]] = [deck[j], deck[i]] // swap card positions
    };
};

function dealCards() {

}

function calculateScore(cards) {

}

function hit() {

}

function stay() {

}

function dealerPlay() {

}

function checkWinner() {

}

// game setup
createDeck();
shuffleDeck();

// event listeners
dealButton.addEventListener("click", dealCards);
hitButton.addEventListener("click", hit);
stayButton.addEventListener("click", stay);