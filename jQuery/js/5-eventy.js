$(function() {
    'use strict';

    function podczasKliku() {
        $(this).css("color", "orange");
    };

// pojedyncze zdarzenie na paragrafie
$('p').click(podczasKliku);

// grupa zdarzeń na nagłówku

$('h1').on({
    'click': function() {
        $(this).css('color', 'orange');
    },

    'mouseleave': function() {
        $(this).css('color', 'inherit');
    }
});



});