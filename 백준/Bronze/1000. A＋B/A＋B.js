// Question : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// Input : 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// Output : 첫째 줄에 A+B를 출력한다.

// Ex Input : 1 2
// Ex Output : 3

// Node.js 
// fs(File System)모듈
// 파일 입출력 처리(읽기, 쓰기, 편집, 제거)시 사용

// 모듈 : 미리 만들어둔 시스템의 집합
// CommonJS Modules (fs 모듈 호출)
const fs = require("fs");

// 노드(?) : 개념 추후에 알아보기
// process 객체 : 현재 실행 중인 노드(node) 프로세스에 대한 정보를 담고 있는 객체
// process.platform : 운영체제(OS) 플랫폼 정보
// MS(Microsoft Windows) : win32
// macOS : darwin
// Linux : linux
// 조건(삼항) 연산자로 운영체제에 따라 경로를 다르게 설정
// # 사용법 : (조건문) ? 'true'일 경우 표현식 : ;'false'일 경우 표현식
// '/dev/stdin' : 표준 입력 스트림, UNIX 및 유닉스 계열 OS(linux, macOS 등)에서 사용되는 특별한 파일 시스템 경로
// 프로그램이 사용자로부터 데이터를 받을 수 있는 가상의 파일, 
// fs모듈을 사용해 백준 코딩테스트에서 제출한 문제를 입력을 받을 수 있게 하기 위해 '/dev/stdin'을 사용한다.

let filePath = process.platform === "linux" ? "/dev/stdin" : "./addition_input.txt";
const input = fs.readFileSync(filePath)     // 지정한 경로의 파일 내용을 읽을 수 있도록 함
                .toString()                 // return(반환) 유형이 "Buffer 객체"이기 때문에 "문자열"로 전환하여 준다.
                .trim()                     // 일부 입력값의 마지막에 개행문자('\n')가 포함된 경우가 있어 공백문자를 갖는 경우가 있어 방지를 위해 사용
                .split(' ');                // 공백을 구분자로 하여 문자열을 배열로 저장하기 위한 함수

let A = Number(input[0]);   // 정수 A, 문자열('1')을 숫자(1)으로 전환
let B = Number(input[1]);   // 정수 B, 문자열('2')을 숫자(2)으로 전환

let addition = (A, B) => A + B

console.log(addition(A, B));