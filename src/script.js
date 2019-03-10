// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let currentPosition = 150;
let restLength = 150;
let k = 0.1;
let force;
let distance;
let velocity = 0;
let damp = 0.9;
let x;
let lastX;
let speed;

let mouseSpeed = (e) => {
  speed =  x - lastX;
  lastX = x;
  setTimeout(mouseSpeed, 50)
}
mouseSpeed()

document.addEventListener('mousemove', (e) => {
  x = e.pageX
})

let animation = () => {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(x > 130 && x < 170){
    currentPosition = speed + 150
  }
  ctx.fillRect(currentPosition, 40, 10, 10)
  distance = currentPosition - restLength;
  force = distance * -k;
  velocity *= damp;
  velocity += force;
  currentPosition += velocity;
}
animation()
