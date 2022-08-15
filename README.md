# ТЕСТОВАЯ ЗАДАЧА КАЛЬКУЛЯТОР<br />

#### Описание:

Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.<br />
Функция принимает данные из аргументов и возвращает с помощью return.

#### Требования

- Решение должно пройти все тесты.
- Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a \* b, a / b. Данные передаются в виде одной строки!
- Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами. Оба операнда должны быть либо арабскими, либо римскими.
- Операнды должны лежать в диапазоне от 1 до 10 включительно, без ноля. Ответ может быть больше 10.
- Калькулятор умеет работать только с целыми числами, принимает и возвращает.
- Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть - десятичную отбрасываем, например 2 / 4 = 0,5 - вернём 0.
- Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен выбросить исключение (ошибку) и прекратить свою работу.
- Поскольку в римской системе счисления нет нуля и отрицательных чисел, то вместо них возвращаем пустую строку. (например I - II = '')
- При вызове калькулятора с неподходящими числами, функция выбрасывает исключение и завершает свою работу.
- При вызове калькулятора со строкой, которая не является математическим примером с одной из арифметических операций, описанных в требовании, приложение выбрасывает исключение и завершает свою работу.

#### Пример работы программы

```
calculate('1 + 2'); // вернется строка '3'
calculate('VI / III'); // вернется строка 'II'
calculate('VII / III'); // вернётся строка II'
calculate('I + II'); // вернется строка 'III'
calculate('I - II'); // вернётся строка '' (пустая строка) т.к. в римской системе нет отрицательных чисел
calculate('I + 1'); // вернётся исключение (ошибка) throws Error т.к. используются одновременно разные системы счисления
calculate('I'); // вернётся исключение throws Error т.к. строка не является математической операцией
calculate('1 + 1 + 1'); // вернётся исключение throws Error т.к. формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)
```

---

// Ошибки данных
//console.log(calculator(""));
//console.log(calculator(" "));
//console.log(calculator(" "));
// console.log(calculator("4"));
// console.log(calculator("+"));
// console.log(calculator("++1"));
//console.log(calculator("V"));
// console.log(calculator("3 % 4"));
// console.log(calculator("1 + 1 + 1"));
// console.log(calculator("11 + 1"));
// console.log(calculator("1 + 11"));
// console.log(calculator("XI + I"));
//console.log(calculator("I + XI"));
// console.log(calculator("5 / 0"));
// console.log(calculator("0 + 1"));
// console.log(calculator("1 + 0"));

// console.log(calculator("1 + V"));
// console.log(calculator("I + 1"));

// Сложение десятичных чисел
// console.log(calculator("1 + 1"));
// console.log(calculator("1 + 2"));
// console.log(calculator("4 + 3"));
// console.log(calculator("10 + 10"));

// Вычитание десятичных чисел
// console.log(calculator("10 - 1"));
// console.log(calculator("5 - 4"));
// console.log(calculator("4 - 4"));
// console.log(calculator("1 - 10"));
// console.log(calculator("4 - 5"));

// Уможение десятичных чисел
// console.log(calculator("10 _ 10"));
// console.log(calculator("4 _ 10"));
// console.log(calculator("5 _ 1"));
// console.log(calculator("5 _ 5"));

// Деление десятичных чисел
// console.log(calculator("10 / 1"));
// console.log(calculator("6 / 2"));
// console.log(calculator("5 / 4"));
// console.log(calculator("2 / 4"));

// Сложение римских чисел
// console.log(calculator("I + I"));
// console.log(calculator("I + II"));
// console.log(calculator("IV + III"));
// console.log(calculator("X + X"));
// console.log(calculator("X + IX"));

// Вычитание римских чисел
// console.log(calculator("X - I"));
// console.log(calculator("V - IV"));
// console.log(calculator("IV - IV"));
// console.log(calculator("I - X"));
// console.log(calculator("IV - V"));

// Умножение римских чисел
// console.log(calculator("X _ X"));
// console.log(calculator("IV _ X"));
// console.log(calculator("V _ I"));
// console.log(calculator("V _ V"));

// Деление римских чисел
// console.log(calculator("X / I"));
// console.log(calculator("VI / II"));
// console.log(calculator("V / IV"));
// console.log(calculator("II / IV"));

module.exports = calculator; // Не трогайте эту строчку
