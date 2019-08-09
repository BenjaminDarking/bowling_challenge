'use strict'

function Frame() {
  this.currentFrame = [];
  this.score = 0;
  this.remainingPins = 10;
  this.strike = false;
}

Frame.prototype.roll = function(roll) {
  this.currentFrame.push(roll)
  this.score += roll;
  this.remainingPins -= roll;
};