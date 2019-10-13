// definicja funkcji ajax
function ajax(method, url) {
    // tworzenie nowej instancji 
    let httpReq = new XMLHttpRequest();
    // otwarcie połączenia
    httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
    //  wykonuje sie za kazdym razem kiedy zmienia sie readyState

    // 3. wywołanie pętli sprawdzającej zmiane
    httpReq.onreadystatechange = function () {

        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    // obsługa danych
    httpReq.onsuccess = function (response) {
        // tworzę zmienna żeby sparsować response
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
    }
    httpReq.send();
}

// wywołanie funkcji z parametrem
ajax("get", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");