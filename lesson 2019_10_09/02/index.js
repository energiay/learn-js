(function () {
    let data = {
        "Рыбы": {
          "форель": {},
          "лосось": {}
        },
        "Деревья": {
          "Огромные": {
            "секвойя": {},
            "дуб": {}
          },
          "Цветковые": {
            "яблоня": {},
            "магнолия": {}
          }
        }
      };

    let get

    let createTreeText = function (content, obj) {
        let li = '';
        let ul;
        for (let key in obj) {
            li += '<li>' + key + createTreeText(content, obj[key]) + '</li>';
        }
        
        if (li) {
            return '<ul>' + li + '</ul>';
        }
        
        return '';
    }
    
    let createTree = function (container, obj) {
        container.innerHTML = createTreeText(container, obj);
    }

    let container = document.getElementById('container');
    createTree(container, data); // создаёт дерево в контейнере
})();