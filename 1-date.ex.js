// Date 복습 //

let now = new Date();
console.log(now);

let today = new Date(24, 11 ,11);
console.log(today);

let time = new Date (24, 11, 11, 10, 20, 0);
console.log(time);

console.log("년도:", now.getFullYear());
console.log("월:", now.getMonth() + 1);
console.log("일:", now.getDate());
console.log("요일:", now.getDay());
