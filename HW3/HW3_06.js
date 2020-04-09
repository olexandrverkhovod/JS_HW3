//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

let firstNum = prompt('Введите первое число'),
    secondNum = prompt('Введите второе число'),
    sign = prompt('Введите знак (+, -, *, /)');

do {
    switch (sign) {
        case '+':
            alert(firstNum + secondNum);
            break;
        case '-':
            alert(firstNum - secondNum);
            break;
        case '*':
            alert(firstNum * secondNum);
            break;
        case '/':
            alert(firstNum / secondNum);
            break;
        default:
            break;
    }
} while (confirm('Хотите продолжить'));

