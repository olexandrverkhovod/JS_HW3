//Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let i = 1;
do {
    let count = i <= 7 ? i++ : i = 1;
    switch (count) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Четверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье");
            break;
        default:
            break;
    }
} while (confirm(`Хотите увидеть следующий день?`));