var __adobewebfontsappname__="dreamweaver";

// Definition der verfügbaren Gerichte. Kann beliebig erweitert werden.
//Format: (GerichtName, Sättigung, Kalorien, Fett, Kohlenhydrate, Zucker, Proteine, Vitamine, Salz, Kosten)
var Ofenkäse = new Gericht("Ofenkäse", 7, 667, 60, 1, 1, 32.4, 0, 3.24, 3.50);
var Dosenravioli = new Gericht("Dosenravioli", 10, 688, 23, 90, 12.8, 27.2, 0, 8, 1.95);
var Kinderschokolade = new Gericht("Kinderschokolade", 2, 566, 35, 53, 53, 8.7, 0, 0, 1.29);
var CordonBleu = new Gericht("CordonBleu", 7, 1055, 55, 55, 5, 85, 0, 6, 3.10);
var Kroketten = new Gericht("Kroketten", 7, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Laugenbrezeln = new Gericht("Laugenbrezeln", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var FertigHotdogs = new Gericht("FertigHotdogs", 4, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var FertigBurger = new Gericht("FertigBurger", 6, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Buttermilch = new Gericht("Buttermilch", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Würfelzucker = new Gericht("Würfelzucker", 2, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Jägertopf = new Gericht("Jägertopf", 5, 331, 29, 0.5, 17, 0, 1.7, 0, 4.29);
var Monster = new Gericht("Monster", 2, 331, 0, 60, 60, 0, 0.075, 0, 4.29);

// Definiton variabler Variablen (lel)
var Statur = 0;
var faktor = 0;
var gewicht = 0;
var sumBudget = 15.10;

// Definition zugeführter Nährwerte der einzelnen Gerichte
var GerichtName;
var sumSättigung = 0;
var sumKalorien = 0;
var sumFett = 0;
var sumKohlenhydrate = 0;
var sumZucker = 0;
var sumProteine = 0;
var sumSalz = 0;
var sumVitamine = 0;
var sumKosten = 0;

// Definition des Tagesbedarfs
var tagSättigung = 100;
var tagKalorien = 2000;
var tagFett = 92;
var tagKohlenhydrate = 290;
var tagZucker = 62;
var tagProteine = 55;
var tagVitamine = 1;
var tagSalz = 5;

// Definition der Soundeffekte
var audioStatur = new Audio('Audio/stohn.mp3');
audioStatur.play();

var audioKasse = new Audio('Audio/ReweKasseBeep.mp3');
audioKasse.play();

var audioErgebnis = new Audio('Audio/VerdammteAxt.mp3');
audioErgebnis.play();

var audioNeustart = new Audio('Audio/niemandunterkriegen.mp3');
audioNeustart.play();

// Timeout-Funktion, die automatisch nach Aufruf/Reload der Seite die Gerichtsbutton deaktiviert (wusste nicht wie man das anders lösen soll. Evtl per Eventhandler)
setTimeout(function disableButtonsGerichte(){
	document.getElementById("GerichtOfen").disabled = true;
	document.getElementById("GerichtDosenravioli").disabled = true;
	document.getElementById("GerichtKinderschokolade").disabled = true;
	document.getElementById("GerichtCordonBleu").disabled = true;
	document.getElementById("GerichtKroketten").disabled = true;
	document.getElementById("GerichtLaugenbrezeln").disabled = true;
	document.getElementById("GerichtFertighotdogs").disabled = true;
	document.getElementById("GerichtFertigBurger").disabled = true;
	document.getElementById("GerichtButtermilch").disabled = true;
	document.getElementById("GerichtWürfelzucker").disabled = true;
	document.getElementById("GerichtJägertopf").disabled = true;
	document.getElementById("GerichtMonster").disabled = true;
	}, 1);

// Berechnung des benötigten Tagesbedarfs basierend auf der Statur bzw dem Gewicht
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
	
	audioStatur.play();
	document.getElementById("sumBudget").innerHTML = sumBudget.toFixed(2);
	
	// Aufruf der Funktionen um Statur-Buttons zu deaktivieren und Gerichts-Buttons zu aktiveren
	disableButtonsStatur(Statur);
	enableButtonsGerichte();
}

// Deaktivieren der Statur-Buttons und higlighten der gewählten Statur
function disableButtonsStatur(Statur) {

	document.getElementById("buttonStaturAktiv1").disabled = true;
	document.getElementById("buttonStaturAktiv2").disabled = true;
	document.getElementById("buttonStaturAktiv3").disabled = true;
	
	if (Statur == 1){
		document.getElementById("buttonStaturAktiv1").style.backgroundColor = "#DEC561";
		gewicht = 150;
	} 
	else {
		if (Statur == 1.2) {
			document.getElementById("buttonStaturAktiv2").style.backgroundColor = "#DEC561";
			gewicht = 185;
		}
		else {
			document.getElementById("buttonStaturAktiv3").style.backgroundColor = "#DEC561";
			gewicht = 210;
		}
	}
}

// Aktiveren der Gerichts-Buttons
function enableButtonsGerichte() {
	document.getElementById("GerichtOfen").disabled = false;
	document.getElementById("GerichtDosenravioli").disabled = false;
	document.getElementById("GerichtKinderschokolade").disabled = false;
	document.getElementById("GerichtCordonBleu").disabled = false;
	document.getElementById("GerichtKroketten").disabled = false;
	document.getElementById("GerichtLaugenbrezeln").disabled = false;
	document.getElementById("GerichtFertighotdogs").disabled = false;
	document.getElementById("GerichtFertigBurger").disabled = false;
	document.getElementById("GerichtButtermilch").disabled = false;
	document.getElementById("GerichtWürfelzucker").disabled = false;
	document.getElementById("GerichtJägertopf").disabled = false;
	document.getElementById("GerichtMonster").disabled = false;
}

// Funktion die aufgerufen wird, um ein neues Gericht als Objekt zu erzeigen
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

// Funktion die aufgerufen wird, wenn der User eines der Gerichte auswählt. Anschließend werden die aktuellen zugeführten Nährwerte mit dem neuen Gericht addiert
// Innerhalb der Funktion werden 2 weitere Funktionen aufgerufen (siehe unten)
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
		
		audioKasse.play();
		
		// Funktion die die aktualisierten Nährwerte auf die HTML-Seite überträgt
		redo();

	} else {

		
		redo2();

	}
}

// Funktion die die aktualisierten Nährwerte auf die HTML-Seite überträgt
function redo() {
	document.getElementById("sumBudget").innerHTML = sumBudget.toFixed(2)

	document.getElementById("tableHeaderFaktor").innerHTML = "Tagesbedarf (x" + faktor + ")"
	document.getElementById("faktorErgebnis").innerHTML = "Kampfgewicht " + gewicht + " Kg"

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

// Funktion die aufgerufen wird, sobald ein Gericht gekauft werden soll, welches das Budget übersteigt.
// Blendet anschließend die Sektion der Gerichte aus und blendet dafür die Sektion der Ergebnisse ein
function redo2() {
	
	audioErgebnis.play();
	
	//Statur- und Gerichtetablle ausblenden
	document.getElementById("anzeigeErgebnis").style.display = "block";
	document.getElementById("auswahlGerichte").style.display = "none";
	
	if (sumSättigung >= tagSättigung) {
		document.getElementById("sumSättigung").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumSättigung").style.backgroundColor = "#ff0000";
	}
	
	if (sumKalorien >= tagKalorien) {
		document.getElementById("sumKalorien").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumKalorien").style.backgroundColor = "#ff0000";
	}
	
	if (sumFett >= tagFett) {
		document.getElementById("sumFett").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumFett").style.backgroundColor = "#ff0000";
	}
	
	if (sumKohlenhydrate >= tagKohlenhydrate) {
		document.getElementById("sumKohlenhydrate").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumKohlenhydrate").style.backgroundColor = "#ff0000";
	}
	
	if (sumZucker >= tagZucker) {
		document.getElementById("sumZucker").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumZucker").style.backgroundColor = "#ff0000";
	}
	
	if (sumProteine >= tagProteine) {
		document.getElementById("sumProteine").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumProteine").style.backgroundColor = "#ff0000";
	}
	
	if (sumSalz >= tagSalz) {
		document.getElementById("sumSalz").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumSalz").style.backgroundColor = "#ff0000";
	}
	
	if (sumVitamine >= tagVitamine) {
		document.getElementById("sumVitamine").style.backgroundColor = "#00ff00";
		}
	else {
		document.getElementById("sumVitamine").style.backgroundColor = "#ff0000";
	}
}

// Funktion die per Klick auf den Button die Seite neuläd
function reloadPage() {
	//audioNeustart.play();
	location.reload();
}

