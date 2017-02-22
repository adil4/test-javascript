var x = ["cake", "apple pie", "cookie", "chips", "patties"];
document.getElementById("qone").innerHTML = x.indexOf("cookie");


//var asd = prompt();

function replace(){
 var re = document.getElementById("ree").innerHTML;
    var rep = re.replace(/the/g,"ADIL");
document.getElementById("ree").innerHTML = rep;
}

var one = "adil", two = "ammar" , three = "zubair";
document.getElementById("two").innerHTML = one+ " " +two+ " " +three;

var fivex = 5;
 fivey = 5;
 fivez = fivex * fivey;
document.getElementById("fiv").innerHTML = fivex + "*" + fivey;
function fivefunction(){
    document.getElementById("five").innerHTML = fivez;
}

var six=parseInt( prompt( "Enter any number"));
var empty = "";
for(var i=1;i<21;i++){
    empty += (i * six + "<br>");
}
document.getElementById("sixq").innerHTML= empty;

function fourfunction(){
    var fourx = Number(document.getElementById("total").value);
    var foury = Number(document.getElementById("percent").value);
    var totalmarks = fourx / foury*100;
    document.getElementById("four").innerHTML = totalmarks;
}

var three = [{name: 'Asher', age: 22}, {name: 'Zubair', age: 20}, {name: 'Kashif', age: 23}, {name: 'Wasif', age: 17}, {name: 'Hanzala', age: 28}]

var th = three.filter(function(obj){
   return obj.age > 18;

});
document.getElementById("thre").innerHTML = th[0].name;
document.getElementById("thre1").innerHTML = th[1].name;
document.getElementById("thre2").innerHTML = th[2].name;

