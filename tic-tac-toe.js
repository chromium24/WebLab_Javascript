/**
 * Created by Ann Marie on 6/23/2014.
 */

//create a program to determine if there is a winner in Tic Tac Toe. There is no user input. The array is pre-set.
//In function, need to write conditions to check rows and columns. **Row check= 0,1,2/ 3,4,5/ 6,7,8.** Col. check= 0,3,6/1,4,7/2,5,8**Diagonal check= 0,4,8/ 2,4,6

//6/25/14 Revision
// I am going to refine this program to remove function duplications. Will use two separate conditions to check for diagonal wins and
// two nested for loops to check rows and cols.

var grid = ['o', 'x','o', 'o', 'o','x', 'x', 'o','x'];

//9 element array containing X's, O's, and empty spaces. Loops used for checking rows and cols, not diagonals.
//FUNCTION DEFINITIONS---------------------------------

var checkGrid = function (grid) {
    var win;                                        //declare bool win
    var tracker = 0;
    //BEGIN CHECK DIAGONALS
    var checkDiags = function(grid){
        var D = 2;
                                                       //starting index value for diagonal check
        if (grid[(2 * D) - (2 * D)] === grid[2 * D] && grid[2 * D] === grid[4 * D]) //diagonal check for grid elements 0,4,8 (top left to bottom right)
        {
            win = true;                                                                         //if diagonal equality found, then win set to true
        }
        else if (grid[D] === grid[2 * D] && grid[2 * D] === grid[3 * D] && grid[D] === grid[3 * D]){   //diagonal check for grid elements 2,4,6 (top right to bottom left)
            win = true;                                                                         //if diagonal equality equality found, then win set to true
         }
        else {
            win = false;
            tracker = 1;
        }//no diagonal wins so bool win remains false

        if (win === true)                                           //if a diagonal win, notify user
        {
            console.log("You've got a diagonal win!");
        }
    }; //end function checkDiags

    //BEGIN CHECK ROWS
    win = false;                                                    //reset win to default false
    var checkRows = function(grid) {
        for (var R = 0; R < 7; R += 3)                              //loop to check for equality in rows (0,1,2) (3,4,5) (6,7,8)
        {
            if (grid[R] === grid[R + 1] && grid[R + 1] === grid[R + 2] && grid[R] === grid[R + 2]) {                //Initial value R=0; check Row elements 0,1,2 for equality
                win = true;                                                                         //if Column equality found, then win set to true                                                                  //send confirmation to user}
            }
            else {
                win = false;
                tracker = 2;
            }
        }//end for loop check rows

        if(win ===true)
        {
            console.log("You've got a row win!");               //if there's a row win, notify user
        }
    };   //end function checkRows

    //BEGIN CHECK COLUMNS
    win = false;                                            //reset win to default false
    var checkCols = function(grid){
        for (var C = 0; C < 3; C++)
        {
            if (grid[C] === grid[C + 3] && grid[C + 3] === grid[C + 6] && grid[C] === grid[C + 6]) {       //loop to check for equality in cols (0, 3, 6),(1,4,7), (2,5,7)
                win = true;                                                                                                                                           //send confirmation to user
            }
            else {
                win = false;
                tracker = 3;
            }

            if(win === true)
            {
                console.log("You've got a column win!");
            }
        }//end for loop check columns

    };//end function checkCols

    var track = function(tracker) {
        if (tracker !== 0)                                      //if tracker > 0, then no wins were found
        {
            console.log("Sorry, it's a 'Cat's Game' with no wins");
        }
    };
checkDiags(grid);
checkRows(grid);
checkCols(grid);
track(tracker);
};//END FUNCTION DEFINITION checkGrid


checkGrid(grid);                                        //call function to check the grid for any matches