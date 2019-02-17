// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let xDir;
let yDir;

function mouseDirection(e){
  xDir = e.pageX;
  yDir = e.pageY;
}

let circle = (a, s, d, f) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.bezierCurveTo(a, s, 200, 100, 200, 20)
  ctx.stroke()
}

setInterval(() => circle(xDir, yDir), 100)

document.addEventListener('mousemove', mouseDirection)
