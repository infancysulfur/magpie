function plusHandler() {
  var firstNumber = $("#first-number").val();
  var secondNumber = $("#second-number").val();

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  var result = firstNumber + secondNumber;

  $("#result").text(result);
}
function minusHandler() {
  var firstNumber = $("#first-number").val();
  var secondNumber = $("#second-number").val();

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  var result = firstNumber - secondNumber;

  $("#result").text(result);
}
function timesHandler() {
  var firstNumber = $("#first-number").val();
  var secondNumber = $("#second-number").val();

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  var result = firstNumber * secondNumber;

  $("#result").text(result);
}
function devideHandler() {
  var firstNumber = $("#first-number").val();
  var secondNumber = $("#second-number").val();

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  var result = firstNumber / secondNumber;

  $("#result").text(result);
}
$(document).ready(function() {
  $("#plus").click(plusHandler)
  $("#minus").click(minusHandler)
  $("#times").click(timesHandler)
  $("#devide").click(devideHandler)
});