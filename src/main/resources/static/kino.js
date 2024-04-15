function kjopBillett() {
    if (inputValidering()) { //kjører funksjonen dersom valideringstesten bestås
        const billett = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };

        $.post("/lagreBillett", billett, function(data) {
            hentBilletter();
        });

        //blanker ut inputboksene
        $("#film, #antall, #fornavn, #etternavn, #telefonnr, #epost").val("");
    }
}

    function hentBilletter() {
        $.get("/hentBilletter", function (billett) {
           formaterData(billett);
        });
    }

    function formaterData(billett){
          let ut = "<table class='table table-striped'><tr>" +  //Gjør at annenhver rad får annen bakgrunnsfarge
              "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
              "</tr>";
           for (let b of billett) {
               ut += "<tr>";
               ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>";
               ut += "</tr>";
           }
           ut+= "</table>";
           $("#output").html(ut);
    }

    function slettBilletter() {
        //Setter arrayet tomt dersom man trykker på Slett billetter
        $.get("/slettBilletter", function () {
           hentBilletter();
        })
}

function slettEn(id){
    let url = "/slettEn?id="+id;
    $.get(url, function(){
        hentBilletter();
    })
}

    function inputValidering() {
        //Henter inn input-verdiene fra bruker
          let antall=   $("#antall").val()
          let fornavn = $("#fornavn").val()
          let etternavn=$("#etternavn").val()
          let telefonnr = $("#telefonnr").val()
          let epost = $("#epost").val();

        //Setter inputboksen tom dersom det skrives inn feil input og feilmeldingen forsvinner dersom det kjøres på nytt
        $("#feilFornavn").html("");
        $("#feilEtternavn").html("");
        $("#feilTelefonnr").html("");
        $("#feilEpost").html("");

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
        let telefonnrReg = /^\d{7,15}$/;
        if (telefonnr === "" || !telefonnrReg.test(telefonnr)) {
            document.getElementById("feilTelefonnr").innerHTML = "Skriv inn et gyldig telefonnr";
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

