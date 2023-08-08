let number = prompt("Number pls");
let result = ""
let numberForLoop = 1

for (i = 1 ; i <= number ; i++){
    for (j = 1 ; j <= number ; j++){
        result += numberForLoop;
        numberForLoop++;
    }

    result += "\n"
}
console.log(result);

// Logic
// Have a variable track every value added so 
// even it start a new line it will start from the previous value