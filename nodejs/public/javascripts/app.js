var oTable;
var userTable;
var page = 0;
$(document).ready(function(){
    $(".headerBio a").on('click', function() {
        $('#listeClient').fadeIn();
        page = 1;
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
    
    window.onresize = function(){
        if(page==1) oTable.draw();
        else if (page == 2) userTable.draw();
    }
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
    
    var lastID = oTable.rows().count(); 
    oTable.row.add( 
        [ 
         lastID,$("#nomClient").val(), 
         $("#prenomClient").val(), 
         $("#dateDeNaissance").val() 
        ]); 
    oTable.draw(); 
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

    //Inserer la modification dans la page
    $('#lblPrenom').html($('#modifierPrenomClient').val());
    $('#lblNomDeFamille').html($('#modifierNomClient').val());
    $('#lblDateDeNaissance').html($('#modifierDateDeNaissance').val());

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
    
    page = 1;
    
    $(".searchbox").on("keyup search input paste cut", function() {
        oTable.search(this.value).draw();
    }); 

    $('#table_Clients tbody').on('click', 'tr', function () {
        $("#infoClient").show();
        $("#listeClient").fadeOut("slow");
        userTable = $('#table_infoClient').DataTable({
            "lengthChange": false,
            "pageLength": 17,
            "scrollY": "630px",
        });
        
        page = 2;
        
    } );
}