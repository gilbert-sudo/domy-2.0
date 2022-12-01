const numberInput = document.getElementById("number");
const daysInput = document.getElementById("days");
numberInput.focus();

const log = document.getElementById('values');


function addPercent(num) {
  percent = (num / 100) * 3;
  result = num + percent;
  return result;
}

function calculate(number, days) {
  newSolde = number;
  for (let i = 0; i < days; i++) {
    newSolde = addPercent(newSolde);
  }
  return newSolde;
}

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

numberInput.addEventListener('input', updateValue1);

function updateValue1(e) {
  var number = parseInt(e.target.value);
  var days = parseInt(daysInput.value);
  if (!days) {
    var ton_chiffre = number; // Ta variable de chiffre
  }else{
    var ton_chiffre = calculate(number, days);
  }
  
  const response = (ton_chiffre.toFixed(2));
  if (isNaN(response)) {
    log.textContent = "0.00";
  } else {
    log.textContent = response;
  }
}