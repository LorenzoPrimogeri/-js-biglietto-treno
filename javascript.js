const button = document.getElementById("btn");
button.addEventListener('click', function () {
    const numerokm = document.getElementById("numerokm").value;
    const eta = document.getElementById("eta").value;
    const prezzobiglietto = 0.21;
    const sconto20 = (prezzobiglietto * numerokm * 20 / 100);
    const sconto40 = (prezzobiglietto * numerokm * 40 / 100);
    let prezzofinale;
    if (isNaN(numerokm) || isNaN(eta)) {
        alert("Lo sai che ti ho chiesto dei numeri?");
    } else if (eta < 18) {
        prezzofinale = (prezzobiglietto * numerokm - sconto20);
        prezzofinale = (Math.round(prezzofinale * 100) / 100).toFixed(2);
        document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale (con lo sconto del 20%) è: " + prezzofinale + " $";
    } else if (eta > 18 && eta < 65) {
        prezzofinale = (prezzobiglietto * numerokm);
        prezzofinale = (Math.round(prezzofinale * 100) / 100).toFixed(2);
        document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale è: " + prezzofinale + " $";
    } else if (eta > 65) {
        prezzofinale = (prezzobiglietto * numerokm - sconto40);
        prezzofinale = (Math.round(prezzofinale * 100) / 100).toFixed(2);
        document.getElementById("PrezzoFinale").innerHTML = "Il prezzo finale (con lo sconto del 40%) è: " + prezzofinale + " $";
    }
}
);


