const { expect } = require('chai');
const {
  getRealFloor,
  findNeedle,
  fixTheMeerkat,
  maxProduct,
  vampireNumber
} = require('./kata');

describe('kata', () => {

  describe('getRealFloor()', () => {
    it('should return 0 for floor 1', () => {
      expect(getRealFloor(1) == 0).to.eq(true);
    });

    it('should return 0 for floor 0', () => {
      expect(getRealFloor(0) == 0).to.eq(true);
    });

    it('should return 5 for floor 4', () => {
      expect(getRealFloor(5) == 4).to.eq(true);
    });

    it('should return 15 for floor 13', () => {
      expect(getRealFloor(15) == 13).to.eq(true);
    });
  });

  describe('findNeedle()', () => {
    it('should return "found the needle at position 5"', () => {
      const result = findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']);
      expect(result).to.eq('found the needle at position 5');
    });
  });

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


  describe('vampireTest()', () => {

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


