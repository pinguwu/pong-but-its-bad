$(document).ready(function () {
  var paddle = new Object();
  var ball = new Object();

  // paddle location starting variables
  var paddle.x = 150;
  var paddle.y = 300;

  // defining canvas controlling variables
  var canvas = document.getElementById("pong");
  var ctx = canvas.getContext("2d");

  // paddle draw function
  function PaddleDraw (x, y) {
    ctx.fillRect(x, y, 100, 50)
  }

  // ball location starting variables
  var ball.x = 200;
  var ball.y = 100;

});
