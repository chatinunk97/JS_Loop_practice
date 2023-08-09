let num = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let numberCount = 1;

for (i = num; i >= 1; i--) {
  for (j = 1; j <= num; j++) {
    if (j > i - 1) {
      result += numberCount;
      numberCount++;
    }
    else {
      result += "-";
    }
  }
  result += "\n";
}


for (i = 2; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if ( j >= i){
      result += numberCount;
      numberCount++;
    }
    else{
      result += "-";
    }
  }
  result += "\n";
}





console.log(result);
