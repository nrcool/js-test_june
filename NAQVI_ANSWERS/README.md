# JavaScript Test: Advanced Topics

## Answer the questions to the best of your abilities! Try out all the questions. 

### Time: 2hrs 

#### 1. >10
Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array. **Do not use a loop.** 

#### 2. Validation 
Come up with a new way to validate a pin code with a simple function called validatePin that returns true (for a valid pin code) or false (for an invalid pin code).

Here are the rules for a valid password:

* The pin code must consist of only numbers
* The pin code must be 4 digits long
* The pin code should have at least two different digits represented
* The pin code's last digit should be even
* The pin code should add up to at least 5


-Examples: 
-The following pin codes are valid:
* 1112
* 1994

-The following pin codes are invalid:
* 1c24 // is not a number
* 12344 // five digit pin code
* 1235 // last digit is odd
* 1110 //sum less than 5

#### 3. Class Blueprint

Create a blueprint for a course at DCI e.g. FwB 13a - using the "class" syntax in javascript.
* The class should contain whether the course is a year long course or an orientation course.
* The class should contain who the teacher is. 
* The class should contain whether the group is learning marketing or web development. 
* The class should contain the number of students taking the course.
* The class should have a method that checks how big a classroom should be depending on the number of students taking the course. 1 student =  22m². 
* Add a method using "prototype" to print all the details of the course e.g. "This is a year long web development course taught by John Smith. There are 10 students taking the course."

#### 4. Events  
Each event below has a different turnout. Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.

```javascript
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
```

#### 5. Return Squared Odds
**Complete this without using a loop.**
Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.

#### 6. 10,000  
Create a (small) game!
* Each player has 6 dice. (Each dice has the possibility to roll from 1-6).
* Each player rolls all 6 dice during each turn and the player's score is added to their individual total. 
* The first player to reach 10,000 wins. 

* Example of expected output: "Player 1: 9984, Player 2: 10,002 - Player 2 wins!"

#### 7. World Cup 
How long has it been since Germany won the world cup? Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014. 

#### 8. Working Hours
Calculate how many hours (total) this person worked in the week. 
* Note: start is always morning time, end is always afternoon. 

```javascript
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];
```

#### 9. Callback 
**Part 1**: Given the code below, write a function with a callback. The function should return a new array with each element calculated to the power of 2. 

```javascript
function mapping(){
//insert code here
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
```
Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

**Part 2**: Create another variable, call the `mapping` function again, but now change the callback function to return an array of the square root of each element. 

#### 10. 2D Array
Given the 2D Array below, **loop** through the arrays to print the values. 
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]]
```


##### Good luck! :)

