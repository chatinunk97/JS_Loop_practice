let number = prompt("Number pls");
let result = ""
for (i = 1 ; i <= number ; i++){
    for (j = 1 ; j <= number ; j++){
        result += "*"
    }
    result += "\n"
}
console.log(result);