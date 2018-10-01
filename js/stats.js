'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 14;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = Math.round(arr[i]);
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  for (var j = 0; j < players.length; j++) {

    ctx.fillText(Math.round(times[j]), CLOUD_X + GAP + j * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - (GAP + FONT_GAP) * 2 - (BAR_HEIGHT * times[j]) / maxTime);
    if (players[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + j * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - GAP - FONT_GAP - (BAR_HEIGHT * times[j]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[j]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[j], CLOUD_X + GAP + j * (BAR_GAP + BAR_WIDTH), CLOUD_HEIGHT - GAP);
  }
};
