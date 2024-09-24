function sale() {
    let saleDate = new Date(2024, 8, 25); // Укажите дату распродажи

    function updateTimer() {
        let currentDate = new Date();
        let dateDifference = saleDate - currentDate;

        // Проверка, если распродажа завершена
        if (dateDifference < 0) {
            document.querySelector('.time').innerHTML = '<h2>Скидка завершена!</h2>';
            return;
        }

        let days = Math.floor(dateDifference / (24 * 60 * 60 * 1000));
        let hours = Math.floor((dateDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let minutes = Math.floor((dateDifference % (60 * 60 * 1000)) / (60 * 1000));

        let timeValue = document.getElementsByClassName("date");
        timeValue[0].innerHTML = String(days).padStart(2, '0'); // Дни
        timeValue[1].innerHTML = String(hours).padStart(2, '0'); // Часы
        timeValue[2].innerHTML = String(minutes).padStart(2, '0'); // Минуты
    }

    updateTimer(); // Устанавливаем начальные значения
    setInterval(updateTimer, 1000); // Обновляем каждую секунду
}

// Вызываем функцию sale, чтобы запустить таймер
sale();
