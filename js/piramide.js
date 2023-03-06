function addPiramide() {
    let arrayNum = []
    let txt = "";
    document.getElementById("makePiramide").innerHTML = "";
    let num = document.getElementById("numberPiramide").value;
    console.log(num)
    for (let i = 0; i <= num; i++) {
        arrayNum.push(i);
        txt += String(arrayNum) + "<br>";
    }
    newTxt = String("Array: " + arrayNum + "<br>" + txt);
    document.getElementById("makePiramide").innerHTML = newTxt;
} 
