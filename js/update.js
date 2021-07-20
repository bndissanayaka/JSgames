var update = function (modifier) {

  if (32 in keysDown) { 
    isGameStarted = true;
  }

  if (!isGameStarted) {
    return false;
  }

  if (87 in keysDown) { 
    if (p1.y > 0) {
      var movementYaxis = p1.speed * modifier;
      p1.y -= movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis * -1);

      if (p1.y <= 0) {
        p1.y = 0;
      }
    }
  }

  if (83 in keysDown) { 
    if (p1.y + p1.height < canvas.height) {
      var movementYaxis = p1.speed * modifier;
      p1.y += movementYaxis;

      p1.updatePivot();
      p1.updatePoints(movementYaxis);

      if (p1.y + p1.height > canvas.height) {
        p1.y = canvas.height - p1.height;
      }
    }
  }

  if (38 in keysDown) { 
    if (p2.y > 0) {
      var movementYaxis = p2.speed * modifier;
      p2.y -= movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis * -1);
	  
      if (p2.y <= 0) {
        p2.y = 0;
      }
    }
  }

  if (40 in keysDown) { 
    if (p2.y + p2.height < canvas.height) {
      var movementYaxis = p2.speed * modifier;
      p2.y += movementYaxis;

      p2.updatePivot();
      p2.updatePoints(movementYaxis);

      if (p2.y + p2.height > canvas.height) {
        p2.y = canvas.height - p2.height;
      }
    }
  }

  if (ball.x <= 0) {
	 
    p2.score++;
    reset();
  }

  if (ball.x >= canvas.width - ball.size) {
    p1.score++;
    reset();
  }

  if (
    ball.x <= (p1.x + p1.width)
    && p1.x <= (ball.x + ball.size)
    && ball.y <= (p1.y + p1.height)
    && p1.y <= (ball.y + ball.size)
  ) {

    var a = p1.points[1].clone(),
        b = p1.points[2].clone();

    p1.direction = b.subSelf(a).normalize();

    ball.deflect(p1.direction);

    ball.x = p1.x + p1.width +1;
  }

  if (
    ball.x <= (p2.x + p2.width)
    && p2.x <= (ball.x + ball.size)
    && ball.y <= (p2.y + p2.height)
    && p2.y <= (ball.y + ball.size)
  ) {
    var a = p2.points[0].clone(),
        b = p2.points[3].clone();

    p2.direction = b.subSelf(a).normalize();

    ball.deflect(p2.direction);

    ball.x = p2.x - ball.size -1;
  }

  if (ball.y <= 0) {
    ball.deflect( new Vector2(1, 0) );

    ball.y = 0.1;
  }

  if (ball.y + ball.size >= canvas.height) {
    ball.deflect( new Vector2(1, 0) );

    ball.y = canvas.height - ball.size -1;
  }

  ball.x += ball.velocity.x * modifier;
  ball.y += ball.velocity.y * modifier;
};
