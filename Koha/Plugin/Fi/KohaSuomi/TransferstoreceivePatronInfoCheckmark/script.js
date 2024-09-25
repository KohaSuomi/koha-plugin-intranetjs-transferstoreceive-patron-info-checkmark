/// ALKU ///
// Muuttaa vastaanotettavien kuljetusten varaustietokentän (transferstoreceive) muotoon kyllä/ei
$(document).ready(function () {
    if (window.location.pathname == '/cgi-bin/koha/circ/transferstoreceive.pl') {

        $("th:contains('On hold for'), th:contains('Reserverad för')").append(" patron");

        $("td > p").filter(function () {
            // Matches exact string   
            return $(this).text() === "None" || $(this).text() === "Ei mitään";
        }).empty();

        $("td:has(a[href*='/cgi-bin/koha/members/moremember.pl?borrowernumber='])").addClass('text-center').empty().append("<span style='font-size:150%'>&check;</span>");
    }
});
///LOPPU///
