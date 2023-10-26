var x1 = 20;
var x2 = 30;
var combined = Math.pow(x1 - x2 ,2);
var y1 = 40;
var y2 = 60;
var combined1 = Math.pow(y1 - y2 ,2);
var distance = Math.sqrt(combined + combined1);
distance = Math.round(distance * 100) / 100;
console.log(distance);
