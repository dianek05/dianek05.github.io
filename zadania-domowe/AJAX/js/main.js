$(function(){
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', 
        
        function (daneJson) {

        console.log(daneJson);
        
        $(".display").after(
            `<p>ID: ${daneJson.imie} <br>Name: ${daneJson.nazwisko} <br>Zawod: ${daneJson.zawod} <br>Email: ${daneJson.firma}</p>`);
        });
    });
});

