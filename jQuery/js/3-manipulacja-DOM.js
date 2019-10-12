jQuery( document).ready( function(){
    'use strict';
})

// pobieranie tekstu
let tekstyPierwszegoParagrafu = $('#paragraf').text();
console.log(tekstyPierwszegoParagrafu);

// dodawania tekstu
$('.paragraf').text('Ala ma kota');

// dodawanie HTML
$('.paragraf').html('To jest <strong>paragraf</strong> z dodanym <br>HTML');

// Dodawanie treści na końcu selektora
$(".paragrafnext").append('Treść na końcu selektora');

// Dodawanie treści za selektorem
$(".paragrafnext").after('Treść na końcu selektora');

// Usuwanie elementu i jego zawartości
$('strong').remove();

// usuwanie tylko jego zawartości
$('.paragraf').empty();

// Dodanie CSS
$('.paragrafnext').css("color", "blue");
$(".paragrafnext").css({'font-size':'3em', 'color':"blue"}
);

$('input#imie').val('Krystian');


// dodanie klasy
$('h1').addClass('blue');

// dodanie atrybutu
$('h1').attr("imie", "Marcin");
