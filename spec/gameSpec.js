'use strict'

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("user rolls two frames", function() {
    it('user rolls two score frames without strikes and spares', function() {
      var frame = new Frame();
      frame.roll1(8)
      frame.roll2(1)
      game.addFrame(frame)
      var frame2 = new Frame();
      frame2.roll1(8)
      frame2.roll2(1)
      game.addFrame(frame2)
      expect(game.getScorecard()).toEqual(18)
    })
  })
  describe("bowling a strike", function() {
    it('user bowls a strike first roll, scores correctly and mocves to next frame', function() {
      var game = new Game();
      var frame = new Frame();

      frame.roll1(10)
      game.addFrame(frame)
      game.updateScore(frame)
      console.log(frame)
      console.log(game)
      expect(game.scorecard).toEqual(10)
    })
  })
})