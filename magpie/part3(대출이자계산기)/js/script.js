function calculaterHandler() {
  var loan = $("#loan").val();
  var interest = $("#interest").val();
  var period = $("#period").val();

  loan = parseFloat(loan);
  interest = parseFloat(interest);
  period = parseFloat(period);

  var monInterest = interest / 12 / 100
  var result = (loan*monInterest*(1+monInterest)**period)/((1+monInterest)**period - 1) ;

  var roundedResult = result.toFixed(0);
  var formattedResult = Number(roundedResult).toLocaleString();
  var resultText = `${period}개월 동안 월 상환액은 <strong>${formattedResult}원</strong> 입니다.`;
  $('#result').html(resultText);
}
function loan100Handler() {
  var loan = $("#loan").val();

  if(loan == "") {
    loan = 0;
  }

  loan = parseFloat(loan);

  loan = loan + 1000000

  $("#loan").val(loan);
}
function loan1000Handler() {
  var loan = $("#loan").val();

  if(loan == "") {
    loan = 0;
  }

  loan = parseFloat(loan);

  loan = loan + 10000000

  $("#loan").val(loan);
}
function loan10000Handler() {
  var loan = $("#loan").val();

  if(loan == "") {
    loan = 0;
  }

  loan = parseFloat(loan);

  loan = loan + 100000000

  $("#loan").val(loan);
}

function interest3Handler() {
  $("#interest").val(3);
}
function interest4Handler() {
  $("#interest").val(4);
}
function interest5Handler() {
  $("#interest").val(5);
}
function interest6Handler() {
  $("#interest").val(6);
}
function interest8Handler() {
  $("#interest").val(8);
}
function interest10Handler() {
  $("#interest").val(10);
}

function period6monHandler() {
  $("#period").val(6);
}
function period1Handler() {
  $("#period").val(12);
}
function period2Handler() {
  $("#period").val(24);
}
function period3Handler() {
  $("#period").val(36);
}
function period5Handler() {
  $("#period").val(60);
}
function period10Handler() {
  $("#period").val(120);
}



$(document).ready(function() {
  // 여기에 코드 작성
  $("#calculate").click(calculaterHandler)
  $("#loan-100").click(loan100Handler)
  $("#loan-1000").click(loan1000Handler)
  $("#loan-10000").click(loan10000Handler)

  $("#interest-3").click(interest3Handler)
  $("#interest-4").click(interest4Handler)
  $("#interest-5").click(interest5Handler)
  $("#interest-6").click(interest6Handler)
  $("#interest-8").click(interest8Handler)
  $("#interest-10").click(interest10Handler)

  $("#period-6mon").click(period6monHandler)
  $("#period-1").click(period1Handler)
  $("#period-2").click(period2Handler)
  $("#period-3").click(period3Handler)
  $("#period-5").click(period5Handler)
  $("#period-10").click(period10Handler)


});

