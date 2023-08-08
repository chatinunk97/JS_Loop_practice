let number = prompt("Number pls");
let result = "";
let dashPosition = 1;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j === dashPosition) {
            result += "-"
        }
        else {
            result += "*"
        }
    }
    dashPosition++
    result += "\n";
}

console.log(result);