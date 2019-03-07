// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let currentPosition = 50;
let restLength = 150;
let k = 0.001;
let force;
let distance;
let velocity = 0;

let animation = () => {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(currentPosition, 40, 10, 10);
  ctx.stroke()
  distance = currentPosition - restLength;
  force = distance * -k
  velocity += force
  currentPosition += velocity
}
animation()
