let number = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let dashPosition = number;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j === dashPosition) {
            result += "-"
        }
        else {
            result += "*"
        }
    }
    dashPosition--
    result += "\n";
}

console.log(result);