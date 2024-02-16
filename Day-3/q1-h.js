// Rotate an array by k times //

let  arr=[1,2,3,4,5];
let k=2;

// Anonymous funcion
let dup = function (num,count)
{
    for(let i=1;i<=count;i++)
    {
        num.unshift(num.pop())
    }
    console.log(num);
}
dup(arr,k);


 // IIFE function
 (function(num,count)
{
  for(let i=1;i<=count;i++)
    {
        num.unshift(num.pop())
    }
    console.log(num);
})(arr,k);