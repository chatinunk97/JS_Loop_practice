let number = prompt("Number pls");
let result = ""
let numberForLoop = number * number

for (i = 1 ; i <= number ; i++){
    for (j = 1 ; j <= number ; j++){
        result += numberForLoop;
        numberForLoop--;
    }

    result += "\n"
}
console.log(result);