let number = prompt("Number pls");
let result = "";
let dashPosition = 1;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j === i) {
            result += "-"
        }
        else {
            result += "*"
        }
    }

    result += "\n";
}

console.log(result);

// Logic
// First Row's "-" is at first position of the row
// so this means -> x-row's "-" would be place at x-position of that row