const days = [" maandag", " dinsdag", " woensdag", " donderdag", " vrijdag", " zaterdag", " zondag"];
const nameList = [];
const workDays = days.slice(1,5);

document.getElementById("allDays").innerHTML = days;
document.getElementById("workDays").innerHTML = days.slice(0,5);
document.getElementById("weekend").innerHTML = days.slice(-2);
document.getElementById("daysReverse").innerHTML = days.reverse();
document.getElementById("workdaysReverse").innerHTML = days.slice(2,7);
document.getElementById("weekendReverse").innerHTML = days.slice(0,2);

function inputDisablerEnabler(yesOrNo) {
    let enableInputs = document.getElementById("nameInput");
    let enableBtn = document.getElementById("nameSend");

    if (yesOrNo == 'yes') {
        enableInputs.disabled = true;
        enableBtn.disabled = true;
    } else {
        enableInputs.disabled = false;
        enableBtn.disabled = false;
    }
}

function disableNum() {
    let numChoices = document.getElementById("enabler");
    let number = document.getElementById("num");
    numChoices.disabled = true;
    number.disabled = true;
}

function addNames() {
    let number = nameList.length;
    let input = document.getElementById("num");
    let num = parseInt(input.value);
    
    if (number < num) {
        let names = document.getElementById("nameInput");
        nameList.push(names.value);
        if (names.value != "") {
            names.value = "";
        }
        if (nameList.length == num) {
            inputDisablerEnabler("yes");
            disableNum();
            document.getElementById("nameArrayHeader").innerHTML = "Namen lijst";
            document.getElementById("nameArray").innerHTML = nameList;
            document.getElementById("nameArrayHeaderReverse").innerHTML = "Namen lijst omgekeerd";
            document.getElementById("nameArrayReverse").innerHTML = nameList.reverse();
        }
    } else {
        inputDisablerEnabler("yes");
    }
}