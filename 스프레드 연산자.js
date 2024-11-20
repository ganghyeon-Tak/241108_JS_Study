// 두 개 이상의 배열을 하나로 합칠 때 사용하는 연산자

// 테스트용 배열 선언
const emergencyFood = ['chocolet', 'candy'];
const emergencyFood2 = ['bisket', 'hardtack', 'almond'];

// 기존 배열 병합
const oldArrAdd = emergencyFood.concat(emergencyFood2);

console.log(oldArrAdd);

// ES6 이후 spread 연산자 활용법
const newArrAdd = [...emergencyFood, ...emergencyFood2];

console.log(newArrAdd);
