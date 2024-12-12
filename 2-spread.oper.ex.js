//  배열 전개 연산자
console.log("=======배열 전개 연산자");
let arr1 = ['홍길동', '장길산'];
let arr2 = ['임꺽정', '전우치'];

// 배열을 합칠때는 combined = [];

let combined = [];
// 방법1
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1", combined);
// 방법2
combined = arr1.concat(arr2); // concat 사용
console.log("combined 2", combined);
// 방법3
combined = [].concat(arr1, arr2);
console.log("combined 3:", combined);

// ES6 방식 : ... 사용 
combined = [...arr1, ...arr2];
console.log("ES6 combined:", combined);

// 배열의 전개 
console.log("======== 배열의 전개");
console.log("arr1", arr1);

// 순서대로 출력시에는 let 사용
let [first, second, third, ...others] = arr1;
console.log(first, second, third = "empty", others)

console.log("combined:", combined);
[first, second, third = "empty", ...others] = combined;
console.log(first,second,third,others);

console.log("=========== 객체 전개 연산")
let obj1 = {one:1, two: 2, other: 0};
let obj2 = {three: 3, four: 4, other: -1};

combiner = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other
}
console.log("combined 1:", combined);

//  변경
combined = {
    ...obj2,
    ...obj1
}
console.log("ES6 combined 2", combined);

console.log("======== 객체 전개 할당");
console.log("object", combined); // 순서변경 object

let { other, ...remains } = combined;
console.log(other, remains);    //  remains: 객체 배열에서 뺼 수 있음


