var Paddle = function () {
  this.score = 0,
  this.speed = 600,
  this.width = 24,
  this.height = 96,

  this.points = [],

  this.pos = new Vector2,
  this.pivot = new Vector2,

  this.direction = new Vector2,
  this.bgImage = new Image,

  this.angle = -1,

  Object.defineProperty(this, 'x', {
    get: function () {
      return this.pos.x;
    },
    set: function (value) {
      this.pos.x = value;
    }
  });

  Object.defineProperty(this, 'y', {
    get: function () {
      return this.pos.y;
    },
    set: function (value) {
      this.pos.y = value;
    }
  });

  this.updatePivot = function () {
    this.pivot.set(this.width / 2, this.height / 2).addSelf(this.pos);
  },

  this.updatePoints = function (movementYaxis) {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].y += movementYaxis;
    }
  },

  this.rotatePoints = function (angle) {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].rotateAroundPivot(this.pivot, angle);
    }
  },

  this.realignPoints = function () {
    var topRight = new Vector2(this.width, 0),
        bottomRight = new Vector2(this.width, this.height),
        bottomLeft = new Vector2(0, this.height);

    this.points = [
      this.pos.clone(),
      this.pos.clone().addSelf(topRight),
      this.pos.clone().addSelf(bottomRight),
      this.pos.clone().addSelf(bottomLeft)
    ];
  },

  this.render = function () {
    if (this.angle == 0) { 

      if (this.bgImage.loaded) {
        ctx.drawImage(this.bgImage, this.x, this.y);
      }

    } else { 

      ctx.save();

      ctx.translate( this.pivot.x, this.pivot.y );

      ctx.rotate( (Math.PI / 180) * this.angle );

      ctx.translate( -1 * this.pivot.x, -1 * this.pivot.y );

      ctx.drawImage(this.bgImage, this.x, this.y);

      ctx.restore();
    }
  }

  return this;
}
