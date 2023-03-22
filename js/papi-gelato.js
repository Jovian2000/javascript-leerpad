const prijsBolletje = 0.95 
const prijsHoorn = 1.25
const prijsBakje = 0.75
const prijsSlagroom = 0.50
const prijsSprinkels = 0.30
const prijsCaramelSausHorn = 0.60
const prijsCaramelSausBak = 0.90

var nummerIjs = 0 // Hier gaat de teller omhoog als de ijs is besteld en gaat eraf als je een ijsje weghaald. Het is vooral om te kijken naar de positie in de lijst
var nieuwIjs = true // Als hij op true staat dan gaat hij een nieuw ijsje in de lijst toevoegen als je iets besteld
var arrayIjsjes = [] 

function smaakKeuze(item, operator) {
    try {
        let smaakKnopAardbei = document.getElementById("smaak-knop-aardbei")
        let smaakKnopChoco = document.getElementById("smaak-knop-choco")
        let smaakKnopVanille = document.getElementById("smaak-knop-vanille")

        // als de gebruiker een nieuw ijsje wilt, dan maakt hij een object aan die hij vervolgens gelijk in de lijst stop en daarna gaat hij gelijk toevoegen welke smaak je had gekozen.
        if (nieuwIjs) {
            arrayIjsjes.push({
                "bolletjes (aardbei)": 0,
                "bolletjes (chocola)": 0,
                "bolletjes (vanille)": 0,
                "hoorn of bak": "",
                "topping": "",
            })
            nieuwIjs = false
        }

        // hier kijkt hij welke smaak is doorgegeven en doet 1 bij de waarde erbij of eraf
        if (item == "choco" && operator == "+") {
            arrayIjsjes[nummerIjs]["bolletjes (chocola)"] += 1 
        } else if (item == "vanille" && operator == "+") {
            arrayIjsjes[nummerIjs]["bolletjes (vanille)"] += 1 
        } else if (item == "aardbei" && operator == "+") {
            arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] += 1 
        } else if (item == "choco" && operator == "-") {
            arrayIjsjes[nummerIjs]["bolletjes (chocola)"] -= 1 
            if (arrayIjsjes[nummerIjs]["bolletjes (chocola)"] < 0){
                arrayIjsjes[nummerIjs]["bolletjes (chocola)"] = 0
            }  
        } else if (item == "vanille" && operator == "-") {
            arrayIjsjes[nummerIjs]["bolletjes (vanille)"] -= 1 
            if (arrayIjsjes[nummerIjs]["bolletjes (vanille)"] < 0){
                arrayIjsjes[nummerIjs]["bolletjes (vanille)"] = 0
            }  
        } else if (item == "aardbei" && operator == "-") {
            arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] -= 1 
            if (arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] < 0){
                arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] = 0
            }  
        }
        let opsommingBollen = arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] + arrayIjsjes[nummerIjs]["bolletjes (chocola)"] + arrayIjsjes[nummerIjs]["bolletjes (vanille)"]

        console.log(opsommingBollen)

        if (opsommingBollen > 3) {
            $("#hoorn-of-bak").prop('disabled', true)
            $("select[name='name']").val('bak')
        } else {
            $("#hoorn-of-bak").prop('disabled', false)
        }

        if (opsommingBollen >= 8) {
            smaakKnopAardbei.disabled = true
            smaakKnopChoco.disabled = true
            smaakKnopVanille.disabled = true
        } else {
            smaakKnopAardbei.disabled = false
            smaakKnopChoco.disabled = false
            smaakKnopVanille.disabled = false
        }

        document.getElementById("bollen-aardbei").innerHTML = "Aantal bollen: " + arrayIjsjes[nummerIjs]["bolletjes (aardbei)"]
        document.getElementById("bollen-choco").innerHTML = "Aantal bollen: " + arrayIjsjes[nummerIjs]["bolletjes (chocola)"]
        document.getElementById("bollen-vanille").innerHTML = "Aantal bollen: " + arrayIjsjes[nummerIjs]["bolletjes (vanille)"]
    } catch {
        alert("Er ging iets fout")
        console.log()
    }
}

function ijsToevoegen() {
    try {
        let smaakKnopAardbei = document.getElementById("smaak-knop-aardbei")
        let smaakKnopChoco = document.getElementById("smaak-knop-choco")
        let smaakKnopVanille = document.getElementById("smaak-knop-vanille")

        let opsommingBollen = arrayIjsjes[nummerIjs]["bolletjes (aardbei)"] + arrayIjsjes[nummerIjs]["bolletjes (chocola)"] + arrayIjsjes[nummerIjs]["bolletjes (vanille)"]
        
        if (opsommingBollen > 0) {
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
                arrayIjsjes[nummerIjs]["topping"] = "geen topping"
            }

            nummerIjs += 1

            document.getElementById("bollen-aardbei").innerHTML = "Aantal bollen: 0" 
            document.getElementById("bollen-choco").innerHTML = "Aantal bollen: 0" 
            document.getElementById("bollen-vanille").innerHTML = "Aantal bollen: 0"

            smaakKnopAardbei.disabled = false
            smaakKnopChoco.disabled = false
            smaakKnopVanille.disabled = false
        } else {
            alert("U heeft te weinig bollen")
            arrayIjsjes.pop(arrayIjsjes[nummerIjs])
        }
        nieuwIjs = true
        
        console.log(arrayIjsjes)
        $("#hoorn-of-bak").prop('disabled', false)
    } catch {
        alert("Er ging iets fout")
    }
}

function afronding() {
    try {
        let schermPapiGelato = document.getElementById("bestel-blok")
        let schermBon = document.getElementById("bon-blok")
        schermPapiGelato.style.display = "none"
        schermBon.style.display = "block"
        let bonTekst = ""
        let prijsTekst = ""
        var totaalPrijs = 0
        console.log(typeof(totaalPrijs))

        for (let i = 0; i < arrayIjsjes.length; i++) {
            let totaalprijsBol = prijsBolletje * (arrayIjsjes[i]["bolletjes (aardbei)"] + arrayIjsjes[i]["bolletjes (chocola)"] + arrayIjsjes[i]["bolletjes (vanille)"])
            let totaalprijsHornOfBak = 0
            let totaalprijsTopping = 0

            if (arrayIjsjes[i]["hoorn of bak"] == "hoorn") {
                totaalprijsHornOfBak = prijsHoorn
            } else {
                totaalprijsHornOfBak = prijsBakje
            }

            if (arrayIjsjes[i]["topping"] == "sprinkels") {
                totaalprijsTopping = prijsSprinkels
            } else if (arrayIjsjes[i]["topping"] == "slagroom") {
                totaalprijsTopping = prijsSlagroom
            } else if (arrayIjsjes[i]["topping"] == "caramel saus" && arrayIjsjes[i]["hoorn of bak"] == "hoorn") {
                totaalprijsTopping = prijsCaramelSausHorn
            } else if (arrayIjsjes[i]["topping"] == "caramel saus" && arrayIjsjes[i]["hoorn of bak"] == "bak") {
                totaalprijsTopping = prijsCaramelSausBak
            }

            let totaalprijsIjs = totaalprijsBol + totaalprijsHornOfBak + totaalprijsTopping
            totaalPrijs += totaalprijsIjs

            bonTekst += "<b>Ijs: <span>€ "  +   totaalprijsIjs.toFixed(2)   + "<span></b><br>"
            + " bolletje aardbei: " + arrayIjsjes[i]["bolletjes (aardbei)"] + "<br>"
            + " bolletje chocola: " + arrayIjsjes[i]["bolletjes (chocola)"] + "<br>"
            + " bolletje vanille: " + arrayIjsjes[i]["bolletjes (vanille)"] + "<br>"
            + " " + arrayIjsjes[i]["hoorn of bak"] + "<br>"
            + " " + arrayIjsjes[i]["topping"] + "<br><br>"

        }
        prijsTekst = "<b>Totaal: <span>€ " + totaalPrijs.toFixed(2) + "</b>" 
        document.getElementById("bon").innerHTML = bonTekst
        document.getElementById("totaal-prijs").innerHTML = prijsTekst
    } catch {
        alert("Er ging iets fout")
    }
}
