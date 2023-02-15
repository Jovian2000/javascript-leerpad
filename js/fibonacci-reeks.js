const fibonacciList = [0, 1];

function fiboFunction(list) {
    for (let i = 0; i < 20; i++) {
        var newNum = list[list.length -1] + list[list.length -2];
        list.push(newNum);
    }
    return list;
}

var str = "<ul>"

fiboFunction(fibonacciList).forEach(function(slide) {
    str += "<li>" + slide + "</li>";
});

str += "</ul>";

document.getElementById("fibonacci").innerHTML = str;



