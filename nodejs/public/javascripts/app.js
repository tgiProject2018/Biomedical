var oTable;

$(document).ready(function(){
    $(".headerBio a").on('click', function() {
        $('#listeClient').fadeIn();
    });

    $(".connexionBtn").on('click', function() {
        login();
    });
});

function login () {
    $('#mask').fadeOut();
    $('#login').fadeOut();
    $('#listeClient').fadeIn();

    oTable = $('#table_Clients').DataTable({
        "lengthChange": false,
        "pageLength": 17,
        "scrollY": "630px",
    }); 

    $(".searchbox").on("keyup search input paste cut", function() {
        oTable.search(this.value).draw();
    }); 

    $('#table_Clients tbody').on('click', 'tr', function () {
        $("#infoClient").show();
        $("#listeClient").fadeOut("slow");
    } );
}