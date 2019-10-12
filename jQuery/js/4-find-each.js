$(function(){
    'use strict';

// wybieranie elementów z kolekcji a pomocą eq
$('body').find('p').eq(1).css({'color': 'green'});

// pętla each dodająca do paragrafu klasę z kolejnym numerem
$('p').each( function(index){
    $(this).addClass('paragraf-' + index);
    console.log(jQuery(this));
});

// $('p').each(function(index))

// $(this).addClass('paragraf-' + index);

// console.log(jQuery(this));

});