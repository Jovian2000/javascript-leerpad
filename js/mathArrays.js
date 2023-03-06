var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
    let text = ""
    for (let i = 0; i < 10; i++) {
        var newNum = arrayEen[i] + arrayTwee[i]
        text += String(arrayEen[i] + " + " + arrayTwee[i] + " = " + newNum + "<br>")
    }
    return text
}

function aftrekken(arrayEen, arrayTwee) {
    let text = ""
    for (let i = 0; i < 10; i++) {
        var newNum = arrayTwee[i] - arrayEen[i]
        text += String(arrayTwee[i] + " - " + arrayEen[i] + " = " + newNum + "<br>")
    }
    return text
}

function vermenigvuldigen(arrayEen, arrayTwee) {
    let text = ""
    for (let i = 0; i < 10; i++) {
        var newNum = arrayEen[i] * arrayTwee[i]
        text += String(arrayEen[i] + " x " + arrayTwee[i] + " = " + newNum + "<br>")
    }
    return text
}

function delen(arrayEen, arrayTwee) {
    let text = ""
    for (let i = 0; i < 10; i++) {
        var newNum = arrayTwee[i] / arrayEen[i]
        text += String(arrayTwee[i] + " / " + arrayEen[i] + " = " + newNum + "<br>")
    }
    return text
}

document.getElementById("headerOptellen").innerHTML = "Optellen van de twee arrays zijn:"
document.getElementById("optellen").innerHTML = optellen(arrayEen, arrayTwee)
document.getElementById("headerAftrekken").innerHTML = "Aftrekken van de twee arrays zijn:"
document.getElementById("aftrekken").innerHTML = aftrekken(arrayEen, arrayTwee)
document.getElementById("headerVermenigvuldigen").innerHTML = "Vermenigvuldigen van de twee arrays zijn:"
document.getElementById("vermenigvuldigen").innerHTML = vermenigvuldigen(arrayEen, arrayTwee)
document.getElementById("headerDelen").innerHTML = "Vermenigvuldigen van de twee arrays zijn:"
document.getElementById("delen").innerHTML = delen(arrayEen, arrayTwee)

