/*
    문제 : 
    2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 
    'N' 명의 학생들이 응시했다.

    이들 중 점수가 가장 높은 
    'k'명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.

    커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

    입력 :
    첫째 줄에는 응시자의 수 'N'과 
    상을 받는 사람의 수 'k'가 공백을 사이에 두고 주어진다.

    둘째 줄에는 각 학생의 점수 
    'x'가 공백을 사이에 두고 주어진다.

    예제 입력 :
    5 2
    100 76 85 93 98

    예제 출력 : 
    98
*/

/* 운영체제(OS) 플랫폼 정보에 따른 파일경로 지정 */
/* linux: 리눅스, win32: 윈도우, darwin: MacOS */
const filePath = process.platform === 'linux' ? '/dev/stdin' : './inputValue.txt';

/* FileSystem(fs) 모듈 호출(require) */
const input = require('fs')
  .readFileSync(filePath)       /* 경로 상의 파일 내용을 읽고 문자열로 반환해준다. */
  .toString()                   /* 임의의 숫자열을 문자열로 변환 */
  .trim()                       /* 앞,뒤 공백 제거 */
  .split('\n');                 /* '\n'(행 변경) 문자열을 기준으로 문자열을 잘라 배열로 변환 */
                                /* input[0]: 첫째 줄, input[1]: 둘째 줄 */

/* 문자열 배열 값을 숫자형 배열로 변환 */
const [N, K] = input[0].split(' ').map(Number);     /* 응시자 수(5) 상을 받는 사람 수(2) */     

/* arr.sort([compareFunction]) : 비교 함수 값에 따라 오름차순이나 내림차순으로 정렬 */
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);   /* 내림차순(b-a) - 음수 : a가 b뒤에 오도록, 양수 : a가 b앞에 오도록 */
const prizeScores = [];
for (let i = 0; i < N; i++) {   /* 응시자 수 만큼 반복 */
  prizeScores.push(arr[i]);     /* 내림차순으로 정렬된 숫자형 배열을 순서대로 넣는다 */
  if (prizeScores.length === K) {   /* 상을 받는 사람 수(2명)에 도달할 때 정지 */
    break;
  }
}
console.log(prizeScores[K - 1]);    /* 인덱스 0에서 시작했으므로 1을 뺀 값 출력 */