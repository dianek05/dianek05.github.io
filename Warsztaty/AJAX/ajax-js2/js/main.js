function getData(event) {

    event.preventDefault();

    let button = document.getElementById("button");

    button.addEventListener("click", function (event) {
    
        fetch(('https://jsonplaceholder.typicode.com/posts/')
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
    });
    
        let userName = document.getElementById('name').value;
        let userID = dokument.getElementById('id').value;
        let userEmail = dokument.getElementById('email').value;
    
    });

}

