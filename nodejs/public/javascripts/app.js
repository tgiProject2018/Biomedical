function login () {
    $('#mask').fadeOut();
    $('#login').fadeOut();
    $('#listeClient').fadeIn();
    oTable = $('#table_Clients').dataTable({
        retrieve:true, //hack
        "lengthChange": false,
        "pageLength": 17,
        "scrollY": "630px",
    });

    $(".searchbox").on("keyup search input paste cut", function() {
        oTable.search(this.value).draw();
    });  
}

function retourListe(){
    
    
    
}
$(document).ready(function(){
    
    var table = $('#table_Clients').DataTable();
     
    $('#table_Clients tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        //alert( 'You clicked on ' + data[0] + '\'s row' );
        //requetes des rapports du clients
        //Date prise du test, Pression systolique,Pression Diasystolique, Pouls cardiaque.
        //afficher l'information du client selectionner --fadeOut et show()--
        $("#listeClient").fadeOut("slow");
        $("#infoClient").fadeIn("slow");  
        //populer le tableau des information du clients
    } );
    

});