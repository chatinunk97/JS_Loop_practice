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