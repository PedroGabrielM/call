/******************************************
    File Name: custom.js
    Template Name: auricle
/*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==**/

$("body").prepend('<div id="preloader"><div class="spinner-sm spinner-sm-1" id="status"> </div></div>');
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

/**== mega menu ==**/

$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 991) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").on('click', function() {
        if ($(window).width() <= 991) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").on('click', function(e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
});
$(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});

/**== map ==**/

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 40.645037,
            lng: -73.880224
        },
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#fefefe'
                }]
            },
            {
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f5f5f5'
                }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bdbdbd'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{
                    color: '#eeeeee'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#757575'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#eee'
                }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#3d3523'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#eee'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#616161'
                }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9e9e9e'
                }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{
                    color: '#e5e5e5'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{
                    color: '#000'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#30CFD0'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#fff'
                }]
            }
        ]
    });

    var image = 'images/layout_img/map_icon.png';
    var beachMarker = new google.maps.Marker({
        position: {
            lat: 40.693934,
            lng: -73.920395
        },
        map: map,
        icon: image
    });
}

/** scroll js **/




/** portfolio tab **/

$(document).ready(function() {

    $(".filter-button").on('click', function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

/** search bar **/

function myFunction() {
    var x = document.getElementById("searchbar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/** progress bar **/

$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

/** side bar **/

function openNav1() {
    document.getElementById("side_bar").style.width = "250px";
}

function closeNav1() {
    document.getElementById("side_bar").style.width = "0";
}
/** owl half slider **/



/** ecommer side bar **/



function openNav() {
    document.getElementById("ecomm_menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("ecomm_menu").style.width = "0";
}

function CalculaDistancia() {
    $('#litResultado').html('Aguarde...');
    // Instancia o DistanceMatrixService.
    var service = new google.maps.DistanceMatrixService();
    // Executa o DistanceMatrixService.
    service.getDistanceMatrix({
        origins: [$("#txtOrigem").val()], // Origem
        destinations: [$("#txtDestino").val()], // Destino
        travelMode: google.maps.TravelMode.DRIVING, // Modo (DRIVING | WALKING | BICYCLING)
        unitSystem: google.maps.UnitSystem.METRIC // Sistema de medida (METRIC | IMPERIAL)
    }, callback); // Vai chamar o callback
  }

  // Tratar o retorno do DistanceMatrixService
  function callback(response, status) {
    // Verificar o status.
    if (status != google.maps.DistanceMatrixStatus.OK) { // Se o status não for "OK".
        $("#litResultado").html(status);
    } else { // Se o status for "OK".
        $("#litResultado").html("&nbsp;"); // Remove o "aguarde".

        // Popula os campos.
        $("#txtOrigemResultado").val(response.originAddresses);
        $("#txtDestinoResultado").val(response.destinationAddresses);
        $("#txtDistancia").val(response.rows[0].elements[0].distance.text);
        var tempo = response.rows[0].elements[0].duration.text;
        tempo = tempo.replace("day", "dia").replace("hour", "hora").replace("min", "minuto");
        $("#txtTempo").val(tempo);

        $("#map").attr("src", "https://maps.google.com/maps?saddr=" + response.originAddresses + "&daddr=" + response.destinationAddresses + "&output=embed&key=API_KEY_AQUI");
    }
  }

