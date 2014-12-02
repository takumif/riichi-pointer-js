; define(['factories/BonusPointCalculatorFactory'], function (BonusPointCalculatorFactory) {
    'use strict';
    
    var viewModel = new RiichiMahjongPointerViewModel(BonusPointCalculatorFactory.instantiate());
    ko.applyBindings(viewModel);
    
    window.viewModel = viewModel; // use for compatilibity plugin like the delete one
});