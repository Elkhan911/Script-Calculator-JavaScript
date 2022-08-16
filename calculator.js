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

// function to convert Roman digits from 1 to 100 to Arabic digits
function takeArabicNumber(romanNumb) {
  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers.includes(romanNumb)) {
      return romanNumbers.indexOf(romanNumb);
    } else return romanNumbers[0];
  }
}

// console.log(takeArabicNumber("XV"));

// boolean function to determine arabic digit or not
function isArabianNumb(numb) {
  let newArr = String(numb).split("");
  if (newArr.includes("X") || newArr.includes("I") || newArr.includes("V")) {
    return false;
  } else return true;
}

// console.log(isArabianNumb("10"));
// console.log(isArabianNumb("X"));

// function to convert arabian digits to arabic digits
function makeRomaninanNumber(numb) {
  if (numb >= 0) {
    for (let i = 0; i < romanNumbers.length; i++) {
      return romanNumbers[numb];
    }
  } else return romanNumbers[0];
}

// console.log(makeRomaninanNumber(10));

// проверяем не смешиваются ли арабские цифры с римскими
function isItnormalString(string) {
  let arr = string.split(" ");
  if (isArabianNumb(arr[0]) !== isArabianNumb(arr[2])) {
    console.log("нельзя смешивать род переменных");
    return;
  }
}

// isItnormalString("1 + X");

// проверяем не пустая ли строка
function isItEmpty(string) {
  if (string == "" || string == " " || string == "     ") {
    console.log("Вы вводите пустую строку");
    return;
  }
}

// isItEmpty(" ");

// проверяем две ли у нас переменных
function isItRightLength(array) {
  if (array.length < 3 || array.length > 3) {
    console.log(
      `Введите значение в таком формате:  4 + 4  
Обратите внимание на пробелы, допустимо только две переменные`
    );
    return;
  }
}

// isItRightLength([1, 2, 3, 4]);
// isItRightLength([1, 2]);

// проверяем нет ли в массиве недопустимых значений
function isItAvailable(array, value1, value2) {
  if (array.includes(value1) || array.includes(value2)) {
    console.log(`Операции с ${value1} и ${value2} не выполняются`);
    return;
  }
}

// isItAvailable([1, 2, 0], "%", 0);
// isItAvailable([1, 2, 3], 1, 0);

// проверяем нет ли цифр больше чем допустимая для задания
function isItMoreThan(digitsArr, numb) {
  for (let digit of digitsArr) {
    if (isArabianNumb(digit)) {
      if (digit > numb) {
        console.log("Арабская переменная не должна быть больше 10");
        return;
      }
    }
    if (!isArabianNumb(digit)) {
      if (Number(takeArabicNumber(digit)) > numb) {
        console.log("Римская переменная не должна быть больше 10");
        return;
      }
    }
  }
}

// isItMoreThan(["1", "+", "11"], 10);
// isItMoreThan(["X", "+", "XX"], 10);

// выбор арифметической операции с арабскими цифрами
function selectArithmOperatArabian(array) {
  if (array.includes("+")) {
    return String(Number(array[0]) + Number(array[2]));
  }
  // Вычитание  десятичных чисел
  if (array.includes("-")) {
    return String(Number(array[0] - Number(array[2])));
  }
  // Уможение десятичных чисел
  if (array.includes("*")) {
    return String(Number(array[0]) * Number(array[2]));
  }
  // Деление десятичных чисел
  if (array.includes("/")) {
    return String(Math.trunc(Number(array[0]) / Number(array[2])));
  }
}

// console.log(selectArithmOperatArabian(["1", "+", "5"]));
// console.log(selectArithmOperatArabian(["10", "+", "2"]));

// выбор арифметической операции с римскими цифрами
function selectArithmOperatRomanian(array) {
  // Сложение римских чисел
  if (array.includes("+")) {
    // приводим к римскому значению
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) + takeArabicNumber(array[2])
    );
  }
  // Вычитание римских чисел
  if (array.includes("-")) {
    // приводим к римскому значению
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) - takeArabicNumber(array[2])
    );
  }
  // Умножение римских чисел
  if (array.includes("*")) {
    // приводим к римскому значению
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) * takeArabicNumber(array[2])
    );
  }
  // Деление римских чисел
  if (array.includes("/")) {
    // приводим к римскому значению
    return makeRomaninanNumber(
      Math.trunc(takeArabicNumber(array[0]) / takeArabicNumber(array[2]))
    );
  }
}

// console.log(selectArithmOperatRomanian(["X", "+", "I"]));
// console.log(selectArithmOperatRomanian(["X", "-", "I"]));

// main calculator script
function calculator(string) {
  isItEmpty(string);

  // проверяем не смешаны ли римские цифры с арабскими
  isItnormalString(string);

  // переводим аргумент в массив
  let arr = string.split(" ");

  // проверяем на количество введенных данных
  isItRightLength(arr);

  // проверяем нет ли в функции 0 и %
  isItAvailable(arr, "%", "0");

  // проверяем не больше ли значения 10
  isItMoreThan(arr, 10);

  // вводим флаг, чтоб понять арабская цифра (true) или римская (false)
  let flag = true;

  for (let elem of arr) {
    if (isArabianNumb(elem)) {
      flag = true;
    } else {
      flag = false;
    }
  }

  // если арабские цифры применяем функцию для арабских цифр
  if (flag == true) {
    return selectArithmOperatArabian(arr);
  }

  // если римские цифры применяем функцию для римских цифр
  if (flag == false) {
    return selectArithmOperatRomanian(arr);
  }
}
