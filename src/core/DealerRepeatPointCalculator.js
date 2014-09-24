define(function () {
    'use strict';
    
    function calculate(hand) {
        return hand.dealerRepeat * 300;
    };
    
    return {
        calculate: calculate
    };
});
