/* Given an array of integers and a positive integer , determine the number of  pairs where i<j  and i + j is divisible by k.
Sample Input

STDIN           Function
-----           --------
6 3             n = 6, k = 3
1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
Sample Output

 5  */

 function divisibleSumPairs(n, k, arr) {
    // Write your code here
     var count = 0;
      
     
      for(let i = 0; i< arr.length; i++ ){
       for(let j = i+1; j< arr.length; j++){
        if(i < j){
            var isDivisible =(arr[i] + arr[j]);
            //console.log(isDivisible)
            if(Number.isInteger(isDivisible/k) ){
                count++;
            }
        }
      }
      }
    
    
    console.log(count);

 }










n = 5; k = 2; arr = [5, 9 ,10, 7, 4];
divisibleSumPairs(n, k, arr);