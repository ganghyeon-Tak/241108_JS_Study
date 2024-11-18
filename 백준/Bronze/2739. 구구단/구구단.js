/* fs 모듈 */
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./times_tables_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');

let n = Number(input[0]);   // 구구단 N단

for(let i=1; i<=9; i++){                    // N*1 부터 N*9 까지
    console.log(`${n} * ${i} = ${n*i}`);    // 두 수를 곱한다.
};