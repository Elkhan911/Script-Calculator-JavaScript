function takeArabicNumber(romanNumb) {
  let romanNumbers = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers.includes(romanNumb)) {
      return romanNumbers.indexOf(romanNumb);
    } else return romanNumbers[0];
  }
}

function isArabianNumb(numb) {
  let newArr = numb.split("");
  if (newArr.includes("X") || newArr.includes("I") || newArr.includes("V")) {
    return false;
  } else return true;
}

function makeRomaninanNumber(numb) {
  let romanNumbers = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
    "XXI",
    "XXII",
    "XXIII",
    "XXIV",
    "XXV",
    "XXVI",
    "XXVII",
    "XXVIII",
    "XXIX",
    "XXX",
    "XXXI",
    "XXXII",
    "XXXIII",
    "XXXIV",
    "XXXV",
    "XXXVI",
    "XXXVII",
    "XXXVIII",
    "XXXIX",
    "XL",
    "XLI",
    "XLII",
    "XLIII",
    "XLIV",
    "XLV",
    "XLVI",
    "XLVII",
    "XLVIII",
    "XLIX",
    "L",
    "LI",
    "LII",
    "LIII",
    "LIV",
    "LV",
    "LVI",
    "LVII",
    "LVIII",
    "LIX",
    "LX",
    "LXI",
    "LXII",
    "LXIII",
    "LXIV",
    "LXV",
    "LXVI",
    "LXVII",
    "LXVIII",
    "LXIX",
    "LXX",
    "LXXI",
    "LXXII",
    "LXXIII",
    "LXXIV",
    "LXXV",
    "LXXVI",
    "LXXVII",
    "LXXVIII",
    "LXXIX",
    "LXXX",
    "LXXXI",
    "LXXXII",
    "LXXXIII",
    "LXXXIV",
    "LXXXV",
    "LXXXVI",
    "LXXXVII",
    "LXXXVIII",
    "LXXXIX",
    "XC",
    "XCI",
    "XCII",
    "XCIII",
    "XCIV",
    "XCV",
    "XCVI",
    "XCVII",
    "XCVIII",
    "XCIX",
    "C",
  ];

  if (numb >= 0) {
    for (let i = 0; i < romanNumbers.length; i++) {
      return romanNumbers[numb];
    }
  } else return romanNumbers[0];
}

function calculator(string) {
  // переводим аргумент в массив
  let arr = string.split(" ");

  for (let elem of arr) {
    // проверяем каждый элемент массива на арабские цифры
    if (isArabianNumb(elem)) {
      // Сложение десятичных чисел
      if (arr.includes("+")) {
        return Number(arr[0]) + Number(arr[2]);
      }
      // Вычитание  десятичных чисел
      if (arr.includes("-")) {
        return Number(arr[0] - Number(arr[2]));
      }
      // Уможение десятичных чисел
      if (arr.includes("*")) {
        return Number(arr[0]) * Number(arr[2]);
      }
      // Деление десятичных чисел
      if (arr.includes("/")) {
        return Math.trunc(Number(arr[0]) / Number(arr[2]));
      }
    }
    // проверяем каждый элемент массива на римские цифры
    if (!isArabianNumb(elem)) {
      // Сложение римских чисел
      if (arr.includes("+")) {
        // приводим к римскому значению
        return makeRomaninanNumber(
          takeArabicNumber(arr[0]) + takeArabicNumber(arr[2])
        );
      }
      // Вычитание римских чисел
      if (arr.includes("-")) {
        // приводим к римскому значению
        return makeRomaninanNumber(
          takeArabicNumber(arr[0]) - takeArabicNumber(arr[2])
        );
      }
      // Умножение римских чисел
      if (arr.includes("*")) {
        // приводим к римскому значению
        return makeRomaninanNumber(
          takeArabicNumber(arr[0]) * takeArabicNumber(arr[2])
        );
      }
      // Деление римских чисел
      if (arr.includes("/")) {
        // приводим к римскому значению
        return makeRomaninanNumber(
          Math.trunc(takeArabicNumber(arr[0]) / takeArabicNumber(arr[2]))
        );
      }
    }
  }
}

// Сложение десятичных чисел
// console.log(calculator("1 + 1"));
// console.log(calculator("1 + 2"));
// console.log(calculator("4 + 3"));
// console.log(calculator("10 + 10"));

// Вычитание  десятичных чисел
// console.log(calculator("10 - 1"));
// console.log(calculator("5 - 4"));
// console.log(calculator("4 - 4"));
// console.log(calculator("1 - 10"));
// console.log(calculator("4 - 5"));

// Уможение десятичных чисел
// console.log(calculator("10 * 10"));
// console.log(calculator("4 * 10"));
// console.log(calculator("5 * 1"));
// console.log(calculator("5 * 5"));

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
// console.log(calculator("X * X"));
// console.log(calculator("IV * X"));
// console.log(calculator("V * I"));
// console.log(calculator("V * V"));

// Деление римских чисел
// console.log(calculator("X / I"));
// console.log(calculator("VI / II"));
// console.log(calculator("V / IV"));
// console.log(calculator("II / IV"));

// Ошибки данных
// console.log(calculator(""));
// console.log(calculator(" "));
// console.log(calculator("     "));
// console.log(calculator("4"));
// console.log(calculator("+"));
// console.log(calculator("++1"));
// console.log(calculator("V"));
// console.log(calculator("3 % 4"));
// console.log(calculator("1 + 1 + 1"));
// console.log(calculator("11 + 1"));
// console.log(calculator("1 + 11"));
// console.log(calculator("XI + I"));
// console.log(calculator("I + XI"));
// console.log(calculator("1 + V"));
// console.log(calculator("I + 1"));
// console.log(calculator("5 / 0"));
// console.log(calculator("0 + 1"));
// console.log(calculator("1 + 0"));
