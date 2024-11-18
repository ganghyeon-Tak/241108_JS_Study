/* fs 모듈 */
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./addition5_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');

for(let i=0; i<input.length-1; i++){        // 마지막 줄을 제외한 만큼 반복
    let arr = input[i].trim().split(' ');   // 각 줄마다 공백으로 구분하여
    let a = Number(arr[0]);                 // 첫 번째 문자를 숫자형으로 변경 후 번수 a에 할당
    let b = Number(arr[1]);                 // 두 번째 숫자를 숫자형으로 변경 후 변수 b에 할당
    console.log(a + b);                     // 두 수를 더한다.
};