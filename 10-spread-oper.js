//  전개 연산자
console.log("=================  배열 전개 연산");

let arr1 = ['홍길동', '장길산'];
let arr2 = ['임꺽정', '전우치'];
//  arr1, arr2 하나로 합치려면?

let combined = [];
//  방법1
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1:", combined);
//  방법2
combined = arr1.concat(arr2);
console.log("combined 2:", combined);
//  방법3
combined = [].concat(arr1, arr2);
console.log("combined 3:", combined);

//  ES6 방식
combined = [...arr1, ...arr2];
console.log("ES6 combined:", combined);

//  배열의 전개
console.log("================   배열의 전개");
console.log("arr1:", arr1);

// let first = arr1[0];
// let second = arr1[1];
let [ first, second, third, ...others] = arr1; //first:홍길동 second:장길산 나머지:[]
console.log(first, second, third = "empty", others);  // undefined:선언은 됬는데 할당할 건 없음

console.log("combined:", combined);
[ first, second, third = "empty", ...others] = combined;    // empty:값이 있을떄는 데이터출력                                                             // 값없을때는 "empty" 출력
console.log(first, second, third, others);

console.log("================== 객체 전개 연산")
let obj1 = { one: 1, two: 2, other: 0};
let obj2 = { three: 3, four: 4, other: -1};

combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other   //  중복 속성
}
console.log("combined 1:", combined);

//  방법 2.
combined = Object.assign({}, obj1, obj2);
console.log("combined 2:", combined);

console.log("------------------ ES6 방식");
combined = {
    ...obj1,    //  obj1 모든 속성을 전개   one. two, other
    ...obj2,    //  obj2 모든 속성을 전개   three, four, other
}
console.log("ES6 combined:", combined);

//  연결 순서 변경
combined = {
    ...obj2,
    ...obj1
}
console.log("ES6 combined 2:", combined);

console.log("===================== 객체 전개 할당");
console.log("object:", combined);

let { other, ...remains } = combined;
console.log(other, remains);    //  remains: 객체 배열안에서 뺄 수 있음
