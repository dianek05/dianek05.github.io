$(function() {
    'use strict'
});

// efekt hide i show
$('p').hide(3000).show(3000);

// efekt fade in i fade out
$('h1').fadeOut(300).fadeIn(3000);

// efekt slide in i slide out
$('h2').slideUp(3000).slideOut(3000);

// efekt animacji z funkcja zwortna animacji
$('h3').animate({'font-size':"3em", "margin-left":"100px"}, 2000);