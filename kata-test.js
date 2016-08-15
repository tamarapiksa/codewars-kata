const { expect } = require('chai');
const {
  maxProduct,
  vampireNumber
} = require('./kata');

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
  });


  describe('vampireTest', () => {

    it('should return true for a vampire number', () => {
      const result = vampireNumber(6, 21);
      expect(result).to.eq(true);
    });

    it('should return false for a non vampire number', () => {
      const result = vampireNumber(10, 11);
      expect(result).to.eq(false);
    });
  });
});


