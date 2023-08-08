let number = prompt("Number pls");
let result = "";
let startNumber = 0;

for (i = 1 ; i <= number ; i++){
    result += startNumber + '\n';
    startNumber+=2
}
console.log(result);

// Logic
// Just start with 0 and plus 2 everytime after adding it to the result