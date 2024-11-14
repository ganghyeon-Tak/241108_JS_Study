// Question : 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
// Input : Null
// Output : 2015-01-24

// 내장 객체 Date 생성
let today = new Date();

// get 반환(return) 함수
let year = today.getFullYear();                 // 연도
let month = today.getMonth()+1;                 // 월 : 0~11 (1월 ~ 12월)
let date = today.getDate();                     // 일
let day = today.getDay();                       // 요일 : 0~6 (일~토)
let hours = today.getHours();                   // 시간
let minites = today.getMinutes();               // 분
let seconds = today.getSeconds();               // 초
let milliseconds = today.getMilliseconds();     // 밀리초(1/1000초)
let time = today.getTime();                     // Unix 타임 (1970/1/1 12:00 기준 경과한 밀리 초)

// ES6 : 리터럴 문자열 - 백틱(`)을 사용하여 내부에 문자와 함수롤 동시에 작성 가능, 줄 바꿈 가능
console.log(`${year}-${month}-${date}`);        // 서울의 현재 날짜

// ES6 이전 문자열 삽입 사용 방식
//console.log(year + "-" + month + "-" + date);

