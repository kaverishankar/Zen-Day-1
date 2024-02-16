// Return median of two sorted arrays of the same size //

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

// Anonymous funcion
let median = function (num1,num2)
{
    let sum=num1[num1.length-1]+num2[0];
    let avg=sum/2;
    console.log(avg);
}
 median(arr1,arr2);
 
 
 // IIFE function
(function (num1,num2)
{
    let sum=num1[num1.length-1]+num2[0];
    let avg=sum/2;
    console.log(avg);
})(arr1,arr2);

