console.log("Hello world");

let number = 1;
let text = "안녕하세요";

const constant = "test";

console.log(number);
number = 2;
console.log(number);

// 조건문

let a = 1;
if(a == 1){
    console.log("a는 1입니다");
}
else if(a == 2){
    console.log("a는 2입니다.");
}
else{
    console.log("a는 1과 2가 아닙니다.");
}

console.log(!true);

// ==과 ===차이

let numbers = 1;
let texts = "1";

console.log(numbers == texts);
console.log(numbers === texts);

// 반복문

for(let i = 0; i<10; i++){
    console.log(i);
}

// 배열

let a1 = ["사과", "배", "바나나", "딸기"];

for(let i = 0; i<a1.length; i++){
    console.log(a1[i]);
}

let num = 1;
let text3 = "asdf"

