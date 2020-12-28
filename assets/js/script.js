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


                  //recipe event listeners for first recipe 
                    document.getElementById("thumb1").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist1").style.visibility = "visible";
                    });

                    document.getElementById("thumb1").addEventListener("mouseout", function(){
                    document.getElementById("ingrlist1").style.visibility = "hidden";
                    });

                    
                    //write second file
                    var flex2 = document.createElement("div");
                    flex2.setAttribute("class", "flex");
                    group.appendChild(flex2);
    
                    //write second thumb
                    var creatediv2 = document.createElement("div");
                    creatediv2.setAttribute("Id","thumb2");
                    creatediv2.setAttribute("class", "results");
                    creatediv2.style.backgroundImage = "url(" + recipe2img +")";
                    creatediv2.innerHTML = "<a target='blank' Id='link' href="+ recipe2link + ">" + recipe2 +"</a>";
                    flex2.appendChild(creatediv2);
    
                    //write second recipe 
                    var ingrlist2 = document.createElement("div");
                    ingrlist2.setAttribute("id", "ingrlist2");
                    ingrlist2.setAttribute("class", "ingr")
                    flex2.appendChild(ingrlist2);
    
                    //write ingr list 
                    for( i=0; i < recipe2ingr.length; i++){
                        var ingr2 = document.createElement("P");
                        ingr2.textContent = recipe2ingr[i];
                        ingrlist2.appendChild(ingr2);

                    }

                    //make recipe2 invisible until hover
                document.getElementById("ingrlist2").style.visibility ="hidden"

                //recipe event listeners for second recipe 
                  document.getElementById("thumb2").addEventListener("mouseover", function(){
                  document.getElementById("ingrlist2").style.visibility = "visible";
                  });

                  document.getElementById("thumb2").addEventListener("mouseout", function(){
                  document.getElementById("ingrlist2").style.visibility = "hidden";
                  });


                    //write third file 
                    var flex3 = document.createElement("div");
                    flex3.setAttribute("class", "flex");
                    group.appendChild(flex3);
    
                    //write third thumb
                    var creatediv3 = document.createElement("div");
                    creatediv3.setAttribute("Id","thumb3");
                    creatediv3.setAttribute("class", "results");
                    creatediv3.style.backgroundImage = "url(" + recipe3img +")";
                    creatediv3.innerHTML = "<a target='blank' Id='link' href="+ recipe3link + ">" + recipe3 +"</a>";
                    flex3.appendChild(creatediv3);
    
                    //write third recipe 
                    var ingrlist3 = document.createElement("div");
                    ingrlist3.setAttribute("id", "ingrlist3");
                    ingrlist3.setAttribute("class", "ingr")
                    flex3.appendChild(ingrlist3);
    
                    //write ingr list 
                    for( i=0; i < recipe3ingr.length; i++){
                        var ingr3 = document.createElement("P");
                        ingr3.textContent = recipe3ingr[i];
                        ingrlist3.appendChild(ingr3);

                    }

                    //make recipe3 invisible until hover
                    document.getElementById("ingrlist3").style.visibility ="hidden"

                    //recipe event listeners for third recipe 
                    document.getElementById("thumb3").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist3").style.visibility = "visible";
                    });

                    document.getElementById("thumb3").addEventListener("mouseout", function(){
                    document.getElementById("ingrlist3").style.visibility = "hidden";
                    });


                     //write Fourth file 
                     var flex4 = document.createElement("div");
                     flex4.setAttribute("class", "flex");
                     group.appendChild(flex4);
     
                     //write Fourth thumb
                     var creatediv4 = document.createElement("div");
                     creatediv4.setAttribute("Id","thumb4");
                     creatediv4.setAttribute("class", "results");
                     creatediv4.style.backgroundImage = "url(" + recipe4img +")";
                     creatediv4.innerHTML = "<a target='blank' Id='link' href="+ recipe4link + ">" + recipe4 +"</a>";
                     flex4.appendChild(creatediv4);
     
                     //write fourth recipe 
                     var ingrlist4 = document.createElement("div");
                     ingrlist4.setAttribute("id", "ingrlist4");
                     ingrlist4.setAttribute("class", "ingr")
                     flex4.appendChild(ingrlist4);
     
                     //write ingr list 
                     for( i=0; i < recipe4ingr.length; i++) {
                         var ingr4 = document.createElement("P");
                         ingr4.textContent = recipe4ingr[i];
                         ingrlist4.appendChild(ingr4);
 
                     }
 
                     //make recipe4 invisible until hover
                     document.getElementById("ingrlist4").style.visibility ="hidden"
 
                     //recipe event listeners for fourth recipe 
                     document.getElementById("thumb4").addEventListener("mouseover", function(){
                     document.getElementById("ingrlist4").style.visibility = "visible";
                     });
 
                     document.getElementById("thumb4").addEventListener("mouseout", function(){
                     document.getElementById("ingrlist4").style.visibility = "hidden";
                     });

                     
                    //write fifth
                    var flex5 = document.createElement("div");
                    flex5.setAttribute("class", "flex");
                    group.appendChild(flex5);
    
                    //write Fourth thumb
                    var creatediv5 = document.createElement("div");
                    creatediv5.setAttribute("Id","thumb5");
                    creatediv5.setAttribute("class", "results");
                    creatediv5.style.backgroundImage = "url(" + recipe5img +")";
                    creatediv5.innerHTML = "<a target='blank' Id='link' href="+ recipe5link + ">" + recipe5 +"</a>";
                    flex5.appendChild(creatediv5);
    
                    //write Fifth recipe 
                    var ingrlist5 = document.createElement("div");
                    ingrlist5.setAttribute("id", "ingrlist5");
                    ingrlist5.setAttribute("class", "ingr")
                    flex5.appendChild(ingrlist5);
    
                    //write ingr list 
                    for( i=0; i < recipe4ingr.length; i++) {
                        var ingr5 = document.createElement("P");
                        ingr5.textContent = recipe5ingr[i];
                        ingrlist5.appendChild(ingr5);

                    }

                    //make recipe5 invisible until hover
                    document.getElementById("ingrlist5").style.visibility ="hidden"

                    //recipe event listeners for fifth recipe 
                    document.getElementById("thumb5").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist5").style.visibility = "visible";
                    });

                    document.getElementById("thumb5").addEventListener("mouseout", function(){
                    document.getElementById("ingrlist5").style.visibility = "hidden";
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
       
       




