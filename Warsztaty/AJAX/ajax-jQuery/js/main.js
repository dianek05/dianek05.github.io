$(function(){
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', 
        
        function (data) {
            console.log(data);
            }
        $(".display").append('<p>'+ waszePobraneDane + "</p>");
        
        );
    });
});