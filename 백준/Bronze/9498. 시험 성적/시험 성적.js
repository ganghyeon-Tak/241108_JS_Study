const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./test_score_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

// 문자열을 숫자로 전환
let score = Number(input[0]);

let grade = (score) => {
    let result = '';
    if(score >= 90){
        result = 'A'
    }else if(score >= 80){
        result = 'B'
    }else if(score >= 70){
        result = 'C'
    }else if(score >= 60){
        result = 'D'
    }else{
        result = 'F'
    } 
    return result;
};

console.log(grade(score));