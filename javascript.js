
const NumeroKm = prompt("quanti km vuole percorere?", 10);
const Eta = prompt("qual'è la sua eta?");
const PrezzoBiglietto = 0.21;
let Sconto20 = (PrezzoBiglietto * NumeroKm * 20 / 100);
let Sconto40 = (PrezzoBiglietto * NumeroKm * 40 / 100);
let PrezzoFinale;


if (NumeroKm == isNaN || Eta == isNaN) {
    alert("Lo sai che ti ho chiesto dei numeri?");
} else if (Eta < 18) {
    PrezzoFinale = (PrezzoBiglietto * NumeroKm - Sconto20);
    PrezzoFinale = (Math.round(PrezzoFinale * 100) / 100).toFixed(2);
    document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale (con lo sconto del 20%) è: " + PrezzoFinale + " $";
} else if (Eta > 18 && Eta < 65) {
    PrezzoFinale = (PrezzoBiglietto * NumeroKm);
    PrezzoFinale = (Math.round(PrezzoFinale * 100) / 100).toFixed(2);
    document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale è: " + PrezzoFinale + " $";
} else if (Eta > 65) {
    PrezzoFinale = (PrezzoBiglietto * NumeroKm - Sconto40);
    PrezzoFinale = (Math.round(PrezzoFinale * 100) / 100).toFixed(2);
    document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale (con lo sconto del 40%) è: " + PrezzoFinale + " $";
}



