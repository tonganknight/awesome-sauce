
//Radio button logic 






function foodsearch(){
    /*ingredientSearch*/

    var searchbar = document.getElementById("searchbar")

    var search = searchbar.value;

    search = search.trim();
        

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
                var recipe1ingr =data.hits[0].recipe.ingredientLines;
                

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
                var group = document.getElementById("dashboard");

                var flex1 = document.createElement("div");
                flex1.setAttribute("class", "flex");
                group.appendChild(flex1);

                //write first thumb
                var creatediv = document.createElement("div");
                creatediv.setAttribute("Id","thumb1");
                creatediv.setAttribute("class", "results");
                creatediv.style.backgroundImage = "url(" + recipe1img +")";
                creatediv.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe1 +"</a>";
                flex1.appendChild(creatediv);

                //write first recipe 
                var ingrlist1 = document.createElement("div");
                ingrlist1.setAttribute("id", "ingrlist1");
                ingrlist1.setAttribute("class", "ingr")
                flex1.appendChild(ingrlist1);

                //write ingr list 
                for( i=0; i < recipe1ingr.length; i++){
                    var ingr1 = document.createElement("P");
                    ingr1.textContent = recipe1ingr[i];
                    ingrlist1.appendChild(ingr1);

                }

                //make recipe invisible until hover
                document.getElementById("ingrlist1").style.visibility ="hidden"

                //recipe event listeners
                document.getElementById("thumb1").addEventListener("mouseover", function(){
                document.getElementById("ingrlist1").style.visibility = "visible";
                });

                document.getElementById("thumb1").addEventListener("mouseout", function(){
                document.getElementById("ingrlist1").style.visibility = "hidden";
                });

               /* //write Second 
                var createLi = document.createElement("li");
                createLi.setAttribute("Id",recipe2);
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe2img +")";
                createLi.textContent = recipe2;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe2 +"</a>";
                group.appendChild(createLi);

                //write Third
                var createLi = document.createElement("li");
                createLi.setAttribute("Id",recipe3);
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe3img +")";
                createLi.textContent = recipe3;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe3 +"</a>";
                group.appendChild(createLi);
                
                //write Fourth
                var createLi = document.createElement("li");
                createLi.setAttribute("Id",recipe4);
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe4img +")";
                createLi.textContent = recipe4
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe4 +"</a>";
                group.appendChild(createLi);

                //write Fifth
                var createLi = document.createElement("li");
                createLi.setAttribute("Id",recipe5);
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe5img +")";
                createLi.textContent = recipe5;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe5 +"</a>";
                group.appendChild(createLi);
                //(we need to produce our HTML and CSS before we tackle this)
                    */

            //data storage for Fav list 
            

        
        });

     } else {
        alert("Error: " + response.statusText);
        }
    })
    .catch(function(error) {
        alert("Unable to connect");
    }); 

}

//Event Listeners 

    //search button  listener 
        document.getElementById("search").addEventListener("click", function(){

            foodsearch();

        });

        

//drop logic 







