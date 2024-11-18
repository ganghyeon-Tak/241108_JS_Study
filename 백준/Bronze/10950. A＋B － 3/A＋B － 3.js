/*
    Question : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

    Input : 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
            각 테스트 케이스는 한 줄로 이루어져 있으며, 
            각 줄에 A와 B가 주어진다. (0 < A, B < 10)
    Output : 각 테스트 케이스마다 A+B를 출력한다.

    Example Input : 5
                    1 1
                    2 3
                    3 4
                    9 8
                    5 2
    Example Output : 2
                     5
                     7
                     17
                     7
*/

/* fs 모듈 */
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./addition3_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');

let n = Number(input[0]);   // 테스트 케이스 수

for(let i=1; i<=n; i++){    // 첫째 줄(index[0])의 테스트 케이스 개수만큼 반복한다. 
    let arr = input[i].trim().split(' ');   // 각 줄마다 공백으로 구분하여
    let a = Number(arr[0]);                 // 첫 번째 문자를 숫자형으로 변경 후 번수 a에 할당
    let b = Number(arr[1]);                 // 두 번째 숫자를 숫자형으로 변경 후 변수 b에 할당
    console.log(a + b);                     // 두 수를 더한다.
};