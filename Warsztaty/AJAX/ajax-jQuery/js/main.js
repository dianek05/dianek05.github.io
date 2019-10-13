$(function(){
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', 
        
        function (daneJson) {

        console.log(daneJson);
        
        $(".display").append(`<p>ID: ${daneJson.id} <br>Name: ${daneJson.name} <br>Username: ${daneJson.username} <br>Email: ${daneJson.email}</p>`);
        }
        
        );
    });
});