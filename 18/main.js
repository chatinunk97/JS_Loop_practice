let num = +prompt("Number pls");
// Better to have validation on the input
let result = "";

for (i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (j > i - 1) {
      result += "*";
    }
    else{
      result += "-"
    }
  }
  result += "\n";
}
console.log(result);
