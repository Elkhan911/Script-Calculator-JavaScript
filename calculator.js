// function to convert Roman numerals from 1 to 10 to Arabic numerals
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
  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers.includes(romanNumb)) {
      return romanNumbers.indexOf(romanNumb);
    } else return romanNumbers[0];
  }
}

// boolean function to determine arabic number or not
function isArabianNumb(numb) {
  let newArr = numb.split("");
  if (newArr.includes("X") || newArr.includes("I") || newArr.includes("V")) {
    return false;
  } else return true;
}

// function to convert Roman numerals from 1 to 10 to Arabic numerals
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

// main calculator script
function calculator(string) {
  // проверяем не пустая ли строка
  if (string == "" || string == " " || string == "     ") {
    console.log("Вы вводите пустую строку");
    return;
  }

  isItnormalString(string);

  // переводим аргумент в массив
  let arr = string.split(" ");
  console.log(arr);
  // проверяем на количество введенных данных
  if (arr.length < 3 || arr.length > 3) {
    console.log(
      `Введите значение в таком формате:  4 + 4  
Обратите внимание на пробелы, допустимо только две переменные`
    );
    return;
  }
  if (arr.includes("%") || arr.includes("0")) {
    console.log("Операции с % не выполняются. Операции с нулём не выполняются");
    return;
  }

  for (let el of arr) {
    if (isArabianNumb(el)) {
      if (el > 10) {
        console.log("Арабская переменная не должна быть больше 10");
        return;
      }
    }
    if (!isArabianNumb(el)) {
      if (Number(takeArabicNumber(el)) > 10) {
        console.log("Римская переменная не должна быть больше 10");
        return;
      }
    }
  }

  for (let elem of arr) {
    if (isArabianNumb(elem)) {
      // проверяем каждый элемент массива на арабские цифры
      // Сложение десятичных чисел
      if (arr.includes("+")) {
        return String(Number(arr[0]) + Number(arr[2]));
      }
      // Вычитание  десятичных чисел
      if (arr.includes("-")) {
        return String(Number(arr[0] - Number(arr[2])));
      }
      // Уможение десятичных чисел
      if (arr.includes("*")) {
        return String(Number(arr[0]) * Number(arr[2]));
      }
      // Деление десятичных чисел
      if (arr.includes("/")) {
        return String(Math.trunc(Number(arr[0]) / Number(arr[2])));
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

function isItnormalString(string) {
  let arr = string.split(" ");
  if (isArabianNumb(arr[0]) !== isArabianNumb(arr[2])) {
    console.log("нельзя смешивать род переменных");
    return;
  }
}
