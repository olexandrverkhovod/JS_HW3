//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j} <br>`);
        let count2 = j > 10 ? j = 1 : '';
    }
    let count1 = i > 9 ? i = 2 : '';
    document.write(`<br>`);
}