$(document).ready(function () {
  var paddle = new Object();
  var ball = new Object();

  // paddle location starting variables
  paddle.x = 150;
  paddle.y = 300;

  // defining canvas controlling variables
  var canvas = document.getElementById("pong");
  var ctx = canvas.getContext("2d");

  // paddle draw function
  function PaddleDraw (x, y) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, 100, 10);
  }

  // ball location starting variables
  ball.x = 200;
  ball.y = 100;

  // ball draw function
  function BallDraw (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }

  // draw the paddle using the PaddleDraw function
  PaddleDraw(paddle.x, paddle.y);

  // draw the ball using the BallDraw function
  BallDraw(ball.x, ball.y);

});
