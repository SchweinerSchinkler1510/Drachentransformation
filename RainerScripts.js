var Ofenkäse = new Gericht("Ofenkäse", 5, 667, 60, 1, 1, 32.4, 0, 3.24, 3.50);
var Dosenravioli = new Gericht("Dosenravioli", 5, 688, 23, 90, 12.8, 27.2, 0,
		8, 1.95);
var Kinderschokolade = new Gericht("Kinderschokolade", 2, 566, 35, 53, 53, 8.7,
		0, 0, 1.29);
var CordonBleu = new Gericht("CordonBleu", 5, 1055, 55, 55, 5, 85, 0, 6, 3.10);
var Kroketten = new Gericht("Kroketten", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Laugenbrezeln = new Gericht("Laugenbrezeln", 5, 331, 29, 0.5, 17, 0, 1.7,
		0, 4.29);
var FertigHotdogs = new Gericht("FertigHotdogs", 5, 331, 29, 0.5, 17, 0, 1.7,
		0, 4.29);
var FertigBurger = new Gericht("FertigBurger", 5, 331, 29, 0.5, 17, 0, 1.7, 0,
		4.29);
var Buttermilch = new Gericht("Buttermilch", 5, 331, 29, 0.5, 17, 0, 1.7, 0,
		4.29);
var Würfelzucker = new Gericht("Würfelzucker", 5, 331, 29, 0.5, 17, 0, 1.7, 0,
		4.29);
var Jägertopf = new Gericht("Jägertopf", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Monster = new Gericht("Monster", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);

// (GerichtName, Sättigung, Kalorien, Fett, Kohlenhydrate, Zucker, Proteine,
// Vitamine, Salz, Kosten)

var Statur = 0;
var GerichtName;
var sumSättigung = 0;
var sumKalorien = 0;
var sumFett = 0;
var sumKohlenhydrate = 0;
var sumZucker = 0;
var sumProteine = 0;
var sumSalz = 0;
var sumVitamine = 0;
var sumBudget = 40;
var sumKosten = 0;

var faktor = 1;
var tagSättigung = 100;
var tagKalorien = 2300;
var tagFett = 92;
var tagKohlenhydrate = 290;
var tagZucker = 62;
var tagProteine = 55;
var tagVitamine = 1;
var tagSalz = 5;

function setFaktor(Statur) {
	faktor = Statur;
	sumBudget = sumBudget * Statur;
	tagSättigung = tagSättigung * Statur;
	tagKalorien = tagKalorien * Statur;
	tagFett = tagFett * Statur;
	tagKohlenhydrate = tagKohlenhydrate * Statur;
	tagZucker = tagZucker * Statur;
	tagProteine = tagProteine * Statur;
	tagVitamine = tagVitamine * Statur;
	tagSalz = tagSalz * Statur;

	document.getElementById("sumBudget").innerHTML = sumBudget.toFixed(2);

	disableButtonsStatur();

}

function disableButtonsStatur() {
	document.getElementById("buttonStaturAktiv1").disabled = true;
	document.getElementById("buttonStaturAktiv2").disabled = true;
	document.getElementById("buttonStaturAktiv3").disabled = true;
}

function Gericht(GerichtName, Sättigung, Kalorien, Fett, Kohlenhydrate, Zucker,
		Proteine, Vitamine, Salz, Kosten) {
	this.GerichtName = GerichtName;
	this.Sättigung = Sättigung;
	this.Kalorien = Kalorien;
	this.Zucker = Zucker;
	this.Fett = Fett;
	this.Kohlenhydrate = Kohlenhydrate;
	this.Proteine = Proteine;
	this.Vitamine = Vitamine;
	this.Salz = Salz;
	this.Kosten = Kosten
}

function auswahlGericht(Gericht) {

	if (sumBudget > Gericht.Kosten) {

		sumSättigung = sumSättigung + Gericht.Sättigung;
		sumKalorien = sumKalorien + Gericht.Kalorien;
		sumFett = sumFett + Gericht.Fett;
		sumKohlenhydrate = sumKohlenhydrate + Gericht.Kohlenhydrate;
		sumZucker = sumZucker + Gericht.Zucker;
		sumProteine = sumProteine + Gericht.Proteine;
		sumVitamine = sumVitamine + Gericht.Vitamine;
		sumSalz = sumSalz + Gericht.Salz;
		sumKosten = sumKosten + Gericht.Kosten;

		sumBudget = sumBudget - Gericht.Kosten;

		redo();

	} else {

		redo2();

	}
}

function redo() {
	document.getElementById("sumBudget").innerHTML = sumBudget.toFixed(2)

	document.getElementById("tableHeaderFaktor").innerHTML = "Tagesbedarf (x"
			+ faktor + ")"

	document.getElementById("sumSättigung").innerHTML = sumSättigung + " %"
	document.getElementById("sumKalorien").innerHTML = sumKalorien + " kcal"
	document.getElementById("sumFett").innerHTML = sumFett.toFixed(2) + " g"
	document.getElementById("sumKohlenhydrate").innerHTML = sumKohlenhydrate
			.toFixed(2)
			+ " g"
	document.getElementById("sumZucker").innerHTML = sumZucker.toFixed(2)
			+ " g"
	document.getElementById("sumProteine").innerHTML = sumProteine.toFixed(2)
			+ " g"
	document.getElementById("sumVitamine").innerHTML = sumVitamine.toFixed(2)
			+ " g"
	document.getElementById("sumSalz").innerHTML = sumSalz.toFixed(2) + " g"

	document.getElementById("tagSättigung").innerHTML = tagSättigung + " %"
	document.getElementById("tagKalorien").innerHTML = tagKalorien + " kcal"
	document.getElementById("tagFett").innerHTML = tagFett.toFixed(2) + " g"
	document.getElementById("tagKohlenhydrate").innerHTML = tagKohlenhydrate
			.toFixed(2)
			+ " g"
	document.getElementById("tagZucker").innerHTML = tagZucker.toFixed(2)
			+ " g"
	document.getElementById("tagProteine").innerHTML = tagProteine.toFixed(2)
			+ " g"
	document.getElementById("tagVitamine").innerHTML = tagVitamine.toFixed(2)
			+ " g"
	document.getElementById("tagSalz").innerHTML = tagSalz.toFixed(2) + " g"
}

function redo2() {
	document.getElementById("anzeigeErgebnis").style.display = "block";
	document.getElementById("auswahlGerichte").style.display = "none";

	/*
	 * alert("Das kannst du dir nicht leisten Speckbeppo! Du hast nur noch " +
	 * sumBudget.toFixed(2) + " Euro.");
	 */
}

function ruhe() {
	alert("RAINER, RUHE!");
}
