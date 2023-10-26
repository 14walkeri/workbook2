var a = 24
var b = 80
var c = 4

var largest;
var smallest;

if (a >= b ) {
    largest = a;
}

else if (a <= b) {
    smallest = a;
}

else if (b <= a) {
    smallest = b;
}
else if (b >= a) {
    largest = b;
}
else if (c >= a) {
    largest = c;
}
else if (c <= a) {
    smallest = c;
}
else if (c >= b) {
    largest = c;
}
else  {
    smallest = c;
}
console.log(largest, smallest);