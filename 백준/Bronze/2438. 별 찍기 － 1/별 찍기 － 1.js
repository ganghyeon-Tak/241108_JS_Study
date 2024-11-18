/* fs 모듈 */
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./star_write_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split('\n');

let n = Number(input[0]);   // N번째 줄
let starLength = '';        // 각 줄마다 별의 갯수

for(let i=1; i<=n; i++){        // N번째 줄 수 만큼 반복
    starLength += '*';          // 횟수를 반복할 때 마다 starLength 변수의 별이 하나씩 증가
    console.log(starLength);    // N번째 줄의 별 수 출력
};