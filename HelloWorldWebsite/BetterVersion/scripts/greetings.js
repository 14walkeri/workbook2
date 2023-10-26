//"use strict";
//function showGreeting() {
//let messageDiv = document.getElementById("messageDiv");
//messageDiv.innerHTML = "Hello World!";
//}
//showGreeting();

//let orderNum = 10254;
//let orderStatus = "processing";
//let message = "Order " + orderNum + "'s status is: " + orderStatus;
//let message1 = `Order ${orderNum}'s status is ${orderStatus}   `
//console.log(message1);
window.onload = init;
function init() {
  const helpMe = document.getElementById("helpMe");
  helpMe.onclick = onHelpMeClicked;
}
function onHelpMeClicked() {
  const messagePara = document.getElementById("messagePara");
  messagePara.innerText = " SUPRISE! Im Struggling";
}
