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

    $(".sortirBtn").on('click', function() {
        sortir();
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
    
    $(".infoTable").on('click', function() {
        showTab($(this));
    });
    $(".graphique").on('click', function() {
        showTab($(this));
    });
    $(".rapport").on('click', function() {
        showTab($(this));
    });

    window.onresize = function(){
        if(page==1) oTable.draw();
        else if (page == 2) userTable.draw();
    }
});

function showTab(elem) {
    $(".graphique").removeClass("selected");
    $(".infoTable").removeClass("selected");
    $(".rapport").removeClass("selected");

    elem.addClass("selected");

    if(elem.attr("class").includes("rapport")) {
        $("#table_infoClient_wrapper").slideUp();
        $("#graphiqueClient").slideUp();
        $("#rapportClient").slideDown();
    }
    else if (elem.attr("class").includes("graphique")) {
        $("#table_infoClient_wrapper").slideUp();
        $("#rapportClient").slideUp();
        $("#graphiqueClient").slideDown();
    }
    else if (elem.attr("class").includes("infoTable")) {
        
        $("#graphiqueClient").slideUp();
        $("#rapportClient").slideUp();
        $("#table_infoClient_wrapper").slideDown();
        userTable.draw();
    }
}

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
         lastID+1,$("#nomClient").val(), 
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
            "retrieve":true,                                        
            "lengthChange": false,
            "pageLength": 17,
            "scrollY": "630px",
        });
        
        page = 2;

        $('#graphiqueClient').html("<div id=\"kagiChart\"></div>");
        Graph();
    });
}

function sortir(){
    window.location.replace("http://google.com");
}

(function (global) {

	if(typeof (global) === "undefined")
	{
		throw new Error("window is undefined");
	}

    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";

		// making sure we have the fruit available for juice....
		// 50 milliseconds for just once do not cost much (^__^)
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };
	
	// Earlier we had setInerval here....
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };

    global.onload = function () {
        
		noBackPlease();

		// disables backspace on page except on input fields and textarea..
		document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
                e.preventDefault();
            }
            // stopping event bubbling up the DOM tree..
            e.stopPropagation();
        };
		
    };

})(window);

function Graph() {
    var freqData=[
        {State:'AL',freq:{low:4786, mid:1319, high:249}}
        ,{State:'AZ',freq:{low:1101, mid:412, high:674}}
        ,{State:'CT',freq:{low:932, mid:2149, high:418}}
        ,{State:'DE',freq:{low:832, mid:1152, high:1862}}
        ,{State:'FL',freq:{low:4481, mid:3304, high:948}}
        ,{State:'GA',freq:{low:1619, mid:167, high:1063}}
        ,{State:'IA',freq:{low:1819, mid:247, high:1203}}
        ,{State:'IL',freq:{low:4498, mid:3852, high:942}}
        ,{State:'IN',freq:{low:797, mid:1849, high:1534}}
        ,{State:'KS',freq:{low:162, mid:379, high:471}}
        ];
        
        dashboard('#kagiChart',freqData, 400, 500);
}