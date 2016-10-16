function PokerHand(hand) {
    this.weights = {
        suits: "cdhs",
        values: "AKQJ098765432"
    };
    var cards = [];
    this.category = "";
    
    /*
    this.suitsMatch = true;
    this.valuesMatch = true;
    */
    
    for (var i = 0; i < hand.length; i += 2) {
        cards.push(hand.charAt(i) + hand.charAt(i + 1));
    }
    
    cards = this.sortCards(cards);
    
    this.getCards = function() {
        return cards;
    }
}

PokerHand.prototype.sortCards = function(cards) {
    var card;
    
    for (var i = 1; i < cards.length; i++) {
        card = cards[i];
        
        for (var j = i - 1; j >= 0 && this.betterThan(card, cards[j]); j--) {
            cards[j+1] = cards[j];
        }
        
        cards[j+1] = card;
    }
    
    return cards;
};

// is left card better than the right card
PokerHand.prototype.betterThan = function(lc, rc) {
    var weights = this.weights;
    
    if (weights.values.indexOf(lc.charAt(0)) < weights.values.indexOf(rc.charAt(0))) {
        return true;
    } else {
        return false;
    }
}

module.exports = PokerHand;
