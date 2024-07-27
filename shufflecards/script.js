document.addEventListener('DOMContentLoaded', () => {
    const deck = document.getElementById('deck');
    const shuffleButton = document.getElementById('shuffleButton');
    
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    function createDeck() {
        let deck = [];
        for (let suit of suits) {
            for (let value of values) {
                deck.push(`${value}${suit}`);
            }
        }
        return deck;
    }

    function renderDeck(deck) {
        deckElement.innerHTML = '';
        for (let card of deck) {
            let cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = card;
            deckElement.appendChild(cardElement);
        }
    }

function shuffleDeck(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

const deckElement = document.getElementById('deck');
let deckOfCards = createDeck();
renderDeck(deckOfCards);

shuffleButton.addEventListener('click', () => {
    shuffleDeck(deckOfCards);
    renderDeck(deckOfCards);
});
});

  