'use strict';

function convertCellsStatus(elem) {
    switch (elem.dataset.available) {
        case 'true' : {
            elem.className = 'available';
            break;
        }
        case 'false' : {
            elem.className = 'unavailable';
            break;
        }
        default : {
            elem.hidden = true;
        }
    }
}

function getClassForGender(text) {
    switch (text) {
        case 'm' : return 'male';
        case 'f' : return 'female';
    }
}

function highlight(table) {
    
    let trs = table.querySelectorAll('tr');
    
    // начинаем перебор, с пропуска заголовка
    for (let i = 1; i < trs.length; i++) {
        let statusCell = trs[i].cells[3];
        convertCellsStatus(statusCell);
        
        let genderCell = trs[i].cells[2];
        genderCell.className = getClassForGender(genderCell.innerText);
        
        let ageCell = trs[i].cells[1];
        if (parseInt(ageCell.innerHTML) < 18) {
            ageCell.style.textDecoration = 'line-through';
        }
    }

}

highlight(document.querySelector('.js-teachers')); 

