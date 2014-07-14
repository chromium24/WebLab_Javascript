/*******************************************************************************/
/*Author:  Ann Marie Eisele   7/13/2014                                        */
/*Start with a single string named abc containing the entire alphabet. Split it*/
/*into a string containing individual letters of alphabet. Then remove every   */
/*other letter of the split string named splitter. Next, capitalize every third*/
/*letter of this string (named upper)                                          */



var abc  = "abcdefghijklmnopqrstuvwxyz";                    //single string variable abc with 26 letters of alphabet and no comma delimiters
console.log("My initial alphabet string 'abc': " + abc);    //prints out initial string


 function strSplitter(abc) {
     var splitter = abc.split('');                              //splits string abc and returns as array named splitter
     console.log("'splitter' is a new string that contains the result of splitting 'abc': " + splitter);

     var cutString = '';                                                //declare empty array cutString
     for (var i = 0; i < splitter.length; i++) {                        //loop through every element of the array until i=26
         if (i%2 === 0)                                                 //if array index is even, then i modulus 2 will equal 0
         {
             cutString = cutString + splitter[i] + ",";                 //concatenate even index array element into cutString
         }                                                              //elements of splitter with odd index are left out
     }
     console.log("'cutString' is a new string containing every other letter from 'splitter': " + cutString);  //display every other letter of the alphabet

     var upper = '';                                                    //declare empty string "upper"
     for(var j=0; j < cutString.length; j++)
     {
         if (j%3 === 0) {                                               //for every third element, the index must be that j%3===0
             upper = upper + cutString[j].toUpperCase() + '';           //capitalize every third element and concatenate it to string "upper"
         }
         else
         {
             upper = upper + cutString[j] + '';                         //otherwise simply concatenate the letter to string "upper"
         }
     }
     console.log("'upper' is a new string identical to 'cutString' except every third letter is capitalized: " + upper);
 }

 strSplitter(abc);                                                      //call function strSplitter



