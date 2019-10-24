$(function(){
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', 
        
        function (daneJson) {

        console.log(daneJson);
        
        $(".display").append(`<p>ID: ${daneJson.id} <br>Name: ${daneJson.name} <br>Username: ${daneJson.username} <br>Email: ${daneJson.email}</p>`);
        }
        
        );
    });
});