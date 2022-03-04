$("#currentDay").text(moment().format('dddd, MMMM Do'));

var timeBlock = $('textarea');
var currentTime = moment().format('LT');

timeBlock.addClass('past');

