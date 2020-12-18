/*ingredientSearch*/
var search = "fried rice"


var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e"


fetch(apiUrl).then (function(response){
    if (response.ok) {
           
        response.json().then(function(data) {
            console.log(data)

        
        });

     } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect");
    }); 



    
