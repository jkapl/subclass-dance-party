var MakeFlippyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeFlippyDancer.prototype = Object.create(MakeDancer.prototype);

MakeFlippyDancer.prototype.constructor = MakeFlippyDancer;

MakeFlippyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);

  this.$node.fadeToggle();
};

