## Lab-six journal
My partner and I did have some troubles getting the repository setup on our local computers, but I think that was mostly because of my mistakes in setting up the repository. 

One of these mistakes which has been a bad habit of mine which I have stopped doing is when cloning a repository onto my local I created a folder to clone into it. This resulted in the repository folder being made in another folder. This has sometimes made it a little difficult to make additions to the remote repository because I was not in the right directory.

## Task one

In task one we first wrote this function below which successfully listed in an array the odd numbers of the inputted variable.  To start the array from an odd number  i used math.floor and push i used to then iterate the array in an odd sequence of numbers. 

     function numbers(l) { // Created numbers function with l parameter
	 	var x = [],
		 i = Math.floor(0 / 2) * 2 + 1; // start with an odd number
		
		    while(i <= l) { // If l is greater than i than while loop starts and x is pushed in increments until it reaches the value of l.
		        x.push(i);// Adds(pushes) onto x increments of I which is 2 until it matches l and then stops
		        i += 2;// Adds 2 to i.Because if 2 is added its still an odd number which is all the array needs to print.
 
		    };
		    return x;   // Returns arrAndSum variable
		}
		
		console.log(numbers(14)); // Console logs the result of numbers function using inputted variable as basis for functions argument.

I was stuck on how to then add up the odd number array to get its total i eventually remembered the reduce method which i used to add up the odd number arrays content to get its total. Below is the second version with the reduce method.

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


 
