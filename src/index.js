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

    function getCount(l,d) {
        var counts = new Object();
        counts.likes = l
        counts.dislikes = d
        console.log(l - d)
       
    }
     
    getCount(13,0)
    getCount(2,23)
    getCount(100,100)