//Task0

//Напишите функцию sum(c,t), которая возвращает результат суммы c,t

function sum(c, t) {
  return c + t;
}
var result = sum(15, 21);
console.log(result);

//Task1

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

function min(a, b) {
  var minNum;
  if (a > b) {
    minNum = b;
  } else {
    minNum = a;
  }
  return minNum;
}
var result = min(21, 2);
console.log(result);

//Task2

//Напишите функцию pow(x,n), которая возвращает x, в степени n

function pow(x, n) {
  return x ** n;
}
var result = pow(36, 7);
console.log(result);

//Task 3

//Напишите функцию, которая принимает число, и возвращает строку "четное" или "нечетное".

function wholeNum(a) {
  var messege;
  if (a % 2 === 0) {
    messege = 'Чётное число';
  } else {
    messege = 'Нечётное число';
  }
  return messege;
}
var result = wholeNum(6);
console.log(result);

//Task4

//Напишите функцию getColor(23, 100, 134), которая будет принимать три аргумента и возвращать строку вида "rgb(23,100,134)". Если какой-либо из аргументов не задан: например, третий:мы вызываем функцию getColor(23,100), в таком случае мы должны получить строку "rgb(23,100,0)"

function getColor(r = 0, g = 0, b = 0) {
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
 
console.log(getColor(23, 100));

//Task5

//Напишите 2 функции:

//Первая функция squareNumber(num) должна принимать число, и возвращать квадрат этого числа

//Вторая функция запрашивает у пользователя число от 18 до 50.
//Если пользователь ввел НЕ число, то сделайте ему одно замечание,
//если число, то вызовете функцию squareNumber передав в нее это самое число.
//Необходимо вывести результат пользователю (Либо замечание, либо квадрат числа).

function squareNumber(num) {
  return num ** 2;
}

function user() {
  var num = prompt('Введите пожалуйста число от 18 до 50:');
  if(num >= 18 && num <= 50) {
    console.log(squareNumber(num));
  } else if(isNaN(num)) {
    console.log('Будьте пожалуйста внимательнее, вы ввели не число. Попробуйте ещё раз!');
  } else {
    console.log('Вы ввели число не удовлетворяющие условиям. Будьте бдительны! Попробуйте ещё раз!');
  }
}
user();