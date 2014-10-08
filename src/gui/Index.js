; define(['factories/BonusPointCalculatorFactory'], function (BonusPointCalculatorFactory) {
    'use strict';
    
    var viewModel = new RiichiMahjongPointerViewModel(BonusPointCalculatorFactory.instantiate());
    ko.applyBindings(viewModel);
});