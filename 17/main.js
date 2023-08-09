let num = +prompt("Number pls");
// Better to have validation on the input
let result = "";

for (i = num; i >= 1; i--) {
  for (j = 1; j <= num; j++) {
    if (j < i){
      result += "-"
    }
    else{
    result += "*"
    }
  }
  result += "\n";
}
console.log(result)
// Logic
// Reverse the normal for loop to start from Max (4) and minus it everytime until it's 1
// place "-" at the position that is lesser than Max(4)
// then the next one would be positions that are lesser than Max-4 (3)
