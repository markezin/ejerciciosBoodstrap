var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("HOLA CARACOLA",0,100);

ctx.shadowBlur=10;
ctx.shadowOffsetX=20;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(200,200,100,80);

var grd = ctx.createLinearGradient(250, 0, 580, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(300, 20, 150, 100);

ctx.beginPath();
ctx.lineCap="round";
ctx.moveTo(800,100);
ctx.lineTo(900,100);

ctx.moveTo(1000,100);
ctx.lineTo(1100,100);

ctx.moveTo(970,150);
ctx.lineTo(1000,200);

ctx.moveTo(1000,200);
ctx.lineTo(950,200);

ctx.moveTo(875,300);
ctx.lineTo(1025,300);

ctx.moveTo(875,300);
ctx.lineTo(990,350);

ctx.moveTo(1025,300);
ctx.lineTo(990,350);

ctx.stroke();