//Запросить 2 числа и найти только наибольший общий делитель.

let firstNum = +prompt('Введите первое число'),
    secondNum = +prompt('Введите второе число'),
    max = firstNum > secondNum ? firstNum : secondNum,
    min = firstNum < secondNum ? firstNum : secondNum;

for (let i = min; i > 0; i--) {
    if ((max % i == 0) && (min % i == 0)) {
        result = i;
        break;
    }
}
alert(result);
