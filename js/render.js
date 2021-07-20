// Draw everything
var render = function () {

  ctx.fillStyle = bgPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (ballBgImage.loaded) {
    ctx.drawImage(ballBgImage, ball.x, ball.y);
  }

  p1.render();
  p2.render();

  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "18px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  ctx.fillText(p1.score, 32, 32);

  ctx.fillText(p2.score, canvas.width - 32 - 10, 32);

  ctx.font = "36px Bernard MT Condensed";

  if (!isGameStarted) {
    ctx.fillText("Press spacebar to start", 230, canvas.height / 16);
  }
};
