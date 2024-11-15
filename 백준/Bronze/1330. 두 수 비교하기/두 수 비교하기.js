/*
    Question : 두 정수 A와 B가 주어졌을 때, 
               A와 B를 비교하는 프로그램을 작성하시오.
    Input : 첫째 줄에 A와 B가 주어진다. 
            A와 B는 공백 한 칸으로 구분되어져 있다.
    Output : 첫째 줄에 다음 세 가지 중 하나를 출력한다.

             1. A가 B보다 큰 경우에는 '>'를 출력한다.
             2. A가 B보다 작은 경우에는 '<'를 출력한다.
             3. A와 B가 같은 경우에는 '=='를 출력한다.

    Example Input : 1 2
    Example Output : <

    Example2 Input : 10 2
    Example2 Output : >
        
    Example3 Input : 5 5
    Example3 Output : ==

*/

const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./comparison_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

let A = Number(input[0]);   // 정수 A, 문자열('7')을 숫자(7)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('3')을 숫자(3)으로 전환

let comparison = (A, B) => {
    let result = '';
    if(A > B){
        result = '>'
    }else if(A < B){
        result = '<'
    }else{
        result = '=='
    }
    return result;
};

console.log(comparison(A, B));