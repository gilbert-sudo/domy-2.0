const numberInput = document.getElementById("number");
const daysInput = document.getElementById("days");
numberInput.focus();

const log = document.getElementById('values');


daysInput.addEventListener('input', updateValue);

function updateValue(e) {
  var days = parseInt(e.target.value);
  var number = parseInt(numberInput.value);

  var ton_chiffre = calculate(number, days); // Ta variable de chiffre
  const response = (ton_chiffre.toFixed(2));

  if (isNaN(response)) {
    log.textContent = "0.00";
  } else {
    log.textContent = response;
  }
}
