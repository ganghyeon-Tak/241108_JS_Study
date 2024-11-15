/*
    Question : 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
    Input : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
    Output : 첫째 줄에 A-B를 출력한다.

    Example Input : 3 2
    Example Output : 1
*/

const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./subtraction_input.txt";
const input = fs.readFileSync(filePath)     // 지정한 경로의 파일 내용을 읽을 수 있도록 함
                .toString()                 // return(반환) 유형이 "Buffer 객체"이기 때문에 "문자열"로 전환하여 준다.
                .trim()                     // 일부 입력값의 마지막에 개행문자('\n')가 포함된 경우가 있어 공백문자를 갖는 경우가 있어 방지를 위해 사용
                .split(' ');                // 공백을 구분자로 하여 문자열을 배열로 저장하기 위한 함수

let A = Number(input[0]);   // 정수 A, 문자열('3')을 숫자(3)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('2')을 숫자(2)으로 전환

let subtraction = (A, B) => A - B

console.log(subtraction(A, B));