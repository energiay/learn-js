

function Clock(param) {
    var wrapper = param.elem;
    var timerId;

    let start = function () {
        wrapper.innerHTML = render();
        clearInterval(timerId);
        timerId = setInterval(function () {
            wrapper.innerHTML = render();
        }, 1000);
    }
    

    let stop = function () {
        clearInterval(timerId);
    }


    let intToStr = function (int) {
        var str = int.toString();
        return (str.length == 1) ? '0' + str : str; 
    }
    

    let getHours = function (date) {
        var hours = date.getHours();
        return intToStr(hours)
    }
    

    let getMinutes = function (date) {
        var minutes = date.getMinutes();
        return intToStr(minutes)
    }
    

    let getSeconds = function (date) {
        var seconds = date.getSeconds();
        return intToStr(seconds)      
    }
    

    let render = function () {
        var date = new Date();
        return getHours(date) + ':' + getMinutes(date) + ':' + getSeconds(date);
    }


    let show = function () {
        wrapper.innerHTML = '00:00:00';
    }
    show();

    this.start = start;
    this.stop = stop;
}