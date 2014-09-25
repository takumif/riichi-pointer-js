define(['../src/core/PointCalculatorGroup.js'], function (Calculator) {
    'use strict'
    
    QUnit.module('Point calculator group');
    
    function getCalculator(value, description) {
        return {
            description: description,
            calculate: function () {
                return value;
            }
        };
    };
    
    function assertCalculateResult(expected, calculators) {
        var calculator = new Calculator(calculators);
        QUnit.deepEqual(expected, calculator.calculate(null));
    };
       
    QUnit.test('without calculators', function () {
        var calculators = [];
        var expected = { total: 0, details: [] };
        assertCalculateResult(expected, calculators);
    });
    
    QUnit.test('with a calculator at 0', function () {
        var calculators = [getCalculator(0, 'test 1')];
        var expected = { total: 0, details: [] };
        assertCalculateResult(expected, calculators);
    });
    
    QUnit.test('with a calculator at more than 0', function () {
        var calculators = [
            getCalculator(300, 'test 1')
        ];
        var expected = {
            total: 300,
            details: [
                { total: 300, description: 'test 1' }
            ]
        };
        assertCalculateResult(expected, calculators);
    });
    
    QUnit.test('with a calculator at 0 and a calculator at more than 0', function () {
        var calculators = [
            getCalculator(0, 'test 1'),
            getCalculator(300, 'test 2')
        ];
        var expected = {
            total: 300,
            details: [
                { total: 300, description: 'test 2' }
            ]
        };
        assertCalculateResult(expected, calculators);
    });
    
    QUnit.test('with more than one calculator at more than 0', function () {
        var calculators = [
            getCalculator(600, 'test 1'),
            getCalculator(300, 'test 2')
        ];
        var expected = {
            total: 900,
            details: [
                { total: 600, description: 'test 1' },
                { total: 300, description: 'test 2' }
            ]
        };
        assertCalculateResult(expected, calculators);
    });
});
