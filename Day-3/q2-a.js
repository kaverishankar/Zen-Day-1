// Print odd numbers in an array //
let  arr=[4,6,9,2,8,7,3];

// Arrow function
let add = (num) =>  {for(let i=0;i<num.length;i++)
    {
        if(num[i]%2!=0)
        {
            console.log(num[i]);
        }
    }
}

add(arr);