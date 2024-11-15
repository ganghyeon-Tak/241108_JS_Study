const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./print_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');


let n = Number(input[0]);

let print = (n) => {
    for(let i=1; i<=n; i++){
        console.log(i);
    }
};

print(n);