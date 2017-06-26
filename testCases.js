 /*
 * Bead sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(s) comparisons, S is the sum of the input integers
 * Best-case performance	O(1) comparisons, O(1) swaps
 * Average performance	О(n) comparisons, swaps
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   ans S S is the sum of the input integers.
 *   Note: The algorithm’s run–time complexity ranges from O(1) to O(S) (S is
 *         the sum of the input integers) depending on the user’s perspective.
 *        Finally, three possible implementations are suggested.
 *
 * Author: Pooya Hatami
 */

var rectbs = require('./node-sort-bead');

var arrin00 = [20, 8 , 8, 12, 22 , 9 , 10 ];
var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin08 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 299999, 49];


function solveBS(arr) {
    var arr_original = arr.toString() ;
    var result = rectbs.beadSort(arr);
    if (result==-1){
    console.log("Fail attempt to sort array \r\n  ["+arr_original+" ] by Insertion Sort " );
    } else {
    console.log("Success attempt to sort array \r\n \t ["+arr_original+" ] \r\n and result is : \r\n \t [ "
                + result + " ]" );
    }
   
   console.log("----------------------------------------------------------");     
}

solveBS(arrin00);
solveBS(arrin05);
solveBS(arrin03);
solveBS(arrin08);
