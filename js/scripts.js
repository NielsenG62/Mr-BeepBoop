function makeArray(input) {
  let numberArray = [];
  for (i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function beep(input) {
  let numberArray = makeArray(input);
  debugger;
  let beepArray = [];
  numberArray.forEach(function (number) {
    if (number === 1) {
      beepArray.push("Beep!");
    } else {
      beepArray.push(number);
    }
  });
  return beepArray;
}
