const container1 = document.querySelector(".container2");
const results = container1.querySelector(".box");

//console.log(results);

var x = document.getElementById("changeMe");
x.querySelector("h3").style.backgroundColor = "red";
x.querySelector("h2").style.color = "red";



function myFunction() {
  var x = document.getElementById("grabit");
  x.querySelector(".firstTitle").innerHTML = "Hello You!";
}