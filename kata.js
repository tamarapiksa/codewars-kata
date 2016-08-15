/*
Description:

Americans are odd people: in their buildings, the first floor is actually the
ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the
real floor:

get_real_floor(1) == 0 # getRealFloor for JS and Coffeescript
get_real_floor(0) == 0 # Special case to please Europeans
get_real_floor(5) == 4
get_real_floor(15) == 13
Moreover, your function should work for basement floors too: just return the
same value than the passed one.

get_real_floor(-3) == -3
*/

function getRealFloor(n) {
  if (n > 0 && n < 13) {
    return n - 1;
  } else if (n <= 0) {
    return n;
  } else if (n > 13) {
    return n - 2;
  } else {
    return null;
  }
}


/*
Description:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

So

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return

'found the needle at position 5'
*/

function findNeedle(haystack) {
  var position = haystack.indexOf('needle');
  return 'found the needle at position' + ' ' + position;
}



/*
Description:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
*/


function fixTheMeerkat(arr) {
 arr.reverse();
 return arr;
}


/*
Description:

Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case  return
name equals owner 'Hello boss'
otherwise 'Hello guest'
*/

function greet (name, owner) {
  return (name === owner) ? 'Hello boss' : 'Hello guest';
}



/*
Description:

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?
*/

function opposite(number) {
  return (number * (-1));
}

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5

O is misinterpreted as 0

I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

exports.correct = function correct(str){
  for (var i = 0; i < str.length; i++) {
    if (i === 5) {
      str.replace(i, 'S');
      return str;
    } else if (i === 0) {
      str.replace(i, 'O');
      return str;
    } else if (i === 1) {
      str.replace(i, 'I');
      return str;
    } else {
      return 'not quite';
    }
   }
}



/* LEVEL 7 ! I learned how to use the sorting method to order an array from either ascending or descending value. 

Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: Mr. Roll will only accept solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

*/

exports.maxProduct = function maxProduct(numbers) {
  let currentMax, lastMax;
  for (let i = 0, length = numbers.length; i < length; i++) {
    let current = numbers[i];
    currentMax = currentMax || current;

    if (current > currentMax) {
      lastMax = currentMax;
      currentMax = current;
    } else if (current > lastMax) {
      lastMax = current;
    }
  }
  return currentMax * lastMax
}



/*Vampire Numbers

Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product
Create a function that can receive two 'fangs' and determine if the product of 
the two is a valid vampire number.

http://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript
*/

exports.vampireNumber = function vampireNumber(a, b){
  const product = a * b;
  const sortedProduct = product.toString().split('').sort().join('');
  const sortedNums = (a.toString() + b.toString()).split('').sort().join('');
  return sortedProduct.includes(sortedNums);
}


