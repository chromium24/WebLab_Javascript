/**
 * Created by Ann Marie on 6/25/2014.
 */
    //take the nested arrays and break them out so that you get one single array [1,2,3,4,5,6,7,8,9]
//forEach is specialized for arrays


var arr = [1,2,[3,4],[5,6,7,[8,9]]];    //an array containing arrays within arrays

function flatten(arr)                 //This function does not change arr[]. arr will pass through function flatten as a parameter
{
    var flat = [];						//create new empty array object to insert flattened elements into
    arr.forEach(function(item)          //anonymous function that walks through every element 'item' in arr[]
    {
        if(Array.isArray(item))         //check for arrays within arr[]
        {
            flat =flat.concat(flatten(item)); //if array is found within arr, it will be flattened and concatenated to the previous element in flat[]
        }
        else
        {
            flat.push(item);			//If the arr[] element is not an array, it is simply pushed into flat[]. The push function inserts element at end of array
        }

    });
return flat;            //flat is a local variable since it was declared within the function. Flat as a name is only carried within the function. its
};                      //value (flatten(item) carries out of the function via return. Can not use name flat to pull info outside of scope of function.

var flattened = flatten(arr);       //create a variable that will hold value from flatten(arr) and allow for data manipulation
console.log(flattened);




