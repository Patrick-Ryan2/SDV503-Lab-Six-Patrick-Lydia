// Develop branch
//task1 branch 

// Task_1:  Create a function that returns the total of all odd numbers up to and including the given argument.
//The argument will be given as an odd number when you invoke the function. 
//Ex:  addOddNumbers(5)  -> 9  // 1 + 3 + 5 = 9
//Ex: addOddnumbers(13) -> 49 // 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49

function numbers(l) {
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




