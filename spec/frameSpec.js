'use strict'

describe('Frame tests', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('when user make two score rolls', function() {
    it('scores a frame of 8 and 6 = 14', function() {
      frame.roll(8)
      frame.roll(6)
      expect(frame.score).toEqual(14);
    })
    it('remaining pins will be 8 after a two roll', function() {
      frame.roll(2)
      expect(frame.remainingPins).toEqual(8);
    })
  })

  describe('when player rolls a strike', function() {
    it('a player rolls strike on first roll', function() {
      frame.roll(10)
      expect(frame.remainingPins).toEqual(0);
      expect(frame.inProgress).toBe(false);
    })
  })
});