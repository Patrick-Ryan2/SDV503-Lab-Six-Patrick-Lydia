// Develop branch
//task1 branch 

// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument.
//The argument will be given as an odd number when you invoke the function. 
//Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
//Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function numbers(l) {
    var x = [],

        i = Math.floor(0 / 2) * 2 + 1; // start with an odd number after zero.
        
    while(i <= l) { // If l is greater than i than x is pushed in increments un till it reaches the value of l.
        x.push(i); // Adds onto x increments of I which is 2 until it matches l.
        i += 2;
       
    };
    return x;   
   
}

console.log(numbers(13));





