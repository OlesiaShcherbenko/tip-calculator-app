const { parse } = require('postcss');

document.addEventListener('DOMContentLoaded', function () {
  let selectedTip = 0;

  const billInput = document.getElementById('bill');
  const tipButtons = document.querySelectorAll('.tip-button');
  const customTipInput = document.getElementById('custom-tip');
  const peopleInput = document.getElementById('people');
  const tipPerPersonOutput = document.getElementById('tip-per-person');
  const totalPerPersonOutput = document.getElementById('total-per-person');

  function calculate() {
    const bill = parseFloat(billInput.value);
    const tipPercent = selectedTip;
    const people = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(people) || people <= 0) {
      tipPerPerson.textContent = '€ 0.00';
      totalPerPersonOutput.textContent = '€ 0.00';
      return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = (bill + tipAmount) / people;

    tipPerPersonOutput.textContent = `€ ${tipPerPerson.toFixed(2)}`;
    totalPerPersonOutput.textContent = `€ ${totalPerPerson.toFixed(2)}`;
  }

  tipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTip = parseFloat(btn.getAttribute('data-tip'));
      customTipInput.value = '';
      calculate();
    });
  });

  customTipInput.addEventListener('input', () => {
    selectedTip = parseFloat(customTipInput.value) || 0;
    tipButtons.forEach(b => b.classList.remove('active'));
    calculate();
  });

  billInput.addEventListener('input', calculate);
  peopleInput.addEventListener('input', calculate);
});
