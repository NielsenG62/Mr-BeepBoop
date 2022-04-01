// Business Logic

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
  return beepArray.join(", ");
}

// UI Logic

$(document).ready(function () {
  $("#submit").click(function () {
    $("#neighbor-text").text("");
    const input = $("input").val();
    let i = 0;
    const txt = beepBoopNeighbor(input);
    const speed = 15;
    typeWriter();
    function typeWriter() {
      if (i < txt.length) {
        $("#submit").addClass("flash");
        $("#submit").text("NEIGHBOR DETECTED");
        $("#reset").removeClass("hidden");
        document.getElementById("neighbor-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
        $("#robot").attr("src", "img/robot-dance1.gif");
        $("#submit").text("Neighbor?");
        $("#submit").removeClass("flash");
        $("#reset").addClass("hidden");
      }
    }
    $("#robot").attr("src", "img/robot-dance2.gif");
  });
});
