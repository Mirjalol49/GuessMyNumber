//!GET ELEMENTS FROM DOM
const elForm = document.querySelector("#js-form");
let elInput = elForm.querySelector("#js-input");
const elBtn = elForm.querySelector("#js-btn");
const elRefresh = elForm.querySelector("#js-refresh")
const elResult = elForm.querySelector("#js-result");
let life = document.querySelector(".life");
let remainLife = document.querySelector(".remainlife");
const heartImg = document.querySelector(".heart");
const question = document.querySelector(".question");
const mainTitle = document.querySelector(".main-title");
const subtitle = document.querySelector(".subtitle");
let remainlifeNumber = 5;
let magicNumber = Math.round(Math.random() * 20);

//! PREVENTING THE FORM FROM BEING RELOADED
elForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  
  //! CONVERTING STRING INTO INTEGER NUMBER
  inputValue = parseInt(elInput.value.trim());
  console.log(magicNumber);
  
  //! THIS FUNCTIONS DISPLAYS THE FUNCTION
  const displayMessage = function(message) {
    elResult.textContent = message;
  }
  
  //! GAME LOGIC GOES HERE
  if (inputValue === magicNumber) {
    displayMessage(`Vanihoyat Topdingiz, Tabriklayman, Tabassum qiling🤩🎊`)
    elInput.disabled = true;
    elRefresh.classList.add("on");
    elBtn.classList.add("refresh");
    document.body.style.backgroundColor = "green";
  } else {
    displayMessage(inputValue > magicNumber ? "Vaybo', muncha katta🙄" : "Bundan kattaroq raqam o'ylaganman🥱")
    elInput.value = "";
    remainlifeNumber--;
    elInput.classList.add("animate__headShake");
    elInput.classList.add("error-red");
    setTimeout(() => {
      elInput.classList.remove("animate__headShake");
      elInput.classList.remove("error-red");
    }, 500);
  };
  
  life.textContent = remainlifeNumber;
  
  if(remainlifeNumber <= 0) {
    life.textContent = "Afsuski yutqazdingiz, qayta urinib ko'ring...🐈‍⬛";
    elInput.classList.add("refresh")
    elRefresh.classList.add("on");
    elForm.classList.add("form-control")
    displayMessage.disabled = true;
    elResult.classList.add("refresh")
    heartImg.classList.add("refresh");
    question.classList.add("refresh")
    elBtn.classList.add("refresh");
    mainTitle.classList.add("refresh");
    subtitle.classList.add("refresh")
  }
  
  
});


