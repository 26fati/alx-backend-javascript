const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    const result = calculateNumber('SUM', 5, 3);
    expect(result).to.equal(8);
  });

  it('should return the difference of two numbers', () => {
    const result = calculateNumber('SUBTRACT', 5, 3);
    expect(result).to.equal(2);
  });

  it('should return the division of two numbers', () => {
    const result = calculateNumber('DIVIDE', 10, 2);
    expect(result).to.equal(5);
  });

  it('should return "Error" when dividing by zero', () => {
    const result = calculateNumber('DIVIDE', 10, 0);
    expect(result).to.equal('Error');
  });
});