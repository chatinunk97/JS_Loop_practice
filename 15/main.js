let num = +prompt("Number pls");
// Better to have validation on the input
let result = "";

for (i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (j <= i) {
      result += "*";
    } else {
      result += "-";
    }
  }
  result += "\n";
}
//Second half
loopNum = num;
for (i = 2; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (j < loopNum) {
      result += "*";
    } else {
      result += "-";
    }
  }
  loopNum--;
  result += "\n";
}

console.log(result);

// Logic
// First Half the "*" position goes from (1-1) -> (1-2) -> (1-3) -> (1-4)
// this number can be linked to the row number as well
// Second Hlaf the "*" starts from (4-4) -> (4-3)
// as 4 is the max length of the input number
// ---- > start the "*" from the input Number then have it reduce by 1 every loop
