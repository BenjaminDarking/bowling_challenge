'use strict'

function Frame() {
  this.score1 = 0;
  this.score2 = 0;
  this.frameScore = 0;
  this.isStrike = false;
  this.isSpare = false;
};

Frame.prototype.totalFrame = function() {
  this.frameScore = this.score1 + this.score2;
  return this.frameScore;
}

Frame.prototype.roll1 = function(roll) {
  if (roll == 10) {
    return this.isStrike = true;
  }
  return this.score1 += roll;
}

Frame.prototype.roll2 = function(roll) {
  if (this.roll1 + roll == 10) {
    return this.isSpare = true;
  }
  return this.score2 += roll;
}