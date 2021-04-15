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