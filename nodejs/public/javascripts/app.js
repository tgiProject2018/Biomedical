var oTable;

$(document).ready(function(){
    $(".headerBio a").on('click', function() {
        $('#listeClient').fadeIn();
    });

    $(".connexionBtn").on('click', function() {
        login();
    });

    $(".creerUtilisateurBtn").on('click', function() {
        inserer();
    });

    $(".insertBtn").on('click', function() {
        showInsertModal();
    });
    
    $(".annulerInsererBtn").on('click', function() {
        hideInsertModal();
    });

    $(".modifierUtilisateurBtn").on('click', function() {
        modifier();
    });

    $(".mofidierBtn").on('click', function() {
        showMofifierModal();
    });
    
    $(".annulerModifierBtn").on('click', function() {
        hideModifierModal();
    });
    
});

function showInsertModal(){
    $('#mask').fadeIn();
    $('#insertion').fadeIn();
}
function hideInsertModal(){
    $('#mask').fadeOut();
    $('#insertion').fadeOut();
}
function inserer(){
    $('#mask').fadeOut();
    $('#insertion').fadeOut();
    $('#listeClient').fadeIn();
    //Inserer dans la bdd.
}

function showMofifierModal(){
    $('#mask').fadeIn();
    $('#modifier').fadeIn();
}
function hideModifierModal(){
    $('#mask').fadeOut();
    $('#modifier').fadeOut();
}
function modifier(){
    $('#mask').fadeOut();
    $('#modifier').fadeOut();
    $('#infoClient').fadeIn();
    //Inserer la modification dans la bdd.
}

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