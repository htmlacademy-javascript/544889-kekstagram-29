const lessThen = function (line, num) {
  if (line.length <= num) {
    return true;
  } else {
    return false;
  }
};
// eslint-disable-next-line no-console
console.log(lessThen('проверяемая строка', 20));
// eslint-disable-next-line no-console
console.log(lessThen('проверяемая строка', 18));
// eslint-disable-next-line no-console
console.log(lessThen('проверяемая строка', 10));

const palindrome = function (p) {
  const pattern = ' ';
  const replacement = '';
  const p1 = (p.replaceAll(pattern, replacement)).toLowerCase();
  let temp = '';
  for (let i = (p1.length - 1); i >= 0; i--) {
    temp += p1.at(i);
  }
  if (temp === p1) {
    return true;
  } else {
    return false;
  }
};

// eslint-disable-next-line no-console
console.log(palindrome('топот'));
// eslint-disable-next-line no-console
console.log(palindrome('ДовОд'));
// eslint-disable-next-line no-console
console.log(palindrome('Кекс'));
// eslint-disable-next-line no-console
console.log(palindrome('Лёша на полке клопа нашёл '));

const gimmeNumber = function (something) {
  let num = something;
  let temp = '';
  if (typeof something === 'number') {
    num = something.toString();
  }
  for (let i = 0; i <= num.length - 1; i++) {
    if (Number.isNaN(parseInt(num.at(i) , 10)) === false) {
      temp += num.at(i);
    }
  }
  return parseInt(temp, 10);
};

// eslint-disable-next-line no-console
console.log(gimmeNumber('2023 год'));
// eslint-disable-next-line no-console
console.log(gimmeNumber('ECMAScript 2022'));
// eslint-disable-next-line no-console
console.log(gimmeNumber('1 кефир, 0.5 батона'));
// eslint-disable-next-line no-console
console.log(gimmeNumber('агент 007'));
// eslint-disable-next-line no-console
console.log(gimmeNumber('а я томат'));
// eslint-disable-next-line no-console
console.log(gimmeNumber(2023));
// eslint-disable-next-line no-console
console.log(gimmeNumber(-1));
// eslint-disable-next-line no-console
console.log(gimmeNumber(1.5));
