// 동기의 흐름
console.log("command1");
console.log("command2");
console.log("command3");

// timer 함수
// 타이머 생성 : setTimeout(callback, delay)
// 타이머 해제 : clear Timeout(timerId)
function timerTest() {
    console.log("2초 후 인사합니다.")   // 1번 호출
    setTimeout(() => {
        console.log("안녕하세요!");     // 3번호출        
    }, 2000);
    console.log("End of function");     // 2번 호출
}
// timerTest();

function intervalTest() {
    //  interval : 특정 시간 간격으로 호출되는 함수
    let count = 10;
    console.log("10초 후에 타이머가 종료됩니다.");
    console.log(count);
    let intervalId = setInterval(() =>{
        console.log(--count);
        if ( count < 0 ) {
            console.log("타이머를 종료합니다.");
            clearInterval(intervalId);
        }
    }, 1000);
    console.log("End of Function");
}
intervalTest();