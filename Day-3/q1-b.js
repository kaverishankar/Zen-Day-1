// Convert all the strings to title caps in a string array //

let  str=["dog","fish","cat"];

// Anonymous funcion
let string = function(txt)
{
  for(let i=0;i<txt.length;i++)
    {
        let word=txt[i];
         txt[i]=word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();
    }
    console.log(txt);
}
string(str);

// IIFE function
(function(txt)
{
  for(let i=0;i<txt.length;i++)
    {
        let word=txt[i];
         txt[i]=word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();
    }
    console.log(txt);
})(str);



 

