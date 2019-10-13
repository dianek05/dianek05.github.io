$(function(){
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', 
        
        function (daneJson) {

        console.log(daneJson);
        
        $(".display").append("<p>" + daneJson + "</p>");
        }
        
        );
    });
});