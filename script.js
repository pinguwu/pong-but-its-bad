$("document").ready(function () {
  var paddle = new Object();
  var ball = new Object();

  // paddle location starting variables
  paddle.x = 150;
  paddle.y = 300;

  // paddle draw function
  function PaddleDraw (x, y) {
    ctx.fillRect(x, y, 100, 50)
  }

  // ball location starting variables
  ball.x = 200;
  ball.y = 100;

  var canvas = document.getElementById("pong");
  var ctx = canvas.getContext("2d");

});