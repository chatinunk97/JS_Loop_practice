let number = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let numSet = 1;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j <= numSet) {
            result += "*";
        }
        else {
            result += "-"
        }
    }
    numSet++;
    result += "\n";
}
console.log(result);