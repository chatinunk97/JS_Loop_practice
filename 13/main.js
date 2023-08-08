let number = +prompt("Number pls");
// Better to have validation on the input
let result = "";
let numSet = 1;

for (i = 1; i <= number; i++) {
    for (j = 1; j <= number; j++) {
        if (j <= numSet) {
            result += "*";
        }
        else {
            result += "-"
        }
    }
    numSet++;
    result += "\n";
}
console.log(result);

// Logic
// Set numSet as 1 and have it checked with every loop (the nested one)
// then if the loop round is lesser or equal to numSet insert *
// if it's not insert -
// After the loop increase numSet
// This make the range of * wider and wider every loop