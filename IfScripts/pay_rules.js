var payRate = 20;
var hoursWorked = 40;
var overTimeHours = 2;
var overTimePayRate = payRate * 1.5;

var overTimePay;
var totalPay;

if (overTimeHours > 0) {
    overTimePay = overTimeHours * overTimePayRate
}
else {
    overTimePay = 0;
}

totalPay = (payRate * hoursWorked) + overTimePay; 
console.log(totalPay);
