// Подсчитать сумму всех чисел в заданном пользователем диапазоне. 

let firstNum = +prompt('Введите первое число'),
    secondNum = +prompt('Введите второе число'),
    max = firstNum > secondNum ? firstNum : secondNum,
    min = firstNum < secondNum ? firstNum : secondNum,
    buf = 0;

for (let i = min; i < max; i++) {
    buf += i;
}
alert(buf);