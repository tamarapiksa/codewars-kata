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

exports.getRealFloor = function getRealFloor(n) {
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

exports.findNeedle = function findNeedle(haystack) {
  var position = haystack.indexOf('needle');
  return 'found the needle at position' + ' ' + position;
}



/*
Description:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!
*/


exports.fixTheMeerkat = function fixTheMeerkat(arr) {
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

exports.greet = function greet (name, owner) {
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

exports.greet = function opposite(number) {
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



/*A variation of determining leap years, assuming only integers are used and 
years can be negative and positive.

Write a function which will return the days in the year and the year entered in
 a string. For example 2000, entered as an integer, will return as a string 2000 
 has 366 days

There are a few assumptions we will accept the year 0, even though there is no 
year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by
 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will
 return 365 days.

http://www.codewars.com/kata/days-in-the-year/train/javascript
 */

 function yearDays(year) {
  if ((year % 4 === 0) ? (year % 400 === 0) : (year % 100 === 0)) {
    return year + " has 366 days";
  } else {
    return year + " has 365 days";
  }
}

/*

Isn't it annoying how "string".replace("find", "replace"); only replaces the 
first match of the find string? Write a function, replaceAll(input, find, 
  replace); that will replace all matches of the given find string with the 
given replace string.

The function will always be called with three strings, so don't worry about 
validating the arguments.

As with the original "string".replace(find, replace), if find is an empty 
string, it should match in-between each character, effectively inserting 
replace in-between each character, including the start and end of the string. 
I've given you some tests for this to make it a little clearer.

http://www.codewars.com/kata/replaceall-input-find-replace/train/javascript
*/

function replaceAll(input, find, replace) {
  return input.split(find).join(replace);
 }




/*Task:

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:

If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:

(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:

pattern(4):

4321
432
43
4

http://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript
*/

function pattern(n) {
 var output="";
  if (n <= 1) {
     output = "1";
   } else {
     output = n + pattern(n-1) + "\n";
     console.log(output);
   }
   return output;
 }



