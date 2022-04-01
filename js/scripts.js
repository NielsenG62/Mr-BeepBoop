function makeArray(input) {
  let numberArray = [];
  for (i = 0; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function beepBoopNeighbor(input) {
  let numberArray = makeArray(input);
  let beepArray = [];
  numberArray.forEach(function (number) {
    if (number.toString().includes("3")) {
      beepArray.push("Won't you be my neighbor?");
    } else if (number.toString().includes("2")) {
      beepArray.push("Boop!");
    } else if (number.toString().includes("1")) {
      beepArray.push("Beep");
    } else {
      beepArray.push(number);
    }
  });
  return beepArray;
}
