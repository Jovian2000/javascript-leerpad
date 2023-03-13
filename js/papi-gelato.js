const prijsBolletje = 0.95 
const prijsHoorn = 1.25
const prijsBakje = 0.75
const prijsSlagroom = 0.50
const prijsSprinkels = 0.30
const prijsCaramelSausHorn = 0.60
const prijsCaramelSausBak = 0.90

var nummerIjs = 0
var nieuwIjs = true
var arrayIjsjes = []
var ijs = {
    "bolletjes (chocola)": 0,
    "bolletjes (vanille)": 0,
    "bolletjes (aardbei)": 0,
    "hoorn of bak": "",
    "topping": "",
}

function toevoegingenSmaak(item) {
    // als de gebruiker een nieuw ijsje wilt, dan maakt hij een object aan die hij vervolgens gelijk in de lijst stop en daarna gaat hij gelijk toevoegen welke smaak je had gekozen.
    if (nieuwIjs) {
        arrayIjsjes.push({
            "bolletjes (chocola)": 0,
            "bolletjes (vanille)": 0,
            "bolletjes (aardbei)": 0,
            "hoorn of bak": "",
            "topping": "",
        })
        nieuwIjs = false
    }

    // hier kijkt hij welke smaak is doorgegeven en doet 1 bij de waarde erbij
    if (item == "choco") {
        arrayIjsjes[nummerIjs]["bolletjes (chocola)"] += 1 
    } else if (item == "vanille") {
        arrayIjsjes[nummerIjs]["bolletjes (vanille)"] += 1 
    } else if (item == "aardbei") {
    arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] += 1 
    }
}

function afronding(){
    // hier haalt hij de resterende items op die op de website staat
    let hoornOfBak = document.getElementById("hoorn-of-bak").value
    let topping = document.getElementById("topping").value

    // hier kijkt hij of je een hoorntje of bakje wilt, daarna zet hij in de object welke je hebt gekozen
    if (hoornOfBak == "hoorn") {
        arrayIjsjes[nummerIjs]["hoorn of bak"] = "hoorn"
    } else if (hoornOfBak == "bak") {
        arrayIjsjes[nummerIjs]["hoorn of bak"] = "bak"
    }

    // hier kijkt welke topping je hebt gekozen en zet daarna in wat jij hebt gekozen
    if (topping == "slagroom") {
        arrayIjsjes[nummerIjs]["topping"] = "slagroom"
    } else if (topping == "sprinkels") {
        arrayIjsjes[nummerIjs]["topping"] = "sprinkels"
    } else if (topping == "caramel saus") {
        arrayIjsjes[nummerIjs]["topping"] = "caramel saus"
    } else {
        arrayIjsjes[nummerIjs]["topping"] = "geen"
    }

    nieuwIjs = true
    nummerIjs += 1
    console.log(arrayIjsjes)
}
