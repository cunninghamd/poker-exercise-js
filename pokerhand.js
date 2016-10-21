function PokerHand(hand) {
    this.weights = {
        suits: "cdhs",
        values: "AKQJ098765432"
    };
    var cards = [];
    var properties = {};
    this.category = "";
    
    /*
    this.suitsMatch = true;
    this.valuesMatch = true;
    */
    
    for (var i = 0; i < hand.length; i += 2) {
        cards.push(hand.charAt(i) + hand.charAt(i + 1));
    }
    
    var sortedCards = this.sortCards(cards);
    properties = this.getProperties(sortedCards);
    this.category = properties.category;
    
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

PokerHand.prototype.getProperties(sortedCards) {
    var weights = this.weights;
    
    var properties = {
        royalFlush: true,
        straightFlush: true,
        fourOfAKind: true,
        fullHouse: true,
        flush: true,
        straight: true,
        threeOfAKind: true,
        twoPair: true,
        onePair: true,
        
        suitsMatch: true,
        valuesMatch: true,
        category: ""
    };
    
    var cardValues = [];
    
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardValueIndex = weights.values.indexOf(card.charAt[0]);
        
        if (i === 0 && weights.values.indexOf(card.charAt(0)) !== 0) {
            properties.royalFlush = false;
        }
        
        if (i > 0 && weights.values.indexOf(card.charAt(0)) !== weights.values.indexOf(cards[i - 1].charAt(0))) {
            properties.straightFlush = false;
            properties.straight = false;
        }
        
        cardValues[cardValueIndex] = cardValues[cardValueIndex]++ || 1; 
    }
    
    var matches = [];
    
    for (var i = 0; i < cardValues.length; i++) {
        if (cardValues[i] > 1) {
            matches.push[];
        }
    }
}

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
