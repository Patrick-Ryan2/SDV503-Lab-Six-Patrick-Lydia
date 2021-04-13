// Develop branch
//task1 branch 

// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument.
//The argument will be given as an odd number when you invoke the function. 
//Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
//Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function numbers(l) {
    var arr = [],
    
        i = Math.floor(0 / 2) * 2 + 1; // start with an odd number after zero.
        
    while(i <= l) { // If l is greater than i than x is pushed in increments un till it reaches the value of l.
        arr.push(i); // Adds onto arr increments of I which is 2 until it matches l and then stops
        i += 2; // Adds 2 to i.
        let sumOfNumbers = arr.reduce((total, value) => total + value + l, 0); 
        arrAndSum = (`${arr},${l} Added up is ${sumOfNumbers}`)
    };
    return arrAndSum;   
  }
  console.log(numbers(6));




