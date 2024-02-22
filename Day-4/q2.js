
let resume =
{
    "name" : "Kaveri Shankar M",
    "designation" : "Software Developer",
    "exp" : "1.6 years",
    "company" : "Cognizant Technology and Solutions",
    "education" : "B.Tech",
    "edu_branch" : "Information Technology",
    "cgpa" : 82,
    "college" : "velammal college of engineering and technology, madurai",
    "hsc_per" : 76.5,
    "hsc_school" : "Velammal.Matric.Hr.Sec.School,Thiruppuvanam",
    "sslc_per" : 97,
    "ssc_school" : "Velammal.Matric.Hr.Sec.School,Thiruppuvanam",
    "dob" : "10-10-2000",
    "father_name" : "Mareeswaran",
    "address" : "Anna nagar , Chennai"
};

let key = Object.keys(resume);
let value = Object.values(resume);
let array = Object.entries(resume);


// for loop
console.log('for loop');
for(let i=0;i<key.length;i++)
{
    console.log(key[i], ":", value[i]);
}

console.log('\n');

//for in loop
console.log('for in loop');
for( let key in resume)
{
    console.log(key , ":", resume[key]);
}

console.log('\n');

//for of loop
console.log('for of loop');
for(let [key,value] of array)
{
    console.log(key + ' : ' + value);
}

console.log('\n');

//for each loop
console.log('for each loop');
let map = new Map();

for(let i=0;i<key.length;i++)
{
    map.set(key[i], value[i]);
}

// looping through Map
map.forEach (myFunction);

function myFunction(value, key) {
    
    console.log(key + ' : ' + value);
}