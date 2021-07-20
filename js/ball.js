var Ball = function () {
  this.size = 48,
  this.speed = 300,
 
  this.deflect = function (N) {
    var dot = this.velocity.dot(N);
    var v1 = N.multiplyScalar(2 * dot);
    this.velocity = v1.subSelf(this.velocity);
  }

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

  return this;
}
