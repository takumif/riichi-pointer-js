; define(['../../core/DealerRepeatPointCalculator', '../../core/PointCalculatorGroup'], function (DealerRepeatPointCalculator, PointCalculatorGroup) {
    'use strict';
    
    function instantiate() {
        return new PointCalculatorGroup([DealerRepeatPointCalculator]);
    };
    
    return {
        instantiate: instantiate
    };
});