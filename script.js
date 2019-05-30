$(document).ready(function () {
  var paddle = new Object();
  var ball = new Object();

  // paddle location starting variables
  paddle.x = 150;
  paddle.y = 300;
  paddle.friction = 3;
  paddle.momentum = 0;

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

  // starting direction determiner
  const speeds = [-4, -3, -2, -1, 1, 2, 3, 4];
  const otherSpeeds = [-5, 5];
  ball.deltaX = speeds[Math.floor(Math.random() * speeds.length)];
  if (ball.deltaX < 0) {
    ball.deltaY = ball.deltaX + 5;
  } else if (ball.deltaX > 0) {
    ball.deltaY = ball.deltaX - 5;
  }

  // the game loop
  var Game = setInterval( function () {
    // clear the canvas before each pass
    ctx.clearRect(0, 0, 400, 400);

    // ball-paddle interaction
    if ((ball.y) + 10 >= paddle.y && (ball.x >= paddle.x && ball.x <= (paddle.x + 100))) {
      ball.y = paddle.y - 10;
      ball.deltaY = -ball.deltaY;
    }

    // ball-wall interaction
    if (ball.x + ball.deltaX > canvas.width - 10 || ball.x + ball.deltaX < 10) {
      ball.deltaX = -ball.deltaX;
    }
    if (ball.y + ball.deltaY > canvas.height - 10 || ball.y + ball.deltaY < 10) {
      ball.deltaY = -ball.deltaY;
    }

    // end the game if the ball is touching the bottom
    if (ball.y >= 385) {
      clearInterval(Game);
    }

    // ball movement
    ball.y += ball.deltaY;
    ball.x += ball.deltaX;

    // paddle movement
    document.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return;
      } else if (event.key == "ArrowLeft") {
        paddle.momentum = paddle.momentum - 5;
      } else if (event.key == "ArrowRight") {
        paddle.momentum = paddle.momentum + 5;
      }
      event.preventDefault();
    });
    paddle.x += paddle.momentum;
    paddle.momentum = paddle.momentum / paddle.friction


    // draw ball with each pass
    BallDraw(ball.x, ball.y);

    //draw paddle with each pass
    PaddleDraw(paddle.x, paddle.y);

  }, 16);
});
