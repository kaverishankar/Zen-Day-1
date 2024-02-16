// Remove duplicates from an array //

let  arr=[5,6,5,7,6,8,7,8,9];

// Anonymous funcion
let dup = function (num)
{
    for(let i=0;i<num.length;i++)
    {
        for(let j=i+1;j<num.length;j++)
        {
            if(num[i]==num[j])
            {
               num.splice(j,1);
            }
        }
    }
    console.log(num);
}
dup(arr);
 
 
// IIFE function
(function (num)
{
    for(let i=0;i<num.length;i++)
    {
        for(let j=i+1;j<num.length;j++)
        {
            if(num[i]==num[j])
            {
               num.splice(j,1);
            }
        }
    }
    console.log(num);
})(arr);
