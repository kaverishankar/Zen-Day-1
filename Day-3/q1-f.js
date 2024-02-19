// Return median of two sorted arrays of the same size //

let arr1 = [1,2,3,7];
let arr2 = [5,6,4,8];

// Anonymous funcion
let median = function (num1,num2)
{
    let arr = arr1.concat(arr2);
    arr.sort();
    let mid = arr.length/2;
    let sum=arr[mid]+arr[mid-1];
    let avg=sum/2;
    console.log(avg);
}
 median(arr1,arr2);
 
 
 // IIFE function
(function (num1,num2)
{
    let arr = arr1.concat(arr2);
    arr.sort();
    let mid = arr.length/2;
    let sum=arr[mid]+arr[mid-1];
    let avg=sum/2;
    console.log(avg);
})(arr1,arr2);

