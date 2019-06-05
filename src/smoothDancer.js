var MakeSmoothDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img id="smoothDancer" src="https://www.freepngimg.com/thumb/halloween/25708-6-halloween-skeleton-transparent.png"/>');
  this.$node.css('border', '0px');
  this.$node.mouseover(function() {
    $(this).prepend('<img id="smoothDancer" src="https://www.freepngimg.com/thumb/halloween/25708-6-halloween-skeleton-transparent.png"/>');
  });
};
  
MakeSmoothDancer.prototype = Object.create(MakeDancer.prototype);
  
MakeSmoothDancer.prototype.constructor = MakeSmoothDancer;
  
MakeSmoothDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  //this.$node.css('border', '100px solid yellow');
  //this.$node.css('border-radius', '100px');
  this.$node.fadeToggle();
};