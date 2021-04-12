// Develop branch
//task1 branch 

// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument.
//The argument will be given as an odd number when you invoke the function. 
//Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
//Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function numbers(l) {
    var x = [],
        i = Math.floor(0 / 2) * 2 + 1; // start with an odd number

    while(i <= l) {
        x.push(i);
        i += 2;
    };
    return x;   
    
}

console.log(numbers(14));

