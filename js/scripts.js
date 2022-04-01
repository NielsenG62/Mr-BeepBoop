function makeArray(input) {
  let numberArray = [];
  for (i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function beep(input) {
  let numberArray = makeArray(input);
  let beepArray = [];
  numberArray.forEach(function (number) {
    if (number === 3) {
      beepArray.push("Won't you be my neighbor?");
    } else if (number === 2) {
      beepArray.push("Boop!");
    } else if (number === 1) {
      beepArray.push("Beep");
    } else {
      beepArray.push(number);
    }
  });
  return beepArray;
}
