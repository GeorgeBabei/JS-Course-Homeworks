const submitButton = document.getElementById("submit-btn");
const inputVal1 = document.getElementById("first-text");
const inputVal2 = document.getElementById("second-text");
const incompleteInputDiv = document.getElementById("nonvalid-div");
const okInputDiv = document.getElementById("valid-div");
const outputText = "Thank you for contacting us, " + inputVal1.value;
const inputValidated = function () {
  okInputDiv.classList.remove("vld-div1");
  okInputDiv.classList.add("hidden-div1");
};
submitButton.addEventListener("click", function () {
  if (inputVal1.validity.valid && inputVal2.validity.valid) {
    okInputDiv.classList.add("vld-div1");
    okInputDiv.classList.remove("hidden-div1");
    document.getElementById("name-text").innerHTML =
      "Thank you for contacting us, " + inputVal1.value + "!";
    setTimeout(inputValidated, 1500);
  } else {
    inputVal1.onblur = function () {
      if (inputVal1.validity.valueMissing) {
        inputVal1.classList.add("text-red");
        incompleteInputDiv.classList.remove("hidden-div2");
        incompleteInputDiv.classList.add("vld-div2");
      }
    };
    inputVal1.onfocus = function () {
      if (inputVal1.classList.contains("text-red")) {
        inputVal1.classList.remove("text-red");
        incompleteInputDiv.classList.add("hidden-div2");
        incompleteInputDiv.classList.remove("vld-div2");
      }
    };
    inputVal2.onblur = function () {
      if (inputVal2.validity.valueMissing) {
        inputVal2.classList.add("text-red");
        incompleteInputDiv.classList.remove("hidden-div2");
        incompleteInputDiv.classList.add("vld-div2");
      }
    };
    inputVal2.onfocus = function () {
      if (inputVal2.classList.contains("text-red")) {
        inputVal2.classList.remove("text-red");
        incompleteInputDiv.classList.add("hidden-div2");
        incompleteInputDiv.classList.remove("vld-div2");
      }
    };
  }
});

document.querySelector("#close-btn1").addEventListener("click", function () {
  document.getElementById("valid-div").classList.toggle("hidden-div1");
});
document.querySelector("#close-btn2").addEventListener("click", function () {
  document.getElementById("nonvalid-div").classList.toggle("hidden-div2");
});
