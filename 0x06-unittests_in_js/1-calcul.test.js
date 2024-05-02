const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -5, 10), 5);
  });

  it('should return the difference of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -5, 10), -15);
  });

  it('should return the division of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -10, 5), -2);
  });
  
  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });
});