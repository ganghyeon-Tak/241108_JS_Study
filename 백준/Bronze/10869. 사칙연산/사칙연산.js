/*
    Question : 두 자연수 A와 B가 주어진다. 
               이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 
               출력하는 프로그램을 작성하시오.
    Input : 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
    Output : 첫째 줄에 A+B, 
             둘째 줄에 A-B, 
             셋째 줄에 A*B, 
             넷째 줄에 A/B, 
             다섯째 줄에 A%B를 출력한다.

    Example Input : 7 3
    Example Output : 10
                     4
                     21
                     2
                     1

*/

const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./calculation_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

let A = Number(input[0]);   // 정수 A, 문자열('1')을 숫자(1)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('3')을 숫자(3)으로 전환

let calculation1 = (A, B) => A + B;
let calculation2 = (A, B) => A - B;
let calculation3 = (A, B) => A * B;
//let calculation4 = (A, B) => Math.floor(A / B);
let calculation4 = (A, B) => parseInt(A / B);
let calculation5 = (A, B) => A % B;

console.log(calculation1(A, B));
console.log(calculation2(A, B));
console.log(calculation3(A, B));
console.log(calculation4(A, B));
console.log(calculation5(A, B));