define(function() {
    'use strict';
    
    function PointCalculatorGroup (calculators) {
        this.calculators = calculators;
    };
    
    PointCalculatorGroup.prototype.calculate = function (hand) {
        var result = { total: 0, details: [] };
        
        this.calculators.forEach(function (calculator) {
            var points = calculator.calculate(hand);
            if (points > 0) {
                result.total += points;
                result.details.push({ total: points, description: calculator.description });
            }
        });
    
        return result;
    };
    
    return PointCalculatorGroup;
});