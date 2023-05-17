let playerHand = [];
let dealerHand = [];
let sum = 0;
let dealerSum = 0;

function openInstructions () {
	let modal = document.getElementById("myModal");
	modal.style.display = "block";
}

function closeInstructions () {
	let modal = document.getElementById("myModal");
	modal.style.display = "none"
}

function hit () {
	// get a card
	let newCard = getCard();
	// add it to user's hand
	playerHand.push(newCard);

	// alert("New Card: " + newCard);

	// add to ui
	var userCards = document.getElementById("user-cards");
	userCards.innerText = userCards.innerText + ", " + newCard;

	// add new card to sum
	var yourSum = document.getElementById("sum");
	// display the new sum
	sum = sum + newCard;
	yourSum.innerText = ("Your Sum: " + sum);

	// check for bust
	if(sum > 21) {
		alert("You busted!");
	}
}

function stay () {

	var dealerCards = document.getElementById("dealer-cards");

	while (dealerSum < 16) {
		let dealerNewCard = getCard();
		dealerSum = dealerSum + dealerNewCard;
		dealerHand.push(dealerNewCard);
		dealerCards.innerText = dealerCards.innerText + ", " + dealerNewCard;
	}

	if (dealerSum > 21) {
		alert("You win!");
	} else if (dealerSum == sum) {
		alert("It's a tie.");
	} else if (dealerSum > sum) {
		alert("Dealer wins!");
	} else {
		alert("You win!");
	}

	var hitButton = document.getElementById("hit");
	hitButton.disabled = true;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = true;

	// dealer finishes drawing cards
	// check for end condition
}

function reset () {
	// alert("You pressed the reset button.")
	// reset js variables
	playerHand = [];
	dealerHand = [];
	sum = 0;
	dealerSum = 0;
	// alert("You got a " + getCard());

	// deal 2 cards to user
	let card1 = getCard();
	let card2 = getCard();
	playerHand.push(card1);
	playerHand.push(card2);

	// deal 2 cards to dealer
	let card3 = getCard();
	let card4 = getCard();
	dealerHand.push(card3);
	dealerHand.push(card4);
	dealerSum = card3 + card4;

	// alert("Player: " + playerHand);
	// alert("Dealer: " + dealerHand);

	var userCards = document.getElementById("user-cards");
	var dealerCards = document.getElementById("dealer-cards");
	var yourSum = document.getElementById("sum");

	userCards.innerText = ("Your Cards: " + playerHand);
	dealerCards.innerText = ("Dealer's Cards: " + dealerHand);
	yourSum.innerText = "Your Sum: " + (card1 + card2)

	// clear ui cards
	// update ui

	for(let i = 0; i < playerHand.length; i++){
		sum = sum + playerHand[i];


	var hitButton = document.getElementById("hit");
	hitButton.disabled = false;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = false;
}
}

function getCard () {
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random()*(maxInt-minInt+1)+minInt);
	return card
	// draw a card at random
}

function checkForEndCondition () {
	// get user sum and dealer sum
	// if dealer sum > 21 -> user wins
	// else if dealer sum = user sum -> tie
	// else if dealer sum > user sum -> dealer wins
	// else -> user wins
}