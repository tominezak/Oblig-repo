
let billettliste = [];
function kjopBillett() {
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;

    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;


    const billett = {
        film,
        antall,
        fornavn,
        etternavn,
        telefonnr,
        epost
    };

    billettliste.push(billett); //legger til billetten i arrayet


    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    for (let b of billettliste){
        ut+="<tr>";
        ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
        ut+="</tr>";
    }
    document.getElementById("output").innerHTML=ut;

   document.getElementById("film").value="";
   document.getElementById("antall").value="";
   document.getElementById("fornavn").value="";
   document.getElementById("etternavn").value="";
   document.getElementById("telefonnr").value="";
   document.getElementById("epost").value="";
    //blanker ut inputboksene
}

function slettBilletter() {
    billettliste = [];
    document.getElementById("output").innerHTML="";
}