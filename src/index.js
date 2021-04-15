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

