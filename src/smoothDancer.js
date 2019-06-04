var MakeSmoothDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};
  
MakeSmoothDancer.prototype = Object.create(MakeDancer.prototype);
  
MakeSmoothDancer.prototype.constructor = MakeSmoothDancer;
  
MakeSmoothDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  this.$node.css('border', '100px solid yellow');
  this.$node.css('border-radius', '100px');
  this.$node.fadeToggle();
};