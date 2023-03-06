var arrayNum = [1,2,3,4,5,6,7,8,9,10];

function timesTwo(array, num) {
    let text = ""
    for (let i = 0; i < 10; i++) {
        var newNum = array[i] * num
        text += String(array[i] + " x " + num + " = " + newNum + "<br>")
    }
    return text
}

document.getElementById("headerTafelsTwee").innerHTML = "Tafel van 2"
document.getElementById("tafelTwee").innerHTML = timesTwo(arrayNum, 2)
document.getElementById("headerTafelsVier").innerHTML = "Tafel van 4"
document.getElementById("tafelVier").innerHTML = timesTwo(arrayNum, 4)
document.getElementById("headerTafelsZes").innerHTML = "Tafel van 6"
document.getElementById("tafelZes").innerHTML = timesTwo(arrayNum, 6)
document.getElementById("headerTafelsAcht").innerHTML = "Tafel van 8"
document.getElementById("tafelAcht").innerHTML = timesTwo(arrayNum, 8)
