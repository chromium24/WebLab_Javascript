/**
 * Created by Ann Marie on 7/22/2014.
 */

//Program to make change for 43 cents. This approach will use functions. does not have conditions to check whether cents is a valid number.
    //Daisy chain structure using function calls from within functions.

var cents = 43;


var countChange = function (cents) {
        var quarter = 25;
        var dime = 10;
        var nickel = 5;
        var pennies = 1;
        var remaining = 0;



            var quarters = function (cents, remaining) {
                var numQuarter = Math.floor(cents / quarter);
                remaining = cents - (numQuarter * quarter);
                console.log("Number of quarters: " + numQuarter);
                console.log("Number of cents remaining: " + remaining);
                dimes(remaining);                                   //function call to dimes and pass value of remaining through
            };

            var dimes = function (remaining) {
                console.log(remaining);
                var numDimes = Math.floor(remaining / dime);
                remaining = remaining - (numDimes * dime);
                console.log("Number of dimes: " + numDimes);
                console.log("Number of cents remaining: " + remaining);
                nickels(remaining);                                 //function call to nickels
            };

            var nickels = function (remaining) {
                console.log(remaining);
                var numNickels = Math.floor(remaining / nickel);
                remaining = remaining - (numNickels * nickel);
                console.log("Number of nickels: " + numNickels);
                console.log("Number of cents remaining: " + remaining);
                penniess(remaining);                                //function call to penniess
            };

            var penniess = function (remaining) {
                console.log(remaining);
                var numPennies = Math.floor(remaining / pennies);
                //remaining = remaining - (numPennies * pennies);
                console.log("Number of pennies:" + numPennies);
            }
    quarters(cents, remaining);                     //function call to determine number Quarters needed and number cents left over

};



countChange(cents) ;                                //function call for main program to execute

