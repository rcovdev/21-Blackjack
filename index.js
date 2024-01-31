const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♣", "♦", "♥", "♠"];

let deck = [];
let playerHand = [];
let dealerHand = [];

const createDeck = () => {
    for(let rank of ranks) {
        for(let suit of suits) {
            deck.push({ rank, suit, card: ({ rank, suit }) })
        };
    };
};

const shuffleDeck = () => {
    for(i = deck.length - 1; i > 0; i--) {
        let j = Math.trunc(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    };
};

const dealCard = () => {
    if (deck.length === 0) {
        throw new Error("EMPTY DECK!")
    }
    return deck.pop();
}

 
initialHands = () => {
    let playerHandTotal = 0;
    let dealerHandTotal = 0;
    
    for(i = 0; i < 2; i++) {
        playerHand.push(dealCard());
        dealerHand.push(dealCard());
    };

    playerHandTotal += calculateHandTotal(playerHand);
    dealerHandTotal += calculateHandTotal(dealerHand);

    return { playerHandTotal, dealerHandTotal }
};

const calculateHandTotal = (hand) => {
    let total = 0;
    let aceCount = 0;

    for(const card of hand) {
        if(card.rank === "A") {
            aceCount++;
            total += 1;
        } else if(card.rank === "J" || card.rank === "Q" || card.rank === "K") {
            total += 10;
        } else {
            total += parseInt(card.rank)
        };
    };

    while(aceCount > 0 && total + 10 <= 21) {
        total += 10;
        aceCount--;
    };

    return total;
};

// gameplay mechanics
const hit = () => {
    const newCard = dealCard();
    playerHand.push(newCard);
    const newPlayerTotal = calculateHandTotal(playerHand);

    console.log("PLAYER HITS!");
    console.log("PLAYER HAND:", playerHand);
    console.log("PLAYER TOTAL:", newPlayerTotal);

    if(newPlayerTotal > 21) {
        console.log("PLAYER BUST!");
    };
};

const stand = (playerHandTotal, dealerHandTotal) => {
    console.log("PLAYER STANDS!");

    while(dealerHandTotal < 17) {
        const newCard = dealCard();
        dealerHand.push(newCard);
        dealerHandTotal = calculateHandTotal(dealerHand);

        console.log("DEALER HITS!");
        console.log("DEALER HAND:", dealerHand);
        console.log("DEALER TOTAL:", dealerHandTotal);
    };

    determineWinner(playerHandTotal, dealerHandTotal);
};

const determineWinner = (playerTotal, dealerTotal) => {
    if(playerTotal > 21) {
        console.log("PLAYER BUSTS! DEALER WIN!");
    } else if(dealerTotal > 21) {
        console.log("DEALER BUSTS! PLAYER WIN!");
    } else if(playerTotal > dealerTotal) {
        console.log("PLAYER WINS!");
    } else if(dealerTotal > playerTotal) {
        console.log("DEALER WINS!");
    } else {
        console.log("TIE!");
    };
};

createDeck();
shuffleDeck();
const { playerHandTotal, dealerHandTotal } = initialHands();

console.log("PLAYER TOTAL:", playerHandTotal);
console.log("DEALER TOTAL:", dealerHandTotal);
