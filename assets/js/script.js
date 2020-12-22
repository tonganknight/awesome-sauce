
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
                var group = document.getElementById("group-items");
                

                //write first 
                var createLi = document.createElement("li");
                createLi.setAttribute("Id", "first");
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe1img +")";
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe1 +"</a>";
                group.appendChild(createLi);

                //build ingredients list 1st item

                    var dashcontainer =document.getElementById("dash-container")
                    
                    var firstbox = document.createElement("div");
                    firstbox.setAttribute("Id", "ingr1");
                    firstbox.classList.add("column")
                    firstbox.classList.add("ingrlist")
                    dashcontainer.appendChild(firstbox);



                for(i=0; i< recipe1ingr.length; i++){

                    var createingr = document.createElement("p");
                    createingr.setAttribute("id", recipe1ingr[i]);
                    createingr.innerHTML = recipe1ingr[i];
                    firstbox.appendChild(createingr);

                }

                //hid ingredients for hover effect
                document.getElementById("ingr1").style.display = "none";

                //write Second 
                var createLi = document.createElement("li");
                createLi.setAttribute("Id","second");
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe2img +")";
                createLi.textContent = recipe2;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe2 +"</a>";
                group.appendChild(createLi);

                 //build ingredients list 2nt item

                 var dashcontainer =document.getElementById("dash-container") 
                 var secondbox = document.createElement("div");
                 secondbox.setAttribute("Id", "ingr2");
                 secondbox.classList.add("ingrlist1")
                 secondbox.classList.add("column")
                 firstbox.appendChild(secondbox);



                for(i=0; i< recipe2ingr.length; i++){

                 var createingr = document.createElement("p");
                 createingr.setAttribute("id", recipe2ingr[i]);
                 createingr.innerHTML = recipe2ingr[i];
                 secondbox.appendChild(createingr);

                }

             //hid ingredients for hover effect
             document.getElementById("ingr2").style.display = "none";




                //write Third
                var createLi = document.createElement("li");
                createLi.setAttribute("Id","third");
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe3img +")";
                createLi.textContent = recipe3;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe3 +"</a>";
                group.appendChild(createLi);

                //build ingredients list 3rd item

                var dashcontainer =document.getElementById("dash-container") 
                var thirdbox = document.createElement("div");
                thirdbox.setAttribute("Id", "ingr3");
                thirdbox.classList.add("ingrlist1")
                secondbox.appendChild(thirdbox);



               for(i=0; i< recipe3ingr.length; i++){

                var createingr = document.createElement("p");
                createingr.setAttribute("id", recipe3ingr[i]);
                createingr.innerHTML = recipe3ingr[i];
                thirdbox.appendChild(createingr);

               }

            //hid ingredients for hover effect
            document.getElementById("ingr3").style.display = "none";
                
                //write Fourth
                var createLi = document.createElement("li");
                createLi.setAttribute("Id", "fourth");
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe4img +")";
                createLi.textContent = recipe4
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe4 +"</a>";
                group.appendChild(createLi);

                //write Fifth
                var createLi = document.createElement("li");
                createLi.setAttribute("Id", "fifth");
                createLi.setAttribute("class", "results");
                createLi.style.backgroundImage = "url(" + recipe5img +")";
                createLi.textContent = recipe5;
                createLi.innerHTML = "<a target='blank' Id='link' href="+ recipe1link + ">" + recipe5 +"</a>";
                group.appendChild(createLi);
                //(we need to produce our HTML and CSS before we tackle this)



            //data storage for Fav list 
            

            //event listeners for mouse over

            //1st option 
            document.getElementById("first").addEventListener("mouseover", function(){
                document.getElementById("ingr1").style.display = "block";
            });

            /*document.getElementById("first").addEventListener("mouseout",function(){
                document.getElementById("ingr1").style.display = "none";
            }); */ //cann't display none because the other recipes are child elements to this one 

            //2nd option
            document.getElementById("second").addEventListener("mouseover", function(){
                document.getElementById("ingr2").style.display = "block";
            });

            /*document.getElementById("second").addEventListener("mouseout",function(){
                document.getElementById("ingr2").style.display = "none";
            }); */ //can't display none due to child elements

            //3rd option
            document.getElementById("third").addEventListener("mouseover", function(){
                document.getElementById("ingr3").style.display = "block";
            });

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







