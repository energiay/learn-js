

function ListSelect(param) {
    var wrapper = param.elem;
    var lastElem;

    wrapper.onclick = function ({target, ctrlKey, shiftKey}) {
        if (!target.closest('li')) {
            return;
        }

        if (ctrlKey) {
            ctrlSelect(target);
            lastElem = target;
            return
        }
        
        if (shiftKey) {
            shiftSelect(target);
            lastElem = target;
            return
        }

        select(target)
        lastElem = target;
    }


    let shiftSelect = function (elem) {
        var lastLi = lastElem || wrapper.children[0];
        let value = elem.innerText;
        if (lastLi === elem) {
            elem.classList.add('selected');
            return
        }

        lastLi.classList.add('selected');
        var position = lastLi.compareDocumentPosition(elem);
        let elemStep = 'previousElementSibling';
        if (position == 4) {
            elemStep = 'nextElementSibling';
        }
        
        var newElem;
        let bStep = true;
        while (bStep) {
            newElem = lastLi[elemStep];
            newElem.classList.add('selected');
            if (newElem === elem) {
                bStep = false;
            }

            lastLi = newElem;
        }
    }
    

    let clearSelected = function () {
        let elems = document.querySelectorAll('ul > li.selected');
        for (let i = 0; i < elems.length; i++) {
            console.log(elems[i]);
            elems[i].className = '';
        }
    }


    let select = function (elem) {
        clearSelected();
        ctrlSelect(elem);
    }


    let ctrlSelect = function (elem) {
        elem.classList.toggle('selected');
    }



    let getSelected = function () {
        return [].map.call(document.querySelectorAll('ul > li.selected'), function (elem) {
            return elem.innerText + '\n';
        }).join('');
    }

    this.getSelected = getSelected;
}