// Return all the palindromes in an array //

let  str=["madam","apple","racecar"];

// Anonymous funcion
let string = function(txt)
{
  for(let i=0;i<txt.length;i++)
    {
        let word=txt[i];
         const rev =  word.split('').reverse().join('');
         if(word==rev)
         {
             console.log(word);
         }
    }

}
string(str);

// IIFE function
(function(txt)
{
  for(let i=0;i<txt.length;i++)
    {
        let word=txt[i];
         const rev =  word.split('').reverse().join('');
         if(word==rev)
         {
             console.log(word);
         }
    }

})(str);
 

