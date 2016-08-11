const { expect } = require('chai');
const { maxProduct } = require('./kata')

describe('kata', () => {
  describe('maxProduct()', () => {
    it('should return 20', () => {
      const result = maxProduct([2, 1, 5, 0, 4, 3]);
      expect(result).to.equal(20);
    });

    it('should return 72', () => {
      const result = maxProduct([7, 8, 9])
      expect(result).to.equal(72);
    });

    it('should return 104874', () => {
      const result = maxProduct([33, 231, 454, 11, 9, 99, 57]);
      expect(result).to.equal(104874);
    });
  })
});
