(function () {
    let getDayOfMonth = function (month, year) {
        return 33 - new Date(year, month, 33).getDate();
    }
    
    let getWeek = function () {
        let result = [];
        for (let i = 1; i <= 7; i++) {
    
            result.push('<td>' + i + '</td>');
        }

        return result;
    }

    let dayOfMonth = function (days, weekDay) {
        let result = [];

        if (weekDay == 0) {
            weekDay = 7;
        }

        let i = 0;
        let countDays = 0;

        result.push('<tr>');
        while (true) {
            i++;
            
            if (i < weekDay) {
                result.push('<td></td>');
                continue;
            }
            
            if (countDays >= days) {
                result.push('<td></td>');
                
                if (i%7 == 0) {
                    break;
                }
                
                continue;
            }
            
            countDays++;
            result.push('<td>' + countDays + '</td>');
            
            if (i%7 == 0) {
                result.push('</tr>' + '<tr>');
            }
        }
        result.push('</tr>');

        return result.join('');
    }

    let createCalendar = function (elem, year, month) {
        let newMonth = month - 1;
        let weekday = new Date(year, newMonth, 1).getDay();
        let days = getDayOfMonth(newMonth, year);

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

    let elem = document.querySelector('.js_add');
    createCalendar(elem, 2019, 2);
})();