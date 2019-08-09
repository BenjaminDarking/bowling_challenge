'use strict'

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when user make two score rolls', function() {
    it('scores a frame of 8 and 1 = 9', function() {
      frame.roll1(8)
      frame.roll2(1)
      expect(frame.frameScore).toEqual(9);
    })
  });

  describe('user rolls a strike', function() {
    it('user rolls a strike', function() {
      frame.roll1(10)
      expect(frame.isStrike).toEqual(true);
    })
  });

  describe('when player rolls a spare', function() {
    it('a player rolls spare with two rolls', function() {
      frame.roll1(8)
      frame.roll2(2)
      expect(frame.isSpare).toBe(true);
      expect(frame.getScore()).toEqual(10);
    })
  });

});