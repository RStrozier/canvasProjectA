const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.fillRect(25, 12, 250, 125);

const grdY = ctx.createLinearGradient(0, 0, 200, 0)
grdY.addColorStop(0, "yellow")
grdY.addColorStop(1, "white")

ctx.fillStyle = grdY;
ctx.fillRect(50, 25, 200, 100);


ctx.fillStyle = "black"
ctx.fillRect(75, 37, 150, 75);

ctx.fillStyle = "white";
ctx.fillRect(100, 50, 100, 50);

// creating a line
// ctx.moveTo(0, 0);
// ctx.strokeStyle = "black";
// ctx.lineWidth = 2;
// ctx.lineTo(400, 200);
// ctx.stroke();

// circles  
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(152, 77, 25, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#fff44f";
ctx.lineWidth = 4;
ctx.arc(152, 77, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.lineWidth = 2;
ctx.arc(152, 77, 8, 0, 2 * Math.PI);
ctx.fill();