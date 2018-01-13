$(document).ready( initializeApp );
let game = null;
function initializeApp() {
    let playerCount = parseInt(prompt('How many players 2, 3 ,4?'));
    game = new Game(playerCount);
    game.init(playerCount);
}

function Game(playerCount) {
    this.playerCount = playerCount;
    this.roundCounter = 1;
    this.currentPlayer = 0;
    this.players = [];
    //we'll make this with a loop too
    this.deck = {
        cards: [
            {suite: "heart", number: "king", value: 10}, {suite: "heart", number: "queen", value: 10}, {suite: "heart", number: "jack", value: 10},
            {suite: "heart", number: "10", value: 10}, {suite: "heart", number: "9", value: 9}, {suite: "heart", number: "8", value: 8},
            {suite: "heart", number: "7", value: 7}, {suite: "heart", number: "6", value: 6}, {suite: "heart", number: "5", value: 5}, {suite: "heart", number: "4", value: 4},
            {suite: "heart", number: "3", value: 3}, {suite: "heart", number: "2", value: 2}, {suite: "heart", number: "ace", value: 1},
            {suite: "spade", number: "king", value: 10}, {suite: "spade", number: "queen", value: 10}, {suite: "spade", number: "jack", value: 10},
            {suite: "spade", number: "10", value: 10}, {suite: "spade", number: "9", value: 9}, {suite: "spade", number: "8", value: 8},
            {suite: "spade", number: "7", value: 7}, {suite: "spade", number: "6", value: 6}, {suite: "spade", number: "5", value: 5}, {suite: "spade", number: "4", value: 4},
            {suite: "spade", number: "3", value: 3}, {suite: "spade", number: "2", value: 2}, {suite: "spade", number: "ace", value: 1},
            {suite: "club", number: "king", value: 10}, {suite: "club", number: "queen", value: 10}, {suite: "club", number: "jack", value: 10},
            {suite: "club", number: "10", value: 10}, {suite: "club", number: "9", value: 9}, {suite: "club", number: "8", value: 8}, {suite: "club", number: "7", value: 7},
            {suite: "club", number: "6", value: 6}, {suite: "club", number: "5", value: 5}, {suite: "club", number: "4", value: 4},
            {suite: "club", number: "3", value: 3}, {suite: "club", number: "2", value: 2}, {suite: "club", number: "ace", value: 1},
            {suite: "diamond", number: "king", value: 10}, {suite: "diamond", number: "queen", value: 10}, {suite: "diamond", number: "jack", value: 10},
            {suite: "diamond", number: "10", value: 10}, {suite: "diamond", number: "9", value: 9}, {suite: "diamond", number: "8", value: 8}, {suite: "diamond", number: "7", value: 7},
            {suite: "diamond", number: "6", value: 6}, {suite: "diamond", number: "5", value: 5}, {suite: "diamond", number: "4", value: 4},
            {suite: "diamond", number: "3", value: 3}, {suite: "diamond", number: "2", value: 2}, {suite: "diamond", number: "ace", value: 1}],
        discard_pile: []
    };
    this.init = function (playerCount) {
        this.createPlayers(playerCount);
        this.dealInitialHand();
        this.runGame();
    };
    this.createPlayers = function (playerCount) {
        let counter = 1;
        for (let playerIndex = counter; playerIndex <= playerCount; playerIndex++) {
            let playerName = 'player ' + counter;
            let player = new CreateAPlayer(playerName);
            this.players.push(player);
            counter++;
        }
    };
    this.shuffleDeck = function () {
        let counter = this.deck.cards.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = this.deck.cards[counter];
            this.deck.cards[counter] = this.deck.cards[index];
            this.deck.cards[index] = temp;
        }
        return this.deck.cards;
    };
    this.deal = function (currentPlayer) {
        this.shuffleDeck();
        currentPlayer.hand.push(this.deck.cards.shift());
    };
    this.dealInitialHand = function () {
        let cardCounter = 5;
        for (let cardCountIndex = 0; cardCountIndex < cardCounter; cardCountIndex++) {
            for (let playerIndex = 0; playerIndex < this.players.length; playerIndex++) {
                this.deal(this.players[playerIndex]);
            }
        }
    };
    this.runGame = function () {
        if (this.roundCounter < 2) {
            this.showHand(this.currentPlayer);
        }else{
            let winningValue = 100;
            let winningPlayer = '';
            for(let playerIndex = 0; playerIndex < this.players.length; playerIndex++) {
                let currentValue = null;
                for(let cardIndex = 0; cardIndex < this.players[playerIndex].hand.length; cardIndex++) {
                    currentValue += this.players[playerIndex].hand[cardIndex].value;
                }
                console.log('Player ' + (playerIndex + 1) + ' is ' +currentValue);
                if(currentValue < winningValue) {
                    winningValue = currentValue;
                    winningPlayer = this.players[playerIndex].name;
                }
            }
            console.log(winningPlayer + ' won with a value of ' + winningValue);
        }
    };

    this.discardCards = function (deleteIndexArray) {
        if (deleteIndexArray.length > 3 || deleteIndexArray.length < 1) {
            return console.error('You can only discard 1 to 3 cards per turn');
        }



        if(this.deck.cards.length < deleteIndexArray.length) {
            for(let discardPileIndex = 0; discardPileIndex < this.deck.discard_pile.length; discardPileIndex++) {
                this.deck.cards.push(this.deck.discard_pile[discardPileIndex]);
            }
            this.shuffleDeck();
            this.deck.discard_pile = [];
        }

        deleteIndexArray.sort(function(a,b){return b-a});
        let currentPlayersHand = this.players[this.currentPlayer].hand;
        for(let cardIndex = 0; cardIndex < deleteIndexArray.length; cardIndex++) {
            let currentCard = currentPlayersHand.splice(deleteIndexArray[cardIndex], 1);
            this.deck.discard_pile.push(currentCard[0]);

            //check above

            this.deal(this.players[this.currentPlayer]);
        }
        console.log(this.players[this.currentPlayer].hand);
        if(this.currentPlayer < this.playerCount-1){
            this.currentPlayer++;
            this.showHand(this.currentPlayer);
        }else{
            this.currentPlayer = 0;
            this.roundCounter++;
            this.runGame();
        }

    };
    this.showHand = function(playerIndex) {
        console.log(this.players[playerIndex].hand);
        console.log('Discard cards by using game.discardCards([array of indexes]). Pass in the object of each card you want to discard. For example, to discard the' +
            ' first two cards it would look like: game.discardCards([0,1])');
    };
}

function CreateAPlayer(name) {
    this.name = name;
    this.hand = [];
}


