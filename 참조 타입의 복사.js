// JS의 참조 타입의 복사에는 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)로 구분됨

// 1. 얕은 복사(Shallow Copy) : 객체의 참조 값(주소값)을 복사
let food = {name: 'maratang'};
let copyFood = food;

food.name = 'tangtang_huruhuru';

console.log(food);        // { name: 'tangtang_huruhuru' }
console.log(copyFood);    // { name: 'tangtang_huruhuru' }

// 원본 객체인 food의 name을 재할당 했을 때
// 복사된 객체인 copyFood의 값도 같이 변경되었다.
// 이런 이유는 copyFood 객체가 food 객체의 주소값을 복사했기 때문에 같은 주소를 공유하게 되어
// 복사된 객체의 변수도 변경되는 것이다.

// 2. 깊은 복사(Deep Copy) : 객체의 실제 값을 복사
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

// JSON.stringify() : 객채를 json 문자열로 변경시켜줌, 이 과정에서 원본 객체의 주소를 참조하지 않게 된다.
// JSON.parse() : json 문자열을 자바스크립트 객체로 변경시켜 줌
const newObj = JSON.parse(JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(newObj);
console.log(`------`);

newObj.b.c = 3;

console.log(obj);
console.log(newObj);
console.log(obj.b.c === newObj.b.c);
