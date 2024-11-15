/*
    Question : 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
    Input : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
    Output : 첫째 줄에 A/B를 출력한다.
             실제 정답과 출력값의 절대오차 또는 상대오차가 10^-9 이하이면 정답이다.

    Example Input : 1 3
    Example Output : 0.333333333333333~

*/

const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./division_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

let A = Number(input[0]);   // 정수 A, 문자열('1')을 숫자(1)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('3')을 숫자(3)으로 전환

let division = (A, B) => A / B

console.log(division(A, B));