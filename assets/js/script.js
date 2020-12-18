

//our search function 
    /*ingredientSearch*/

        var search = "tomato"

        var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e"


        fetch(apiUrl).then (function(response){
            if (response.ok) {
                
                response.json().then(function(data) {
                    console.log(data)

                //object data 

                //First Recipe

                    //name for first recipe
                var recipe1 = data.hits[0].recipe.label;
                

                    //img for recipe
                var recipe1img = data.hits[0].recipe.image;
            

                    //link for recipe 
                var recipe1link = data.hits[0].recipe.url;
                


                    //list of ingredients
                var recipe1ingr =data.hits[1].recipe.ingredientLines;
                

                //Second Recipe

                    //name for second recipe
                    var recipe2 = data.hits[1].recipe.label;
                    
            
                        //img for recipe
                    var recipe2img = data.hits[1].recipe.image;
                    
            
                        //link for recipe 
                    var recipe2link = data.hits[1].recipe.url;
                
            
            
                        //list of ingredients
                    var recipe2ingr =data.hits[1].recipe.ingredientLines;
                    

                    //Third Recipe

                    //name for Third recipe
                    var recipe3 = data.hits[2].recipe.label;
                    
            
                        //img for recipe
                    var recipe3img = data.hits[2].recipe.image;
                    
            
                        //link for recipe 
                    var recipe3link = data.hits[2].recipe.url;
                    
            
            
                        //list of ingredients
                    var recipe3ingr = data.hits[2].recipe.ingredientLines;
                    

                    //Fourth Recipe

                    //name for Third recipe
                    var recipe4 = data.hits[3].recipe.label;
                
            
                        //img for recipe
                    var recipe4img = data.hits[3].recipe.image;
                    
            
                        //link for recipe 
                    var recipe4link = data.hits[3].recipe.url;
                    
            
            
                        //list of ingredients
                    var recipe4ingr = data.hits[3].recipe.ingredientLines;
                    

                    //Fifth Recipe

                    //name for Fifth recipe
                    var recipe5 = data.hits[4].recipe.label;
                    
            
                        //img for recipe
                    var recipe5img = data.hits[4].recipe.image;
                    
            
                        //link for recipe 
                    var recipe5link = data.hits[4].recipe.url;
                    
            
            
                        //list of ingredients
                    var recipe5ingr = data.hits[4].recipe.ingredientLines;
            


            //write data 


                //(we need to produce our HTML and CSS before we tackle this)



            //data storage for Fav list 



        
        });

     } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect");
    }); 

//}); 

//Event Listeners 

    //search listener 
        /*document.getElementById("Ourseachbutton").addEventListener("click", function(){

        //our searchfunction()

        ]); */
    

//drop logic 







