'use strict'

function Game() {
  this.gamePlay = []
  this.scorecard = 0
};

Game.prototype.getScorecard = function() {
  return this.scorecard;
}

Game.prototype.addFrame = function(frame) {
  this.gamePlay.push(frame)
  this.scorecard += frame.frameScore;
}

Game.prototype.updateScore = function(frame) {
  this.scorecard += frame.score1 + frame.score2
}