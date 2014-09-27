define(function () {
    'use strict';
    
    var description = 'Dealer Repeat';
    
    function calculate(hand) {
        return hand.dealerRepeat * 300;
    };
    
    return {
        description: description,
        calculate: calculate
    };
});
