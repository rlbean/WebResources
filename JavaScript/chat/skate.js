var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Create skateboard deck
ctx.beginPath();
ctx.rect(100, 150, 200, 50);
ctx.fillStyle = "brown";
ctx.fill();

// Create skateboard wheels
ctx.beginPath();
ctx.arc(150, 250, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 250, 25, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

// Create skateboard trucks
ctx.beginPath();
ctx.rect(75, 230, 50, 20);
ctx.fillStyle = "silver";
ctx.fill();

ctx.beginPath();
ctx.rect(275, 230, 50, 20);
ctx.fillStyle = "silver";
ctx.fill();

// Create skateboard grip tape
ctx.beginPath();
ctx.rect(100, 150, 200, 10);
ctx.fillStyle = "black";
ctx.fill();

// Create skateboard bolt
ctx.beginPath();
ctx.arc(175, 200, 5, 0, 2 * Math.PI);
ctx.fillStyle = "silver";
ctx.fill();

ctx.beginPath();
ctx.arc(225, 200, 5, 0, 2 * Math.PI);
ctx.fillStyle = "silver";
ctx.fill();