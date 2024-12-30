const cardGrid = document.getElementById("card-grid");
const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");
const turnInfo = document.getElementById("turn");
const winMessage = document.getElementById("win-message");
const winnerElement = document.getElementById("winner");

let cards = [
    { id: 1, image: "./cards/i1.png" },
    { id: 2, image: "images/f1_2.png" },
    { id: 3, image: "images/f1_3.png" },
    { id: 4, image: "images/f1_4.png" },
    { id: 5, image: "images/f1_5.png" },
    { id: 6, image: "images/f1_6.png" },
    { id: 7, image: "images/f1_7.png" },
    { id: 8, image: "images/f1_8.png" },
    { id: 1, image: "./cards/i1.png" },
    { id: 2, image: "images/f1_2.png" },
    { id: 3, image: "images/f1_3.png" },
    { id: 4, image: "images/f1_4.png" },
    { id: 5, image: "images/f1_5.png" },
    { id: 6, image: "images/f1_6.png" },
    { id: 7, image: "images/f1_7.png" },
    { id: 8, image: "images/f1_8.png" }
];

let flippedCards = [];
let matchedCards = [];
let currentPlayer = 1;
let score1 = 0;
let score2 = 0;

function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.id = card.id;

    const cardImage = document.createElement("img");
    cardImage.src = card.image;
    cardImage.alt = card.id;

    cardElement.appendChild(cardImage);
    cardElement.addEventListener("click", () => flipCard(cardElement));
    return cardElement;
}

function flipCard(cardElement) {
    if (flippedCards.length < 2 && !cardElement.classList.contains("flipped")) {
        cardElement.classList.add("flipped");
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.id === secondCard.dataset.id) {
        matchedCards.push(firstCard, secondCard);
        updateScore();
        if (matchedCards.length === cards.length) {
            showWinMessage();
        }
        flippedCards = [];
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnInfo();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            flippedCards = [];
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateTurnInfo();
        }, 1000);
    }
}

function updateScore() {
    if (currentPlayer === 1) {
        score1 += 10;
        score1Element.textContent = score1;
    } else {
        score2 += 10;
        score2Element.textContent = score2;
    }
}

function updateTurnInfo() {
    turnInfo.textContent = `Player ${currentPlayer}'s Turn`;
}

function showWinMessage() {
    winMessage.style.display = "block";
    winnerElement.textContent = score1 > score2 ? "1" : "2";
}

function initializeGame() {
    shuffle(cards);
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardGrid.appendChild(cardElement);
    });
}

initializeGame();
