var birthdayDate = document.querySelector("#bd-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-btn");
var messageDispay = document.querySelector("#output-text");

function luckyLogic(sum, luckyNumber) {
  if (sum % luckyNumber == 0) {
    messageDispay.innerText = "Your birthday is lucky ๐";
    messageDispay.style.color = "#4cbb17";
  } else {
    messageDispay.innerText = "Your birthday is not lucky ๐โโ๏ธ";
    messageDispay.style.color = "red";
  }
}

function isBirtdateLucky() {
  var sum = calculateSum(birthdayDate.value);
  if (sum && luckyNumber.value) {
    luckyLogic(sum, luckyNumber.value);
  } else {
    messageDispay.innerText = "Please enter both the fiels๐ ";
    messageDispay.style.color = "yellow";
  }
}

function calculateSum(bdDate) {
  bdDate = bdDate.replaceAll("-", "");
  let sum = 0;
  for (i = 0; i < bdDate.length; i++) {
    sum = sum + Number(bdDate.charAt(i));
  }
  return sum;
}
checkButton.addEventListener("click", isBirtdateLucky);
