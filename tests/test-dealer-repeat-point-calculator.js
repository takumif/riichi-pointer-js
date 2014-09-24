define(['../src/core/DealerRepeatPointCalculator.js'], function (calculator) {
    'use strict'
    
    QUnit.module('Dealer repeat point calculator');
    
    function getHand(dealerRepeat) {
        var hand = new Hand([], []);
        hand.dealerRepeat = dealerRepeat;
        return hand;
    };
    
    QUnit.test('multiply dealer repeat by 300', function () {
        QUnit.strictEqual(0, calculator.calculate(getHand(0)));
        QUnit.strictEqual(300, calculator.calculate(getHand(1)));
        QUnit.strictEqual(600, calculator.calculate(getHand(2)));
    });
});
