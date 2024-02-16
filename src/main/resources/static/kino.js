
let billettliste = []; //Oppretter arrayet

function kjopBillett() {
    if (inputValidering()) { //kjører funksjonen dersom valideringstesten bestås

        //Henter input-verdiene fra bruker
        let film = document.getElementById("film").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        //oppretter et objekt med alle attributtene
        const billett = {
            film,
            antall,
            fornavn,
            etternavn,
            telefonnr,
            epost
        };

        //legger til objektet i arrayet
        billettliste.push(billett); //legger til billetten i arrayet

        //Skriver ut billettinformasjonen ved bruk av table-tagen og en for-løkke
        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let b of billettliste) {
            ut += "<tr>";
            ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>";
            ut += "</tr>";
        }
        //Printer ut informasjon om billetten under Alle billetter
        document.getElementById("output").innerHTML = ut;

        //blanker ut inputboksene
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }
}

    function slettBilletter() {
        //Setter arrayet tomt dersom man trykker på Slett billetter
        billettliste = [];
        document.getElementById("output").innerHTML = "";
}

    function inputValidering() {
        //Henter inn input-verdiene fra bruker
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        //Setter inputboksen tom dersom det skrives inn feil input og feilmeldingen forsvinner dersom det kjøres på nytt
        document.getElementById("feilAntall").innerHTML = "";
        document.getElementById("feilFornavn").innerHTML = "";
        document.getElementById("feilEtternavn").innerHTML = "";
        document.getElementById("feilTelefonnr").innerHTML = "";
        document.getElementById("feilEpost").innerHTML = "";

        //Tester om antall billetter mindre eller lik nul og om det ikke er et tall. Skriver ut feilmelding.
        if (antall<=0 || isNaN(Number(antall))) {
            document.getElementById("feilAntall").innerHTML = "Ugyldig antall billetter";
            return false
        }
        //Tester om inputboksen for fornavn er tom. Skriver ut feilmelding.
        if (fornavn === "") {
            document.getElementById("feilFornavn").innerHTML = "Skriv inn et fornavn";
            return false;
        }
        //Tester om inputboksen for etternavn er tom. Skriver ut feilmelding.
        if (etternavn === "") {
            document.getElementById("feilEtternavn").innerHTML = "Skriv inn et etternavn";
            return false;
        }
        //Tester om inputboksen for telefonnr er tom, om telefonnummeret ikke er et tall eller om det ikke tilsvarer 8 siffre. Skriver ut feilmelding.
        if (telefonnr === "" || isNaN(Number(telefonnr)) || telefonnr.length !== 8) {
            document.getElementById("feilTelefonnr").innerHTML = "Skriv inn et telefonnr på åtte siffer";
            return false;
        }

        //Tester om inputboksen for email er tom eller om det ikke består av korrekte tegn. Skriver ut feilmelding.
        let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (epost === "" || !emailReg.test(epost)) {
            document.getElementById("feilEpost").innerHTML = "Skriv inn en gyldig epost";
            return false;
        }

        return true;
    }

