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
    // this.cardsToDelete =[];
    //we'll make this with a loop too
    this.deck = {
        cards: [
            {suite: "heart", number: "King", value: 10, image: "images/KH.jpg" }, {suite: "heart", number: "Queen", value: 10, image: "images/QH.jpg"}, {suite: "heart", number: "Jack", value: 10, image: "images/JH.jpg"},
            {suite: "heart", number: "10", value: 10, image: "images/10H.jpg"}, {suite: "heart", number: "9", value: 9, image: "images/9H.jpg"}, {suite: "heart", number: "8", value: 8, image: "images/8H.jpg"},
            {suite: "heart", number: "7", value: 7, image: "images/7H.jpg"}, {suite: "heart", number: "6", value: 6, image: "images/6H.jpg"}, {suite: "heart", number: "5", value: 5, image: "images/5H.jpg"}, {suite: "heart", number: "4", value: 4, image: "images/5H.jpg"},
            {suite: "heart", number: "3", value: 3, image: "images/3H.jpg"}, {suite: "heart", number: "2", value: 2, image: "images/2H.jpg"}, {suite: "heart", number: "Ace", value: 1, image: "images/AH.jpg"},
            {suite: "spade", number: "King", value: 10, image: "images/KS.jpg"}, {suite: "spade", number: "Queen", value: 10, image: "images/QS.jpg"}, {suite: "spade", number: "Jack", value: 10, image: "images/JS.jpg"},
            {suite: "spade", number: "10", value: 10, image: "images/10S.jpg"}, {suite: "spade", number: "9", value: 9, image: "images/9S.jpg"}, {suite: "spade", number: "8", value: 8, image: "images/8S.jpg"},
            {suite: "spade", number: "7", value: 7, image: "images/7S.jpg"}, {suite: "spade", number: "6", value: 6, image: "images/6S.jpg"}, {suite: "spade", number: "5", value: 5, image: "images/5S.jpg"}, {suite: "spade", number: "4", value: 4, image: "images/4S.jpg"},
            {suite: "spade", number: "3", value: 3, image: "images/3S.jpg"}, {suite: "spade", number: "2", value: 2, image: "images/2S.jpg"}, {suite: "spade", number: "Ace", value: 1, image: "images/AS.jpg"},
            {suite: "club", number: "King", value: 10, image: "images/KC.jpg"}, {suite: "club", number: "Queen", value: 10, image: "images/QC.jpg"}, {suite: "club", number: "Jack", value: 10, image: "images/JC.jpg"},
            {suite: "club", number: "10", value: 10, image: "images/10C.jpg"}, {suite: "club", number: "9", value: 9, image: "images/9C.jpg"}, {suite: "club", number: "8", value: 8, image: "images/8C.jpg"}, {suite: "club", number: "7", value: 7, image: "images/7C.jpg"},
            {suite: "club", number: "6", value: 6, image: "images/6C.jpg"}, {suite: "club", number: "5", value: 5, image: "images/5C.jpg"}, {suite: "club", number: "4", value: 4, image: "images/4C.jpg"},
            {suite: "club", number: "3", value: 3, image: "images/3C.jpg"}, {suite: "club", number: "2", value: 2, image: "images/2C.jpg"}, {suite: "club", number: "Ace", value: 1, image: "images/AC.jpg"},
            {suite: "diamond", number: "King", value: 10, image: "images/KD.jpg"}, {suite: "diamond", number: "Queen", value: 10, image: "images/QD.jpg"}, {suite: "Diamond", number: "Jack", value: 10, image: "images/JD.jpg"},
            {suite: "diamond", number: "10", value: 10, image: "images/10D.jpg"}, {suite: "diamond", number: "9", value: 9, image: "images/9D.jpg"}, {suite: "diamond", number: "8", value: 8, image: "images/8D.jpg"}, {suite: "diamond", number: "7", value: 7, image: "images/7D.jpg"},
            {suite: "diamond", number: "6", value: 6, image: "images/6D.jpg"}, {suite: "diamond", number: "5", value: 5, image: "images/5D.jpg"}, {suite: "diamond", number: "4", value: 4, image: "images/4D.jpg"},
            {suite: "diamond", number: "3", value: 3, image: "images/3D.jpg"}, {suite: "diamond", number: "2", value: 2, image: "images/2D.jpg"}, {suite: "diamond", number: "Ace", value: 1, image: "images/AD.jpg"}],
        discard_pile: []
    };

    this.init = function (playerCount) {
        this.createPlayers(playerCount);
        this.dealInitialHand();
        this.createGameBoard();
        this.runGame();
        this.handleEvents();
        this.cardsToDelete =[];
    };

    this.handleEvents = function(){
        $(".playerCard0").on("click", this.playerPickCards);
        $(".playerCard1").on("click", this.playerPickCards);
        $(".playerCard2").on("click", this.playerPickCards);
        $(".playerCard3").on("click", this.playerPickCards);
        $(".playerCard4").on("click", this.playerPickCards);
        $(".discardBtn").on('click', this.discardCards.bind(this));
    };

    this.createGameBoard = function(){
        for ( let x =0; x < 5; x ++){
            let playerCards = $("<div>",{
                class: 'playerCard' + x
            });
            $(".playerHand").append(playerCards);
        }
        for ( let x =0; x < 5; x ++){
            let playerBottom = $("<div>",{
                class: 'bottom' + x
            });
            $(".bottomInfo").append(playerBottom);
        }

    };

    this.createPlayers = function (playerCount) {
        let counter = 1;
        for (let playerIndex = counter; playerIndex <= playerCount; playerIndex++) {
            let playerName = 'Player ' + counter;
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
        if (this.roundCounter < 15) {
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
            console.log(winningPlayer + ' Won with a value of ' + winningValue);
            $(".playerTurn").text(winningPlayer + ' Won with the lowest point total of ' + winningValue);
        }
    };

    this.playerPickCards = function(){
        let cardDelete = [];
        let cardClass = $(this).attr("class");
        // let cardPosition = parseInt(cardClass[cardClass.length-1]);
        let cardPosition = parseInt(cardClass.slice(-1));
        cardsDelete.push(cardPosition);
        this.cardsToDelete = cardDelete;
        console.log(this.cardsToDelete);
        // $(".discardBtn").click(this.discardCards(cardsToDelete));
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
        let playerTurnName = this.players[playerIndex].name;
        $(".playerTurn").text(playerTurnName + " - Round " + this.roundCounter);
        for(let card = 0; card < 5; card++){
            let numberInCard =  this.players[playerIndex].hand[card].number;
            let suiteInCard= this.players[playerIndex].hand[card].suite;
            let valueInCard = this.players[playerIndex].hand[card].value;
            let displayCard = this.players[playerIndex].hand[card].image;
            $(".playerCard"+ card).css("background-image", "url('"+ displayCard +"')");
            // $('#cardplace1').css("background-image", "url('" + imgArray[0] + "')");
            $(".bottom" + card).text(valueInCard + " points");
        }
        console.log('Discard cards by using game.discardCards([array of indexes]). Pass in the object of each card you want to discard. For example, to discard the' +
            ' first two cards it would look like: game.discardCards([0,1])');
    };
}

function CreateAPlayer(name) {
    this.name = name;
    this.hand = [];
}


