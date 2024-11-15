/*
    Question : 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다.
               이제 A + B + C를 계산할 차례이다!
    Input : 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 10^12)이
            공백을 사이에 두고 주어진다.
    Output : A+B+C의 값을 출력한다.

    Example Input : 77 77 7777
    Example Output : 7931

*/

const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./kid_jeongmin_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

let A = Number(input[0]);   // 정수 A, 문자열('77')을 숫자(77)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('77')을 숫자(77)으로 전환
let C = Number(input[2]);   // 정수 B, 문자열('7777')을 숫자(7777)으로 전환

let kidJeongmin = (A, B, C) => A + B + C;

console.log(kidJeongmin(A, B, C));