// Return all the prime numbers in an array //

let  arr=[5,8,6,7,9];

// Anonymous funcion
let sum = (num) =>
{
    for(let i=0;i<num.length;i++)
    {
        const mid=num[i]/2;
        let j=2,count=0;
        while(j<=mid)
        {
            if(num[i]%j==0)
            {
                count++;
            }
            j++;
        }
        if(count==0)
        {
          console.log(num[i]);
        }
        count=0;
    }
}
 sum(arr);