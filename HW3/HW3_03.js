//Запросить у пользователя число и вывести все делители этого числа.

let usrNum = +prompt('Введите число'),
    result = "";

for (let i = 0; i < usrNum; i++) {
    result += (usrNum % i == 0) ? i + " " : '';
}

alert(result);