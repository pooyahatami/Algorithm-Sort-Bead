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
 
 exports.beadSort = function(inputArray) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;

  var arrlen = inputArray.length;
  return exports.bs(inputArray,arrlen);
}

    // A function to do counting sort of arr[] according to
    // the digit represented by exp.
    exports.bs = function(arr,n) {

      var arrMax = getMax(arr,n);
     
      //console.log(arr,n,arrMax);
     	//Set up abacus
      var grid = new Array(n); 
          for (var i = 0; i < n; i++) {
              grid[i] = new Array(arrMax);
            }

      var levelcount = new Array(arrMax);
        		for(var i=0;i<arrMax;i++)
        		{
        			levelcount[i]=0;
        			for(var j=0;j<n;j++){
                //console.log(j,i);
        				grid[j][i]='_';
        			  
        			}
        		}
        		
      //display1D(arr);
      //display1D(levelcount);
      //display2D(grid);
      //Drop the beads
      		for(var i=0;i<n;i++)
      		{
      			var num=arr[i];
      			for(var j=0;num>0;j++)
      			{
      				grid[levelcount[j]++][j]='*';
      				num--;
      			}
      		}
      // System.out.println();
      //display2D(grid);
    		//Count the beads
    		var sorted=new Array(n);
    		for(var i=0;i<arr.length;i++)
    		{
    			var putt=0;
    			for(var j=0;j<arrMax&&grid[n-1-i][j]=='*';j++)
    				putt++;
    			sorted[i]=putt;
    		}
 
		return sorted;      
      
    }      
      

    // A utility function to display one dimention arr[]
    display1D  = function(arr)
    	{
    	  var onelinestr = "";
    		for(var i=0;i<arr.length;i++)
    		    onelinestr += arr[i]+" ";
    		console.log(onelinestr);
    	}
    // A utility function to display one dimention arr[]
    display1Dln  = function(arr)
    	{
    	  var onelinestr = "";
    		for(var i=0;i<arr.length;i++)
    		    onelinestr += arr[i]+" ";
    		console.log(onelinestr);
  		  console.log(" ");
    	}
    // A utility function to display Two dimention arr[]
    display2D  = function(arr)
    	{
    	  var onelinestr = "";
    		for(var i=0;i<arr.length;i++)
    		    display1D(arr[i]);
  		  console.log(" ");
    	}

    // A utility function to get maximum value in arr[]
    getMax  = function(arr,n)
    {
        var mx = arr[0];
        for (i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
    }
