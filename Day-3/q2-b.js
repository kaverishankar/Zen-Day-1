// Convert all the strings to title caps in a string array //

let  str=["dog","fish","cat"];

// Arrow function
let string = (txt) =>
{
  for(let i=0;i<txt.length;i++)
    {
        let word=txt[i];
         txt[i]=word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();
    }
    console.log(txt);
}
string(str);