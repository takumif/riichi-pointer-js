; define(['../core/DealerRepeatPointCalculator', '../core/PointCalculatorGroup'], function (DealerRepeatPointCalculator, PointCalculatorGroup) {
    'use strict';
    
    var bonusPointCalculators = new PointCalculatorGroup([DealerRepeatPointCalculator]);
    
    var viewModel = new RiichiMahjongPointerViewModel(bonusPointCalculators);
    ko.applyBindings(viewModel);
});