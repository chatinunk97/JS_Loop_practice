let number = prompt("Number pls");
let result = ""

for (i = number ; i >= 1 ; i--){
    for (j = 1 ; j <= number ; j++){
        result += i;
    }
    result += "\n"
}
console.log(result);

// Logic
// reverse the normal for loop 
// to start from the max value which is the input number
// then decrease it until it's 1





// let numberForLoop = number
// for (i = 1 ; i <= number ; i++){
//     for (j = 1 ; j <= number ; j++){
//         result += numberForLoop;
//     }
//     numberForLoop--;
//     result += "\n"
// }
// console.log(result);