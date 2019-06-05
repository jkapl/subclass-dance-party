// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  window.dancers.push(this.$node);
  // this.index = window.dancers.length - 1;
  this.step();
  // this.$node.mouseover(function (){
  //   var top = window.dancers[1].css('top');
  //   var left = window.dancers[1].css('left');
  //   console.log(top);
  //   console.log(left); 
  //   // $(this).css()
  // });


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

//new keyword
//set constructor to subclass function name