// 두 개 이상의 배열을 하나로 합칠 때 사용하는 연산자

// 테스트용 배열 선언
const emergencyFood = ['chocolet', 'candy'];
const emergencyFood2 = ['bisket', 'hardtack', 'almond'];

// 기존 배열 병합
const oldArrAdd = emergencyFood.concat(emergencyFood2);

console.log(`배열1 : ${emergencyFood}`);
console.log(`배열2 : ${emergencyFood2}`);
console.log(`예전 배열 병합 : ${oldArrAdd}`);
// ['chocolet', 'candy', 'bisket', 'hardtack', 'almond'];


// ES6 이후 spread 연산자 활용법 
const newArrAdd = [...emergencyFood, ...emergencyFood2];

console.log(`배열1 : ${emergencyFood}`);
console.log(`배열2 : ${emergencyFood2}`);
console.log(`스프레드 연산자 사용 : ${newArrAdd}`);
// ['chocolet', 'candy', 'bisket', 'hardtack', 'almond']

// 스프레드 연산자는 객체에서도 사용 가능하다.
// 객체 안에 키와 값을 추가하고 싶을 때도 사용가능하다.

let user = { name: 'gang', city: 'pohang'};

user = {...user, gender: 'male'};

console.log(user);
// { name: 'gang', city: 'pohang', gender: 'male'};
