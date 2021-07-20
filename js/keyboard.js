var keysDown = {};
var ROTATION_ANGLE = 5;

addEventListener("keydown", function (e) {

  if (e.keyCode == 87) { 
    if (!keysDown[87]) {
      p1.angle = ROTATION_ANGLE;
      p1.rotatePoints(p1.angle);
    }
  }

  if (e.keyCode == 83) { 
    if (!keysDown[83]) { 
      p1.angle = -ROTATION_ANGLE;
      p1.rotatePoints(p1.angle);
    }
  }

  if (e.keyCode == 38) {
    if (!keysDown[38]) { 
      p2.angle = ROTATION_ANGLE;
      p2.rotatePoints(p2.angle);
    }
  }

  if (e.keyCode == 40) { 
    if (!keysDown[40]) {
      p2.angle = -ROTATION_ANGLE;
      p2.rotatePoints(p2.angle);
    }
  }

  keysDown[e.keyCode] = true;

}, false);

addEventListener("keyup", function (e) {

  if (e.keyCode == 87) {
    p1.angle = 0;
    p1.realignPoints();
  }

  if (e.keyCode == 83) { 
    p1.angle = 0;
    p1.realignPoints();
  }

  if (e.keyCode == 38) { 
    p2.angle = 0;
    p2.realignPoints();
  }

  if (e.keyCode == 40) { 
    p2.angle = 0;
    p2.realignPoints();
  }

  delete keysDown[e.keyCode];

}, false);
