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

  // gravity!
  var gravity = 5;
  var ballYChange = 0;

  setInterval( function () {
    // clear the canvas before each pass
    ctx.clearRect(0, 0, 400, 400);

    // gravity and such
    ballYChange -= gravity;
    if (ballYChange <= 5) {
      ball.y -= ballYChange;
    }
    else {
      ballYChange = 5;
    }

    if (ball.y >= 400) {
      ball.y = -20;
    }

    // draw ball with each pass
    BallDraw(ball.x, ball.y);

    //draw paddle with each pass
    PaddleDraw(paddle.x, paddle.y);
  }, 33);

});
