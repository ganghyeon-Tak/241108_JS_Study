const fs = require("fs");

let filePath = process.platform === "linux" ? "/dev/stdin" : "./leap_year_input.txt";
const input = fs.readFileSync(filePath)
                .toString()
                .trim()
                .split(' ');

// Number('0') : 문자열 '0'을 숫자열 0 으로 전환
let year = Number(input[0]);
let leapYear = (year) => {
    let result = '';

    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        result = 1;
    } else result = 0;
    
    console.log(result);
};

leapYear(year);