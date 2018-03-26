$(document).ready(function(){
    //var table = $('#table_Clients').DataTable();

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

    var oTable = $('#table_Clients').dataTable({
        "lengthChange": false,
        "pageLength": 17,
        "scrollY": "630px",
    });

    $('#table_Clients tbody').on('click', 'tr', function () {
        //alert($(this).data('id'));

        //requetes des rapports du clients
        //Date prise du test, Pression systolique,Pression Diasystolique, Pouls cardiaque.
        //afficher l'information du client selectionner --fadeOut et show()--
        $("#infoClient").show();
        $("#listeClient").fadeOut("slow");
        
        //populer le tableau des information du clients
    } );

    $(".searchbox").on("keyup search input paste cut", function() {
        oTable.search(this.value).draw();
    });  
}