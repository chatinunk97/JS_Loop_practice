let number = prompt("Number pls");
let result = ""
let maxValue = number * number

for (i = 1 ; i <= number ; i++){
    for (j = 1 ; j <= number ; j++){
        result += maxValue;
        maxValue--;
    }

    result += "\n"
}
console.log(result);
// LOGIC
// Since it's a n*n printing the highest value can only be n**2
// so just set the max number to n*2 and minus every time