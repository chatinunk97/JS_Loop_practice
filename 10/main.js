let number = prompt("Number pls");
let result = "";

for (i = 1 ; i <= number ; i++){
    for( j = 1 ; j <= number ; j ++){
        result += i*j;
    }
    result += "\n";
}
console.log(result);

// LOGIC
// Everytime in the nestloop insert the value of row-number * the loop Count
// this is because, for row 2, we want 2 4 6 8
// which can break down to 2*1 2*2 2*3 2*4 2*8 
// we can replace by 2*(loop round 1) 2*(loop round 2) and so on
