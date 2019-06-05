describe('smoothDancer', function() {
  var smoothDancer;
  beforeEach(function() {
    smoothDancer = new MakeSmoothDancer(10, 20, 100);
  });

  it('should have a jQuery $node object', function() {
    expect(smoothDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade', function() {
    sinon.spy(smoothDancer.$node, 'fadeToggle');
    smoothDancer.step();
    expect(smoothDancer.$node.fadeToggle.called).to.be.true;
  });
});