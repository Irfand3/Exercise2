//variable to store result if there is
var result
//Array to store each word from string
var arrayOfStrings = [];
//variable as index of array of string
var counter = 0;




//main function take object and string as argument
function lookup(object, path){

    //If array of strings is 0, split path string into array of substrings. 
    if(arrayOfStrings.length===0){
        var start = 0;
        var indexOfChecker = 0;
        var stringToCheck;
        for (let index = 0; index < path.length; index++) {

                //If character is " . ", take everything up to that point and push as a new element in array of strings.
                if (path[index] === ".")
                {
                    stringToCheck = path.substring(start,index)
                    arrayOfStrings.push(stringToCheck)
                    start = index +1
                }
                //If we come to end of path, since there is not " . ", take everything from last " . " to the end of path and store as a new element
                else if(index+1 === path.length){
                    stringToCheck = path.substring(start,path.length)
                    arrayOfStrings.push(stringToCheck)
                }
            }
        }       

    //For loop to iterate through objects
    for (var key in object) {

        console.log(key)
        //check if key of object is equal to first element of array, if yes => increase counter to next word in array
        if(key === arrayOfStrings[counter]){
            console.log("Match")
            counter++
        
        //Check type of object[key], if it is object, it means that path is not done and recursively call lookup function with that object as a argument
        if(typeof (object[key]) === "object")
        {
            lookup(object[key])
        }
        //if it is type of string, we come to end of path of object and that string value is our result
        if(typeof (object[key]) === "string")
        {
           result = object[key]
           console.log("Result is: " + result)
           break;
        }
         
        }
        else console.log("no match")
        
        }    
} 

//declaration of object to check
fruit = {
    apple: {
        orange: {kiwi:"hello"}
    },
    banana: {
        mango: "hey"
    },
    ananas:"hy"
}
//path to be checked
var path = "apple.orange.kiwi"
//function call
lookup(fruit,path); 


