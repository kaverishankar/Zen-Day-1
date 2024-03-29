

function display(value) {
    document.getElementById("output").value += value;
}
 
function calculate() {
    var ip = document.getElementById("output").value;
    var ans = eval(ip);
    document.getElementById("output").value = ans;
}

function clear() {
    document.getElementById('output').value = '0';
}

function back() {
    var bac = document.getElementById('output');
    bac.value = bac.value.slice(0,-1);
 }

 document.addEventListener('keydown',(event)=>
 {
    var num = /^[0-9]+$/;
    if(event.key.match(num))
    {
        document.getElementById('output').value = event.key;
    }
    else{
        alert("Enter Only Number");
    }
 })