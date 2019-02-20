// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let xDir;
let yDir;
let x = 150;
let y = 150;
let a = x;
let counter;
/*
function mouseDirection(e){
  xDir = e.pageX;
  yDir = e.pageY;
}

let colorChange = () => {
  if(xDir < 150){
    ctx.fillStyle = 'red'
    ctx.fill()
  }
}
*/

let mouseX = 0;
let mouseLastX = 0;
let mouseY = 0;
let mouseLastY = 0;
let mouseDirectionX;
let mouseDirectionY;

let gravity = () => {

    if(counter < 150){
      counter += 1
      ctx.fillStyle = 'red'
      ctx.fill()
    } else if(counter > 150){
        counter -= 1
        ctx.fillStyle = 'green'
        ctx.closePath()
        ctx.fill()
      }
  }

  function mouseDirection(e) {
  if (mouseX < e.pageX) mouseDirectionX = 1;
  else if (mouseX > e.pageX) mouseDirectionX = -1;
  else mouseDirectoinX = 0;

  if (mouseY < e.pageY) mouseDirectionY = 1;
  else if (mouseY > e.pageY) mouseDirectionY = -1;
  else mouseDirectionY = 0;

  mouseX = e.pageX;
  mouseY = e.pageY;
}

  function mouseSpeed() {
  mouseSpeedX = mouseX - mouseLastX;
  mouseSpeedY = mouseY - mouseLastY;

  mouseLastX = mouseX;
  mouseLastY = mouseY;

  //setTimeout(mouseSpeed, 50);
}

let bLine = (lineEnd, lineLength, lineDir, bottomcurve, lineEndDir, lineTopLength) => {
  ctx.beginPath();
  ctx.bezierCurveTo(lineEnd, lineLength, lineDir, bottomcurve, lineEndDir, lineTopLength)
  ctx.stroke()
  ctx.fillStyle = 'green'
  ctx.closePath()
  ctx.fill()
  //colorChange()
  gravity()
  console.log(mouseSpeedX)
}

let animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mouseSpeed()
    bLine(150, 10, mouseSpeedX, yDir, 150, 100)
}
animate()

document.addEventListener('mousemove', mouseDirection)
