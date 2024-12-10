// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 C계열 문법과 거의 동일

// 연습문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
console.log("================= for문 구구단");
for (let dan = 2; dan <= 9; dan++) {
    console.log(dan + "단");
    for(let num =1; num <= 9; num++) {
            console.log(dan, "*", num, "=", dan * num );
    }
}

// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
let dan = 2;    // 반복 변수 초기화
console.log("============ while 구구단");
while (dan <= 9 ) {
    console.log(dan + "단");
    let num = 1;
    while (num <= 9) {
        console.log(dan, "*", num, "=", dan * num);
        num++;
    }
    dan++;
}
// 연습문제 2-1) for 문을 이용 별그리기
/*

*****
****
***
**
*

*/
console.log("========= for문 역삼각형")
for (let row = 5; row > 0; row--) {
    let stars = ""; 
    for (let col = 1; col <= row; col++) {
        stars += "*";
    } 
    console.log(stars);
}
// 연습문제 2-2) while 문을 이용 별 그리기

console.log ("============= while문 역삼각형");
let row = 5;
while( row > 0 ) {
    let stars = "";
    let col = 1;
    while( col <= row ) {
        stars += "*";
        col ++;
    }
    console.log(stars);
    row --;
}

//  TODO: for ... in 
//      - 객체의 속성 key를 반복하는 루프


//  TODO: for ... of
//      - 컬렉션 객체(배열)의  요소 순환
