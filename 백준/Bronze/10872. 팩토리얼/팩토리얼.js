const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./factorial_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');


let n = Number(input[0]);

let factorial = (n) => {
    let result = 1;
    for(let i=n; i>0; i--){
        result = result * i
    }
    console.log(result);
};

factorial(n);