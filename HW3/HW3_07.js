//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let num = +prompt('Введите число'),
    offset = +prompt('Введите число на которое сдвигать'),
    triger = true,
    length = 1;

do {
    if ((num % Math.pow(10, length)) == num) {
        triger = false;
    } else {
        length++;
    }
} while (triger);

let revOffset = length - offset,
    part1 = num % Math.pow(10, revOffset),
    part2 = (num - part1) / Math.pow(10, revOffset);

alert("" + part1 + part2);
