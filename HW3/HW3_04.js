//Определить количество цифр в введенном числе.

let usrNum = +prompt('Введите число'),
    triger = true,
    i = 1;

do {
    if ((usrNum % Math.pow(10, i)) == usrNum) {
        triger = false;
    } else {
        i++;
    }

} while (triger);

alert(i);