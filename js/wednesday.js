 // Your friend needs help finishing a count-the-lucky-number program. Finish it!


'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;
var zero = 0
 var one = 0
 var two = 0
 var three = 0  
 var four = 0
 var five = 0

while (i < 100) {
   i++; 
   luckyNumber = Math.floor(Math.random()* 6);
switch (luckyNumber) {
    case 0:
        zero++
        break;
    case 1:
        one++
        break;
    case 2:
        two++
        break;
   	case 3:
        three++
        break;
    case 4:
        four++
        break;
    case 5:
        five++
        break;
	

}


    // What do I need here?
}

// The output shoul	console.log(" 0 appereared " + zero + " times.");
	console.log(" 1 appereared " + one + " times.");
	console.log("2 appereared " + two + " times.");
	console.log("3 appereared " + three + " times.");
	console.log("4 appereared " + four + " times.");
	console.log("5 appereared " + five + " times.");
	//d be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100