function addReversePiramide() {
    let arrayNum = []
    let txt = "";
    document.getElementById("makePiramideReverse").innerHTML = "";
    let num = document.getElementById("numberPiramideReverse").value;
    for (let i = 0; i <= num; i++) {
        arrayNum.push(i);
    }
    for (let v = num; v >= 0; v--) {
        txt += String(arrayNum.slice(0,(v+1))) + "<br>"
    }
    newTxt = String("Array: " + arrayNum + "<br>" + txt);
    document.getElementById("makePiramideReverse").innerHTML = newTxt;
}