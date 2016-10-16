var express = require("express");
var app = express();
var PokerHand = require("./pokerhand");

app.listen(3001, function () {});

app.get("/", function (req, res) {
    var hand = "0dQh5cAsJd";
    
    var pokerHand = new PokerHand(hand);
    
    res.send(JSON.stringify(pokerHand.getCards()));
});
