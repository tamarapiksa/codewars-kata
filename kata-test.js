const { expect } = require('chai');
const {
  getRealFloor,
  greet,
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

  describe('greet()', () => {
    it('should say hello guest when not owner', () => {
      const result = greet('Tamara', 'Blue');
      expect(result).to.equal('Hello guest');
    });
    
    it('should say hello boss when equals guest', () => {
      const result = greet('Tamara', 'Tamara');
      expect(result).to.equal('Hello boss');
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


  describe('mangoTest()', () => {

    it('should return 6', () => {
      const result = mango(3, 3);
      expect(result).to.eq(6);
    });
  });

  describe('fizzTest()', () => {
    
    it('should return [1,2,3,4,5]', () => {
      const result = fizz(5);
      expect(result).to.eq([1,2,3,4,5]);
    });

    it('should return [1,2,3,4,5,6,7,8,9,10]', () => {
      const result = fizz(10);
      const result = fizz([1,2,3,4,5,6,7,8,9,10]);
    });
  }); 
});


