"use strict"
console.log("Привіт світ!");

//Типи даних
let param1,
  param2 = [1, "Hello", true];
let param3 = 35;
let param4 = true;
let param5 = "11" + param3;
let param6 = 78687565353229887976n;
let param7 = function hello() {
  console.log("Hello!");
};
let param8 = Symbol("id");
console.log(
  typeof param1,
  typeof param2,
  typeof param3,
  typeof param4,
  typeof param5,
  typeof param6,
  typeof param7,
  typeof param8
);
console.log(param2, param5);

//Операції
let op1 = param3 + 20;
let op2 = param3 - 20;
let op3 = param3 * 20;
let op4 = param3 / 20;
let op5 = param3 % 20;
let op6 = param3 ** 2;

let bool1 = op1 > op2;
let bool2 = op1 < op2;
let bool3 = op1 <= op2;
let bool4 = op1 <= op2;
let bool5 = op1 != op2;
let bool6 = op1 !== op2;
let bool7 = op1 == op2;
let bool8 = op1 === op2;

let bool9 = Boolean(op1 && !op2);
let bool10 = op1 || !op2;

console.log(
  op1,
  op2,
  op3,
  op4,
  op5,
  op6,
  bool1,
  bool2,
  bool3,
  bool4,
  bool5,
  bool6,
  bool7,
  bool8
);
console.log(bool9, bool10);

//Взаємодія: alert, confirm, prompt
//alert('Привіт, світ!');
//const const1 = Math.PI;
//console.log(const1);
//let result = prompt("Cкільки вам років?", 18);
//let result2 = confirm("Ви підтверджуєте замовлення?");
//console.log(result, result2);

// Операції присвоювання
console.log(op1, op2, op3, op4, op5, op6);
op1 += 10;
op2 -= 10;
op3 *= 10;
op4 /= 10;
op5 %= 10; // op5 = op5 % 10;
op6 **= 10; // op6 = op6 ** 10;
console.log(op1, op2, op3, op4, op5, op6);

//Інкремент і декремент
let a = 10;
console.log(a++);
console.log(a);
console.log(a--);
console.log(a);

//Умовні конструкції
//let year = prompt("Який зараз рік?", 2000);
/* if (year == 2024) {
    alert( "Правильно!" );
}
else {
    alert( "Неправильно!" );
} */
//(year == 2024) ?  alert( "Правильно!" ) : alert( "Неправильно!" );

let user = null;
//console.log(user ?? "Анонім");
user ??= "Анонім"; // user = user ?? "Анонім"
console.log(user);

function calcSwitch() {
  let b = parseInt(prompt("скільки буде 2+2?", 4));

  switch (b) {
    case 3:
      alert("Малувато");
      break;
    case 4:
      alert("В точку!");
      break;
    case 5:
      alert("Перебір");
      break;
    default:
      alert("Нема таких значень");
      break;
  }
}
let b = 5;
console.log(b);

let showMessage = function(hello = "Добрий день") {
  console.log(hello);
  return hello;
}
showMessage("Привіт!");
showMessage("Вітаю");
let c = showMessage();
console.log(c);
//calcSwitch();

