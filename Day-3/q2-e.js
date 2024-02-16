// Return all the palindromes in an array //

let  str=["madam","apple","racecar"];

// Arrow funcion
let string = (txt) =>
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