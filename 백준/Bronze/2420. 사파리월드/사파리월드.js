const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./safari_world_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

// 문자열을 숫자형으로 전환
let n = Number(input[0]);
let m = Number(input[1]);

// 유명도 차이(절댓값)를 구하는 함수 : Math.abs()
const famousDifference = (n, m) => {
    console.log(Math.abs(n - m));
};
famousDifference(n, m);