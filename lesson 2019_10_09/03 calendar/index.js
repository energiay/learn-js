(function () {
    
    /**
     * Получение кол-ва дней в месяце
     * @param {*} month 
     * @param {*} year 
     */
    let getDayOfMonth = function (month, year) {
        return 33 - new Date(year, month, 33).getDate();
    }
    

    /**
     * Формирование контента таблиы
     * @param {*} days 
     * @param {*} weekDay 
     */
    let dayOfMonth = function (days, weekDay) {
        let result = []; // собираем данные в массив

        // вс последний день недели
        if (weekDay == 0) {
            weekDay = 7;
        }

        let countDays = 0;
        let MAX_CELLS_OF_MONTH = 42;

        result.push('<tr>');
        for (let i = 1; i <= MAX_CELLS_OF_MONTH; i++) {
            
            // если 1 день не совпал с Пн
            if (i < weekDay) {
                result.push('<td></td>');
                continue;
            }
            
            if (countDays >= days) {
                result.push('<td></td>');
                if (i%7 == 0) {
                    break;
                }
                
                // если последний день не совпал с Вс
                continue;
            }
            
            // Отрисовка всех дней недели
            countDays++;
            result.push('<td>' + countDays + '</td>');
            
            // Закрываем неделю и начинаем новую
            if (i%7 == 0) {
                result.push('</tr><tr>');
            }
        }
        result.push('</tr>');

        return result.join('');
    }


    /**
     * Формирование и отрисовка таблицы
     * @param {*} elem 
     * @param {*} year 
     * @param {*} month 
     */
    let createCalendar = function (elem, year, month) {
        let newMonth = month - 1;
        let weekday = new Date(year, newMonth, 1).getDay(); // получить день недели
        let days = getDayOfMonth(newMonth, year); // кол-во дней в месяце

        let table = `
            <table>
                <tr>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th>Сб</th>
                    <th>Вс</th>
                </tr>
                ${dayOfMonth(days, weekday)}
            </table>
        `;

        elem.innerHTML = table;
    }


    // Точка входа
    let elem = document.querySelector('.js_add');
    createCalendar(elem, 2019, 9);
})();