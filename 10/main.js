let number = prompt("Number pls");
let result = "";

for (i = 1 ; i <= number ; i++){
    let rowNumber = i;
    for( j = 1 ; j <= number ; j ++){
        result += (rowNumber);
        rowNumber += i;
    }
    result += "\n";
}
console.log(result);