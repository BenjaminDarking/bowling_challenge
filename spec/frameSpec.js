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
      frame.totalFrame()
      expect(frame.frameScore).toEqual(9);
    })
    //   it('remaining pins will be 8 after a two roll', function() {
    //     frame.roll(2)
    //     expect(frame.remainingPins).toEqual(8);
    //   })
    // })
    //
    // describe('when player rolls a strike', function() {
    //   it('a player rolls strike on first roll', function() {
    //     frame.roll(10)
    //     expect(frame.isStrike).toBe(true);
    //   })
    // })
  })
});