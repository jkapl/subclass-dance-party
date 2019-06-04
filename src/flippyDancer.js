var MakeFlippyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps * 5;
};

MakeFlippyDancer.prototype = Object.create(MakeDancer.prototype);

MakeFlippyDancer.prototype.constructor = MakeFlippyDancer;

MakeFlippyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  var randColor = Math.floor(Math.random()*16777215).toString(16);
  this.$node.css('height', '30px');
  this.$node.css('border', '10px solid blue');
  this.$node.slideToggle();
};

