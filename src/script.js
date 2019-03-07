// for webpack issues the file must be built before the dev server will
// have hot reload enabled

const canvas = document.querySelector('canvas');
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let x = 100;
let rest = 200;
let k = 0.2;
let f;
let v = 0;
let pos;
let accel;
let vel = 1;

let animation = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animation);
  f = x - rest;
  vel += f * -k;
  x += vel
  console.log(x)
  ctx.rect(x ,20,10,10);
  ctx.stroke()
}
animation()
