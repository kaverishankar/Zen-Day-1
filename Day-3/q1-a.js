//  Print odd numbers in an array //


let  arr=[4,6,9,2,8,7,3];

// Anonymous funcion
let odd = function (num)
{
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2!=0)
        {
            console.log(num[i]);
        }
    }
}
 odd(arr);
 

// IIFE function
(function (num)
{
    for(let i=0;i<num.length;i++)
    {
        if(num[i]%2!=0)
        {
            console.log(num[i]);
        }
    }
})(arr);
