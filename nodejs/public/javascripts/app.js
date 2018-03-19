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
}

$(document).ready(function(){

    //$('#table_Client').DataTable();

});