// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let xDir;
let yDir;
let x = 150;
let y = 150

function mouseDirection(e){
  xDir = e.pageX;
  yDir = e.pageY;
}

let colorChange = (x) => {
  if(xDir < 150){
    ctx.fillStyle = 'red'
    ctx.fill()
  }
}

let bLine = (lineEnd, lineLength, lineDir, bottomcurve, lineEndDir, lineTopLength) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.bezierCurveTo(lineEnd, lineLength, lineDir, bottomcurve, lineEndDir, lineTopLength)
  ctx.stroke()
  ctx.fillStyle = 'green'
  ctx.closePath()
  ctx.fill()
  colorChange()
}

setInterval(() => bLine(150, 10, x, y, 150, 100), 100)

document.addEventListener('mousemove', mouseDirection)
