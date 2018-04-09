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
    
    $(".infoTable").on('click', function() {
        //Slideup l'autre contenu
        $("#graphiqueClient").slideUp();
        $("#rapportClient").slideUp();
        $("#table_infoClient_wrapper").slideDown();
        //changer a selected
        $(".graphique").removeClass("selected");
        $(".infoTable").addClass("selected");
        $(".rapport").removeClass("selected");
    });
    $(".graphique").on('click', function() {
        //Slideup l'autre contenu
        $("#table_infoClient_wrapper").slideUp();
        $("#rapportClient").slideUp();
        $("#graphiqueClient").slideDown();
        //changer a selected
        $(".graphique").addClass("selected");
        $(".infoTable").removeClass("selected");
        $(".rapport").removeClass("selected");
    });
    $(".rapport").on('click', function() {
        //Slideup l'autre contenu
        $("#table_infoClient_wrapper").slideUp();
        $("#graphiqueClient").slideUp();
        $("#rapportClient").slideDown();
        
        //changer a selected
        $(".graphique").removeClass("selected");
        $(".infoTable").removeClass("selected");
        $(".rapport").addClass("selected");
        

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
        
    } );
}

function Graph() {

    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Units Sold VS Profit"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Units Sold",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            includeZero: false
        },
        axisY2: {
            title: "Profit in USD",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            includeZero: false
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            name: "Units Sold",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 120 },
                { x: new Date(2016, 1, 1), y: 135 },
                { x: new Date(2016, 2, 1), y: 144 },
                { x: new Date(2016, 3, 1),  y: 103 },
                { x: new Date(2016, 4, 1),  y: 93 },
                { x: new Date(2016, 5, 1),  y: 129 },
                { x: new Date(2016, 6, 1), y: 143 },
                { x: new Date(2016, 7, 1), y: 156 },
                { x: new Date(2016, 8, 1),  y: 122 },
                { x: new Date(2016, 9, 1),  y: 106 },
                { x: new Date(2016, 10, 1),  y: 137 },
                { x: new Date(2016, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Profit",
            axisYType: "secondary",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,##0.#",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 19034.5 },
                { x: new Date(2016, 1, 1), y: 20015 },
                { x: new Date(2016, 2, 1), y: 27342 },
                { x: new Date(2016, 3, 1),  y: 20088 },
                { x: new Date(2016, 4, 1),  y: 20234 },
                { x: new Date(2016, 5, 1),  y: 29034 },
                { x: new Date(2016, 6, 1), y: 30487 },
                { x: new Date(2016, 7, 1), y: 32523 },
                { x: new Date(2016, 8, 1),  y: 20234 },
                { x: new Date(2016, 9, 1),  y: 27234 },
                { x: new Date(2016, 10, 1),  y: 33548 },
                { x: new Date(2016, 11, 1), y: 32534 }
            ]
        }]
    };
    $("#graphiqueClient").CanvasJSChart(options);
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
}