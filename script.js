/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use stricc'

    var search = document.getElementById('search');
    var btn = document.getElementById('submit-btn');

    var pounds = document.getElementById("outputPounds")
    var grams = document.getElementById("outputGrams")
    var ounces = document.getElementById("outputOunces")

function calc () {
    if (search.value > 100000000) {
        alert("Not too mutch? :)")
        search.value = 0.00;
    } else {
    pounds.innerHTML = (search.value * 2.2046).toFixed(2);
    grams.innerHTML = (search.value / 0.0010000);
    ounces.innerHTML = (search.value * 35.274).toFixed(2);
    }
}
    if (search.value == " "){
    search.value = 0.00;
}   else {
    calc();
}