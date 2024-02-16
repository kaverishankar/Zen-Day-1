// Sum of all numbers in an array //

let  arr=[1,2,3,4,5];

// Anonymous funcion
let sum = function (num)
{
    let add=0;
    for(let i=0;i<num.length;i++)
    {
        add += num[i];
    }
    console.log(add);
}
 sum(arr);
 
 
 // IIFE function
(function (num)
{
    let add=0;
    for(let i=0;i<num.length;i++)
    {
        add += num[i];
    }
    console.log(add);
})(arr);

