$(function () {  // kjøres når dokumentet er ferdig lastet
    hentBilletter();
});

function hentBilletter() {
    $.get("/hentBilletter", function (billett) {
        formaterData(billett);
    });
}

function formaterData(billett) {
    let ut = "<table class='table table-striped'>" +  //Gjør at annenhver rad får annen bakgrunnsfarge
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</th><th></th><th></th>";
    for (let b of billett) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>";
        ut += "<td> <a class='btn btn-primary' href='endre.html?id=" + b.id + "'>Endre</a></td>" +
            "<td> <button class='btn btn-danger' onclick='slettEnBillett(" + b.id + ")'>Slett</button></td>";
        ut += "</tr>";
    }
    ut += "</table>";
    $("#output").html(ut);
}

function slettEnBillett(id) {
    const url = "/slettEnBillett?id=" + id;
    $.get(url, function () {
        window.location.href = 'index.html';
    });
};

function slettBilletter() {
    //Setter arrayet tomt dersom man trykker på Slett billetter
    $.get("/slettBilletter", function () {
        hentBilletter();
    });
}



