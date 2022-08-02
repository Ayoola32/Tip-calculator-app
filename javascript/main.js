alert(
  "Thank you for visiting my project, if you're viewing this, kindly help me with my javascript, cos i'm finding it difficult to assign my reset btn to all the input variables "
);

// Variable declaration
let billInput = document.querySelector("#bill-input");
let noOfPeople = document.querySelector("#people-input");
let customInput = document.querySelector("#tips-percentage-custom");
let tipPercentages = document.querySelectorAll(".tips-percentage");
let tipAmountPerPersonEl = document.querySelector(".tip-amount-person");
let totalAmountPerPersonEl = document.querySelector(".tip-total-person");
let resetBtn = document.querySelector("#resetBtn");

// variable that stores data
let billAmount = 0;
let noOfPple = 0;
let customPercentage = 0;
let tipPercentage = 0;

// Event Listener
//
billInput.addEventListener("keyup", (e) => {
  billAmount = Number(e.target.value);
  calculateTip();
});

noOfPeople = addEventListener("keyup", (e) => {
  noOfPple = Number(e.target.value);
  calculateTip();
});

customInput.addEventListener("keyup", (e) => {
  custompercentage = Number(e.target.value);
  calculateTip();
});

Array.from(tipPercentages).forEach((tipPercentageEl) => {
  tipPercentageEl.addEventListener("click", (e) => {
    if (e.target.innerText.includes("%")) {
      tipPercentage = Number(e.target.innerText.replace("%", ""));
      applyActiveClass(e.target.innerText);
      calculateTip();
    }
  });
});

// Functions
function calculateTip() {
  let tipAmount = billAmount * (tipPercentage / 100);
  let totalAmount = billAmount + tipAmount;
  let tipAmountPerPerson = tipAmount / noOfPple;
  let totalAmountPerPerson = totalAmount / noOfPple;
  //   let customAmount = (customPercentage / 10) * billAmount;
  //   let customTotal = billAmount + customAmount;
  //   let tipAmountPerPerson = customAmount / noOfPple;
  //   let totalAmountPerPerson = customTotal / noOfPple;

  updateValues({
    tipAmountPerPerson,
    totalAmountPerPerson,
  });
}

function updateValues({ tipAmountPerPerson, totalAmountPerPerson }) {
  tipAmountPerPersonEl.innerText =
    tipAmountPerPerson == Infinity ? 0 : tipAmountPerPerson.toFixed(2);
  totalAmountPerPersonEl.innerText =
    totalAmountPerPerson == Infinity ? 0 : totalAmountPerPerson.toFixed(2);
}
function applyActiveClass(innerTextPect) {
  Array.from(tipPercentages).forEach((tipPercentageEl) => {
    if (tipPercentageEl.innerText == innerTextPect) {
      tipPercentageEl.classList.add("active");
    } else {
      tipPercentageEl.classList.remove("active");
    }
  });
}

resetBtn.addEventListener("click", (e) => {
  billInput.value = "";
});
