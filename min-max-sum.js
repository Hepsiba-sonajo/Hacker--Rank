 /* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/


 function miniMaxSum(arr) {
    // Write your code here
    var sum =0;
    
    for(var i=0; i<arr.length; i++){
         sum += arr[i];
    }
    console.log(sum);
     let a = sum - arr[0]; 
     let b = sum - arr[1]; 
     let c = sum - arr[2]; 
     let d = sum - arr[3]; 
     let e = sum - arr[4]; 

     let result = [a,b,c,d,e];
     // [...result is spread operator.] - Used to split up Array Element and Object properties.
       let min = Math.min(...result);
       let max = Math.max(...result);
    console.log(min ,  max);
    //console.log(max);
    
}



miniMaxSum([1,2,3,4,5]);
