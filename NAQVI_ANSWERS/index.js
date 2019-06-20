/* #### 1. >10
Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array. **Do not use a loop.**  */
console.log(":::::::::::::::::::::::::1::::::::::::::::::::::::::::");
let array=[2,4,6,7,9,23,41,34,65,86];

let filteredArray=array.filter(item=>item>10);//return all numbers in array greater than 10;
console.log(filteredArray);



/* #### 2. Validation 
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
* 1110 //sum less than 5 */
console.log(":::::::::::::::::::::::::2::::::::::::::::::::::::::::");

let Validation=(pin)=>{
    let sum=(pin)=>{
        let total=0;
        let splitedarray=pin.toString().split("");
        for(let i=0;i<splitedarray.length;i++){
            total+=splitedarray[i];

        }
        return total;
    }
    //checking for pin ;is number or string
if(pin===parseInt(pin)){
   let pinstring=pin.toString().split("");
   //checking length
   if(pinstring.length>4||pinstring<4){
       console.log(`${pin} ${pinstring.length} digit pin code`);
   }else if(pinstring.slice(-1)%2!=0){//checking last digit is odd or not
       console.log(` ${pin } last digit is odd`)
   }else if(sum(pin)<5 ){//checking sum is less than 5
       console.log(`sum is less than 5`)
   }else{
       console.log(`${pin} pin is valid`)
   }
}else{
   console.log(`${pin} is not a number`)
}
}

Validation(3454);


/* #### 3. Class Blueprint

Create a blueprint for a course at DCI e.g. FwB 13a - using the "class" syntax in javascript.
* The class should contain whether the course is a year long course or an orientation course.
* The class should contain who the teacher is. 
* The class should contain whether the group is learning marketing or web development. 
* The class should contain the number of students taking the course.
* The class should have a method that checks how big a classroom should be depending on the number of students taking the course. 1 student =  22m². 
* Add a method using "prototype" to print all the details of the course e.g. "This is a year long web development course taught by John Smith. There are 10 students taking the course." */
console.log(":::::::::::::::::::::::::3::::::::::::::::::::::::::::");

class  FwB_13a{
    constructor(duration,teacher,courseTitle,students){
        this.duration=duration;
        this.teacher=teacher;
        this.courseTitle=courseTitle;
        this.students=students;
    }
    CheckClassSize(){
        let classSize=this.students*22;
        console.log(`class size is ${classSize}m²`)
    }

}
FwB_13a.prototype.getDetails=function(){
    console.log(`This is ${this.duration} ${this.courseTitle} course taught by ${this.teacher}. There are ${this.students} students taking the course.`)
}
let newClass=new FwB_13a("1 year","Mariam","Web Development",16);
newClass.CheckClassSize();
newClass.getDetails();
/* #### 4. Events  
Each event below has a different turnout. Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.

```javascript
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
``` */
console.log(":::::::::::::::::::::::::4::::::::::::::::::::::::::::");
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

let SortedResult=events.sort((item1,item2)=>{
    if(item1.turnout<item2.turnout){
        return 1;
    }else if(item1.turnout>item2.turnout){
        return -1;
    }else{
        return 0;
    }
});

console.table(SortedResult);

/* 
#### 5. Return Squared Odds
**Complete this without using a loop.**
Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers. */
console.log(":::::::::::::::::::::::::5::::::::::::::::::::::::::::");
//using callback function
 function SquaredOdds(array,callback){
     console.log(`given array was = ${array} resulting Array =`)
     return callback(array)
 }
function squaredNumbers(arr){
    let squaredArray=arr.map(elem=>elem*elem);
    let resultingArray=squaredArray.filter(item=>item%2!==0);
    return resultingArray;
}
console.log(SquaredOdds([2,3,4,5,6,7,8,9,10],squaredNumbers))
//or only
function squaredNumbers1(arr){
    let squaredArray=arr.map(elem=>elem*elem);
    let resultingArray=squaredArray.filter(item=>item%2!==0);
    return resultingArray;
}
console.log(squaredNumbers1([2,3,4,5,6,7,8,9,10]))




/* #### 6. 10,000  
Create a (small) game!
* Each player has 6 dice. (Each dice has the possibility to roll from 1-6).
* Each player rolls all 6 dice during each turn and the player's score is added to their individual total. 
* The first player to reach 10,000 wins. 

* Example of expected output: "Player 1: 9984, Player 2: 10,002 - Player 2 wins!" */
console.log(":::::::::::::::::::::::::6::::::::::::::::::::::::::::");
class Game{
    constructor(playername){
        this.playername=playername;
        this.score=0;
        this.numberonDice=1;
    }
   ThrowDice(opponent){

    if(opponent.score>100){
        console.log(`${opponent.playername} has already Won with ${opponent.score}`);

        return;
    }else if(this.score>=100){
        console.log('Already won, game is already over');
        return;
    }else{
   
        for(let i=0;i<6;i++){
            this.numberonDice=Math.floor(Math.random()*6+1);
            this.score+=this.numberonDice;
          
            if(this.score>=100){
                console.log(`${this.playername} has WON the Game with ${this.score} score`)
                return;
            }
     
        }
    }
        
    }
    CheckScore(){
        console.log(this.score)
    }
}
let Naqvi=new Game("Naqvi",23);
let Franz=new Game("Franz",23);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
 Naqvi.ThrowDice(Franz); 
 Franz.ThrowDice(Naqvi);
Naqvi.CheckScore();
Franz.CheckScore();

/* #### 7. World Cup 
How long has it been since Germany won the world cup? Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014. */ 
console.log(":::::::::::::::::::::::::7::::::::::::::::::::::::::::");


let LastworldCupDate=new Date(2014,06,13);
let JstimeWC=LastworldCupDate.getTime();
let Today=new Date();
let Todaytime=Today.getTime();
let differenceInTime=Todaytime-JstimeWC;
//converting timeinto days
let days=differenceInTime/(24*60*60*1000);//1s=1000ms;1day=24horse;1hour=60Min;1min=60Sec;
//remove floating numbers
let ResultingDays=Math.floor(days)
console.log(`${ResultingDays} days since Germany won the cup`);




/* #### 8. Working Hours
Calculate how many hours (total) this person worked in the week. 
* Note: start is always morning time, end is always afternoon. 

```javascript
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ]; */
    console.log(":::::::::::::::::::::::::8::::::::::::::::::::::::::::");
    const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
      ];
    let TotalTime=hourTracking.reduce((acc,cur)=>{
        acc+=cur.end-cur.start;
        return acc;
    },0)

    console.log(TotalTime)

/* #### 9. Callback 
**Part 1**: Given the code below, write a function with a callback. The function should return a new array with each element calculated to the power of 2. 

```javascript
function mapping(){
//insert code here
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
```
Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] */

console.log(":::::::::::::::::::::::::9: Part1:::::::::::::::::::::::::::");
function mapping(array,callback){
        return callback(array);
    }
function Power(arr){
    let powredArray=arr.map(item=>Math.pow(item,2));
    return powredArray;
}
 const powerOfTwo = mapping([1,2,3,4,5], Power );
console.log(powerOfTwo);
/* 
**Part 2**: Create another variable, call the `mapping` function again, but now change the callback function to return an array of the square root of each element. 
 */
console.log(":::::::::::::::::::::::::9:Part 2:::::::::::::::::::::::::::");
function SquareRoot(arr){
    let powredArray=arr.map(item=>Math.sqrt(item));
    return powredArray;
}
const SqaureRootArray = mapping([1,2,3,4,5], SquareRoot );
console.log(SqaureRootArray);


/* #### 10. 2D Array
Given the 2D Array below, **loop** through the arrays to print the values. 
```javascript
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]] */
         
console.log(":::::::::::::::::::::::::10::::::::::::::::::::::::::::");
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]] ;

    let PrintResult=board.map(elem=>{
        if(Array.isArray(elem)){
            elem.map(item=>console.log(item));
        }else{
            console.log(elem)
        }
       
    });
