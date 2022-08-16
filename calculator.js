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

// convert roman numerals from 1 to 100 to arabic numerals
function takeArabicNumber(romanNumb) {
  for (let i = 0; i < romanNumbers.length; i++) {
    if (romanNumbers.includes(romanNumb)) {
      return romanNumbers.indexOf(romanNumb);
    } else return romanNumbers[0];
  }
}

// console.log(takeArabicNumber("XV"));

// +- check arabic numeral or not
function isArabianNumb(numb) {
  let newArr = String(numb).split("");
  if (newArr.includes("X") || newArr.includes("I") || newArr.includes("V")) {
    return false;
  } else return true;
}

// console.log(isArabianNumb("10"));
// console.log(isArabianNumb("X"));

// convert arabian numerals form 1 to 100 to roman numerals
function makeRomaninanNumber(numb) {
  if (numb >= 0) {
    for (let i = 0; i < romanNumbers.length; i++) {
      return romanNumbers[numb];
    }
  } else return romanNumbers[0];
}

// console.log(makeRomaninanNumber(10));

// +- check arabic numerals are mixed with roman numerals or not
function isItnormalString(string) {
  let arr = string.split(" ");
  if (isArabianNumb(arr[0]) !== isArabianNumb(arr[2])) {
    throw new Error("нельзя смешивать арабские переменные с римискими");
  }
}

// isItnormalString("1 + X");

// +- check the string is empty or not
function isItEmpty(string) {
  if (string == "" || string == " " || string == "     ") {
    throw new Error("Вы вводите пустую строку");
  }
}

// isItEmpty(" ");

// +- check the number of variables
function isItRightLength(array) {
  if (array.length < 3 || array.length > 3) {
    throw new Error(
      `Введите значение в таком формате:  4 + 4  
Обратите внимание на пробелы, допустимо только две переменные`
    );
  }
}

// isItRightLength([1, 2, 3, 4]);
// isItRightLength([1, 2]);

// +- check invalid values
function isItAvailable(array, value1, value2) {
  if (array.includes(value1) || array.includes(value2)) {
    throw new Error(`Операции с ${value1} и ${value2} не выполняются`);
  }
}

// isItAvailable([1, 2, 0], "%", 0);
// isItAvailable([1, 2, 3], 1, 0);

// +- check if the value is greater than allowed
function isItMoreThan(digitsArr, numb) {
  for (let digit of digitsArr) {
    if (isArabianNumb(digit)) {
      if (digit > numb) {
        throw new Error("Арабская переменная не должна быть больше 10");
      }
    }
    if (!isArabianNumb(digit)) {
      if (Number(takeArabicNumber(digit)) > numb) {
        throw new Error("Римская переменная не должна быть больше 10");
      }
    }
  }
}

// isItMoreThan(["1", "+", "11"], 10);
// isItMoreThan(["X", "+", "XX"], 10);

// selection of arithmetic operation with arabic numerals
function selectArithmOperatArabian(array) {
  // addition of two arabian numbers
  if (array.includes("+")) {
    return String(Number(array[0]) + Number(array[2]));
  }
  // subtraction of two arabian numbers
  if (array.includes("-")) {
    return String(Number(array[0] - Number(array[2])));
  }
  // multiplication of two arabian numbers
  if (array.includes("*")) {
    return String(Number(array[0]) * Number(array[2]));
  }
  // division of two arabian numbers
  if (array.includes("/")) {
    return String(Math.trunc(Number(array[0]) / Number(array[2])));
  }
}

// console.log(selectArithmOperatArabian(["1", "+", "5"]));
// console.log(selectArithmOperatArabian(["10", "+", "2"]));

// selection of arithmetic operation with roman numerals
function selectArithmOperatRomanian(array) {
  // addition of two roman numbers
  if (array.includes("+")) {
    // convert result to roman number
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) + takeArabicNumber(array[2])
    );
  }
  // subtraction of two roman numbers
  if (array.includes("-")) {
    // convert result to roman number
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) - takeArabicNumber(array[2])
    );
  }
  // multiplication of two roman numbers
  if (array.includes("*")) {
    // convert result to roman number
    return makeRomaninanNumber(
      takeArabicNumber(array[0]) * takeArabicNumber(array[2])
    );
  }
  // division of two roman numbers
  if (array.includes("/")) {
    // convert result to roman number
    return makeRomaninanNumber(
      Math.trunc(takeArabicNumber(array[0]) / takeArabicNumber(array[2]))
    );
  }
}

// console.log(selectArithmOperatRomanian(["X", "+", "I"]));
// console.log(selectArithmOperatRomanian(["X", "-", "I"]));

// main calculator script
function calculator(string) {
  // check the string is empty or not
  isItEmpty(string);

  // check arabic numerals are mixed with roman numerals or not
  isItnormalString(string);

  // convert argument to array
  let arr = string.split(" ");

  // check the number of variables
  isItRightLength(arr);

  // check invalid values
  isItAvailable(arr, "%", "0");

  // check if the value is greater than allowed
  isItMoreThan(arr, 10);

  // variable for Arabic numeral (true) or Roman numeral (false)
  let flag;
  flag == true;

  for (let elem of arr) {
    if (isArabianNumb(elem)) {
      flag = true;
    } else {
      flag = false;
    }
  }

  // if arabic numerals then apply function for arabic numerals
  if (flag == true) {
    return selectArithmOperatArabian(arr);
  }

  // if roman numerals then apply function for roman numerals
  if (flag == false) {
    return selectArithmOperatRomanian(arr);
  }
}
