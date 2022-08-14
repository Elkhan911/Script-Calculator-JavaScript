function calculator(string) {
  const symbols = string.split(" ");
  return String(Number(symbols[0]) + Number(symbols[2]));
}

// Сложение
console.log(calculator("1 + 1"));
console.log(calculator("1 + 2"));
console.log(calculator("4 + 3"));
console.log(calculator("10 + 10"));
