// Develop branch
//task1 branch 

// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument.
//The argument will be given as an odd number when you invoke the function. 
//Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
//Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function numbers(l) { // Created numbers function with l parameter
    var arr = [],// Creates new empty arrays
    
        i = Math.floor(0 / 2) * 2 + 1; // start with an odd number after zero. 
      
        
    while(i <= l) { // If l is greater than i than while loop starts and x is pushed in increments until it reaches the value of l.
        arr.push(i); // Adds(pushes) onto arr increments of I which is 2 until it matches l and then stops
        i += 2; // Adds 2 to i.Because if 2 is added its still an odd number which is all the array needs to print.
     
        let sumOfNumbers = arr.reduce((total, value) => total + value, 0); // sumOfNumbers = arr reduced to add up all the odd numbers in arr. 
        arrAndSum = (`The odd numbers of ${l} are ${arr} and there total is ${sumOfNumbers}`)// Added arrAndSum string which prints the origin input and then its odd numbers from arr and then its total from sumOfNumbers
    };

    return arrAndSum;  // Returns arrAndSum variable
    
  }
  console.log(numbers(13)); // Console logs the result of numbers function using inputted variable as basis for functions argument.



/* 

Task_2: Create a function that takes an array of non-negative integers and strings 
and return a new array without the strings.

Ex:  filterArr([1, 2, "a", "b"]) -> [1, 2]
Ex:  filterArr([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

Note: The given array only has integers and strings.
Note: Numbers in the array should not repeat.
Note: The original order must be maintained. */


// declare variables and assign string and number values in an array
let Arr1 = [1, 2, "a", "b"];
let Arr2 = [1, 2, "aasf", "1", "123", 123]

// create a filtered array that has elements in number only
let filterArr1 = Arr1.filter(numbersOnly); 
let filterArr2 = Arr2.filter(numbersOnly);

// create a function to determine if type of is number
function numbersOnly(val) {

    if (typeof (val) === 'number') {
        return val;
    }
} //return the numbers if true

console.log(filterArr1)
console.log(filterArr2)

/*  Task_3: Given an object containing counts of both likes 
    and dislikes of a facebook post, return a number of count for either likes 
    or dislikes should be displayed. This is calculated by subtracting the 
    number of dislikes from likes.

        Ex:  getCount({ likes: 13, dislikes: 0 }) -> 13
        Ex:  getCount({ likes: 2, dislikes: 23 }) -> -21
        Ex:  getCount({ likes: 100, dislikes: 100 }) -> 0

    Note: The argument gets passed in the form of an object
    Note: This object get assigned to the variable name "counts"
    Note: the function body want something to operate on , which 
    is going to be the properties of the object "counts" , 
    so you access the properties of this object with dot notation by 
    counts.property_1 and counts.property_2 */

    function getCount(l,d) { // New getCount function with parameter l and d
        var counts = new Object(); // Declares new count variable and sets it to a new object
        counts.likes = l // sets a like properly of the object to = the l parameter
        counts.dislikes = d // sets a dislike properly of the object to = the d parameter
        console.log(l - d) // sets a log properly of the object to = l - d
       
    }
     
    getCount(13,0) // Invokes the getCount function with its parameters
    getCount(2,23) // Invokes the getCount function with its parameters
    getCount(100,100) // Invokes the getCount function with its parameters
