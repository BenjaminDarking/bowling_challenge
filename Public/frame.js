'use strict'

function Frame() {
  this.score1 = 0;
  this.score2 = 0;
  this.frameScore = 0;
  this.isStrike = false;
  this.isSpare = false;
};

Frame.prototype.getScore = function() {
  return this.frameScore;
}

Frame.prototype.totalFrame = function() {
  this.frameScore = this.score1 + this.score2;
  return this.frameScore;
}

Frame.prototype.roll1 = function(roll) {
  if (roll == 10) {
    this.totalFrame()
    return this.isStrike = true;
  }
  return this.score1 += roll;
}

Frame.prototype.roll2 = function(roll) {
  this.score2 = roll
  this.totalFrame()
  if (this.frameScore == 10) {
    return this.isSpare = true;
  }
  return this.score2 += roll;
}