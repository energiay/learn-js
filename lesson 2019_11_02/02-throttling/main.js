(function () {
    
    let throttle = function (fn, ms) {
        
        let execute = 0;
        let timerId;
        
        return function (val) {
            let self = this; // сохраняю контекст
            if (execute + ms < Date.now()) {
                fn.call(self, val);
                execute = Date.now();
            }
            
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                fn.call(self, val);
            }, ms);

        }
    }
    
    
    function f(a) {
        console.log(a)
        console.log(this)
    }
    
    // f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(f, 1000);
    
    f1000.call({a:1},1); // показывает 1
    f1000.call({a:2},2); // (ограничение, 1000 мс ещё нет)
    f1000.call({a:3},3); // (ограничение, 1000 мс ещё нет)
    
    // когда 1000 мс истекли ...
    // ...выводим 3, промежуточное значение 2 было проигнорировано

})();