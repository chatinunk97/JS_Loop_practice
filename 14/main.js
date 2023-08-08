let number = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let numSet = number;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j > numSet) {
            result += "-";
        }
        else {
            result += "*"
        }
    }
    numSet--;
    result += "\n";
}
console.log(result);

// Logic
// Position that is more than number put "-"
// then after small loop lower the number by 1