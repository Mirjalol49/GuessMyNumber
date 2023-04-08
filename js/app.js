const elForm = document.querySelector("#js-form");
let elInput = document.querySelector("#js-input");
const elBtn = document.querySelector("#js-btn");
const elRefresh = document.querySelector("#js-refresh")
const elResult = document.querySelector("#js-result");
const elRound = document.querySelector(".round");
let magicNumber = Math.trunc(Math.random() * 20);

elForm.addEventListener("submit", function(event) {
  event.preventDefault();
  inputValue = parseInt(elInput.value.trim());
  console.log(magicNumber);

  const displayMessage = function(message) {
    elResult.textContent = message;
  }
  
  if (inputValue === magicNumber) {
    displayMessage(`Congratulations🎊`)
    elInput.disabled = true;
    elRefresh.classList.add("on");
    elBtn.classList.add("refresh")
} else {
   displayMessage(inputValue > magicNumber ? "Too high🔥" : "Too low❄️")
   elInput.value = "";
  }
});
