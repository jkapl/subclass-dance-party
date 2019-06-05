describe('flippyDancer', function() {
    var flippyDancer;
    beforeEach(function() {
      flippyDancer = new MakeFlippyDancer(10, 20, 100);
    });
  
    it('should have a jQuery $node object', function() {
      expect(flippyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it('should have a step function that makes its node slide', function() {
        sinon.spy(flippyDancer.$node, 'slideToggle');
        flippyDancer.step();
        expect(flippyDancer.$node.slideToggle.called).to.be.true;
    });
  });