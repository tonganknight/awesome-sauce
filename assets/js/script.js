//this solves the drag function needed to refresh the first time. This will reload the page once it is opened, but only once 
function refreshpage() {
   
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    
    var now = Date.now();
   
    var tenSec = 10 * 1000;

    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
    location.reload();
    } else {}
    }
    refreshpage();


// search logic check. this shows that the search bar has not been clocked yet 
var searchyes = false;

window.localStorage.setItem("searchyes", "false")

// this deletes all search results. Its used later if the search button has already been clicked
function refreshsearch (){
    
    $("#dashboard div").html("");
};









function foodsearch(){

    //this checks weather the search button has already been clocked.
    var searchcheck = window.localStorage.getItem("searchyes");

    // if the search button as already been used once, this removes the old results, so the new search will replace them
    if(searchcheck == "true"){
        refreshsearch();
    

    }





    var searchbar = document.getElementById("searchbar")
    var search = searchbar.value;
    search = search.trim();
        
    //Radio Button Logic 

    var radiochoice1 = document.getElementById("alcohol");
    var radiochoice2 = document.getElementById("lowsugar");
    var radiochoice3 = document.getElementById("lowfat");
    
    //if calories is checked
    var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e"

    if(radiochoice1.checked){

        var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e&health=alcohol-free"
        
    }
    
    if(radiochoice2.checked){
        var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e&health=sugar-conscious"

    }
    
    if(radiochoice3.checked){
        var apiUrl ="https://api.edamam.com/search?q=" + search + "&app_id=" + "04d0cb88" + "&app_key=" + "26b371c06377eb2bd8223951d66a129e&hdiet=low-fat"

    }


        

    



        fetch(apiUrl).then (function(response){
            if (response.ok) {

                response.json().then(function(data) {
                    console.log(data)




            if( data.count < 5 ){
                document.getElementById("modaldiv").classList.add("is-active");
                document.getElementById("modal-off").addEventListener("click", function(){
                document.getElementById("modaldiv").classList.remove("is-active");

                });
            }

            
                
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
                creatediv.setAttribute("Id","thumb0");
                creatediv.setAttribute("class", "results");
                creatediv.setAttribute("draggable", "true");
                creatediv.style.backgroundImage = "url(" + recipe1img +")";
                creatediv.innerHTML = "<a target='blank' Id='link0' href="+ recipe1link + ">" + recipe1 +"</a>";
                flex1.appendChild(creatediv);

                $("#thumb0").draggable({
                    opacity: 0.5,
                    revert: true,
                    helper: "clone",
                  
                
                   
                });

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
                    document.getElementById("thumb0").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist1").style.visibility = "visible";
                    });

                    document.getElementById("thumb0").addEventListener("mouseout", function(){
                       
                    document.getElementById("ingrlist1").style.visibility = "hidden";
                    
                    });

                  

                   
                    
                   //write second file
                    var flex2 = document.createElement("div");
                    flex2.setAttribute("class", "flex");
                    group.appendChild(flex2);
    
                    //write second thumb
                    var creatediv2 = document.createElement("div");
                    creatediv2.setAttribute("Id","thumb1");
                    creatediv2.setAttribute("class", "results");
                    creatediv2.setAttribute("draggable", "true");
                    creatediv2.style.backgroundImage = "url(" + recipe2img +")";
                    creatediv2.innerHTML = "<a target='blank' Id='link1' href="+ recipe2link + ">" + recipe2 +"</a>";
                    flex2.appendChild(creatediv2);

                    $("#thumb1").draggable({
                        opacity: 0.5,
                        revert: true,
                        helper: "clone",
                       
                    });
    
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
                  document.getElementById("thumb1").addEventListener("mouseover", function(){
                  document.getElementById("ingrlist2").style.visibility = "visible";
                  });

                  document.getElementById("thumb1").addEventListener("mouseout", function(){
                  document.getElementById("ingrlist2").style.visibility = "hidden";
                  });

                 



                    //write third file 
                    var flex3 = document.createElement("div");
                    flex3.setAttribute("class", "flex");
                    group.appendChild(flex3);
    
                    //write third thumb
                    var creatediv3 = document.createElement("div");
                    creatediv3.setAttribute("Id","thumb2");
                    creatediv3.setAttribute("draggable", "true");
                    creatediv3.setAttribute("class", "results");
                    creatediv3.style.backgroundImage = "url(" + recipe3img +")";
                    creatediv3.innerHTML = "<a target='blank' Id='link' href="+ recipe3link + ">" + recipe3 +"</a>";
                    flex3.appendChild(creatediv3);
    
                    //write third recipe 
                    var ingrlist3 = document.createElement("div");
                    ingrlist3.setAttribute("id", "ingrlist3");
                    ingrlist3.setAttribute("class", "ingr")
                    flex3.appendChild(ingrlist3);

                    $("#thumb2").draggable({
                        opacity: 0.5,
                        revert: true,
                        helper: "clone",
                       
                    });
    
                    //write ingr list 
                    for( i=0; i < recipe3ingr.length; i++){
                        var ingr3 = document.createElement("P");
                        ingr3.textContent = recipe3ingr[i];
                        ingrlist3.appendChild(ingr3);

                    }

                    //make recipe3 invisible until hover
                    document.getElementById("ingrlist3").style.visibility ="hidden"

                    //recipe event listeners for third recipe 
                    document.getElementById("thumb2").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist3").style.visibility = "visible";
                    });

                    document.getElementById("thumb2").addEventListener("mouseout", function(){
                    document.getElementById("ingrlist3").style.visibility = "hidden"
                    });

                    
                    


                     //write Fourth file 
                     var flex4 = document.createElement("div");
                     flex4.setAttribute("class", "flex");
                     group.appendChild(flex4);
     
                     //write Fourth thumb
                     var creatediv4 = document.createElement("div");
                     creatediv4.setAttribute("Id","thumb3");
                     creatediv4.setAttribute("class", "results");
                     creatediv4.setAttribute("draggable", "true");
                     creatediv4.style.backgroundImage = "url(" + recipe4img +")";
                     creatediv4.innerHTML = "<a target='blank' Id='link' href="+ recipe4link + ">" + recipe4 +"</a>";
                     flex4.appendChild(creatediv4);
     
                     //write fourth recipe 
                     var ingrlist4 = document.createElement("div");
                     ingrlist4.setAttribute("id", "ingrlist4");
                     ingrlist4.setAttribute("class", "ingr")
                     flex4.appendChild(ingrlist4);

                     $("#thumb3").draggable({
                        opacity: 0.5,
                        revert: true,
                        helper: "clone",
                       
                    });
     
                     //write ingr list 
                     for( i=0; i < recipe4ingr.length; i++) {
                         var ingr4 = document.createElement("P");
                         ingr4.textContent = recipe4ingr[i];
                         ingrlist4.appendChild(ingr4);
 
                     }
 
                     //make recipe4 invisible until hover
                     document.getElementById("ingrlist4").style.visibility ="hidden"
 
                     //recipe event listeners for fourth recipe 
                     document.getElementById("thumb3").addEventListener("mouseover", function(){
                     document.getElementById("ingrlist4").style.visibility = "visible";
                     });
 
                     document.getElementById("thumb3").addEventListener("mouseout", function(){
                     document.getElementById("ingrlist4").style.visibility = "hidden";
                     });

                     

                     
                    //write fifth
                    var flex5 = document.createElement("div");
                    flex5.setAttribute("class", "flex");
                    group.appendChild(flex5);
    
                    //write Fourth thumb
                    var creatediv5 = document.createElement("div");
                    creatediv5.setAttribute("Id","thumb4");
                    creatediv5.setAttribute("class", "results");
                    creatediv5.style.backgroundImage = "url(" + recipe5img +")";
                    creatediv5.innerHTML = "<a target='blank' Id='link' href="+ recipe5link + ">" + recipe5 +"</a>";
                    flex5.appendChild(creatediv5);
    
                    //write Fifth recipe 
                    var ingrlist5 = document.createElement("div");
                    ingrlist5.setAttribute("id", "ingrlist5");
                    ingrlist5.setAttribute("class", "ingr")
                    
                    flex5.appendChild(ingrlist5);

                    $("#thumb4").draggable({
                        opacity: 0.5,
                        revert: true,
                        helper: "clone",
                       
                    });
    
                    //write ingr list 
                    for( i=0; i < recipe4ingr.length; i++) {
                        var ingr5 = document.createElement("P");
                        ingr5.textContent = recipe5ingr[i];
                        ingrlist5.appendChild(ingr5);

                    }

                    //make recipe5 invisible until hover
                    document.getElementById("ingrlist5").style.visibility ="hidden"

                    //recipe event listeners for fourth recipe 
                    document.getElementById("thumb4").addEventListener("mouseover", function(){
                    document.getElementById("ingrlist5").style.visibility = "visible";
                    });

                    document.getElementById("thumb4").addEventListener("mouseout", function(){
                    document.getElementById("ingrlist5").style.visibility = "hidden";
                    }); 

                   


                    window.localStorage.setItem("searchyes", "true")
                });

            } else {
                document.getElementById("modaldiv").addClass("is-active");
                document.getElementById("thedeal").textContent = "It looks like we are having trouble connecting you. You might want to try again later"
                document.getElementById("modal-off").addEventListener("click", function(){
                document.getElementById("modaldiv").removeClass("is-active");

                });


               }
           })
           .catch(function(error) {

            document.getElementById("modaldiv").classList.add("is-active");
            document.getElementById("thedeal").textContent = "It looks like we are having trouble connecting you. You might need to try again later"
            document.getElementById("modal-off").addEventListener("click", function(){
            document.getElementById("modaldiv").classList.remove("is-active");

            });
               
           }); 
       }


       //Event Listeners 
           //search button  listener 
               document.getElementById("search").addEventListener("click", function(){
                   foodsearch();
       
               });
       
              

$("#fav").droppable({
    accept: ".results",
    tolerance: "touch",
    drop: function(event, ui){
   
        var dropthat = $(ui.draggable).clone();

        dropthat.addClass("cankill")
        dropthat.removeClass("results")

        $("#fav").append(dropthat);

        //add event listener to be thrown away
        $(dropthat).draggable({
            opacity: 0.5,
            revert: true
            
        })

        
        
        document.getElementById("fav").style.backgroundColor = "lightgrey"
    },
    over: function(event, ui){
        document.getElementById("fav").style.backgroundColor = "var(--secondarycolor)"
    },
    out:function(event, ui){
        document.getElementById("fav").style.backgroundColor = "lightgrey"
    }

})



// Logic for Trashcan
$("#dump").droppable({
    accept: ".cankill",
    tolerance: "touch",
    drop: function(event, ui){
        ui.draggable.remove();
        document.getElementById("dump").style.backgroundColor = "red"
    },
    over: function(event, ui){
        document.getElementById("dump").style.backgroundColor = "blue"
    },
    out:function(event, ui){
        document.getElementById("dump").style.backgroundColor = "red"
    }


})



//save logic 

 //save button
 document.getElementById("greenbutton").addEventListener("click", function(){
    //get how many divs are in the fav
   
       

       var fav =document.getElementById("fav");

       //need to rewrite ids for loading

       var divcount = document.getElementById("fav").childElementCount;
       var vin = 0

    //save div count for later 
       window.localStorage.setItem("favcount", divcount);
       
       if(divcount == 1){
        var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
          
       }
       

           if(divcount == 2){
            var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
           var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;

           }
           if(divcount == 3){
            var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
           var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
           var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
           }
           if(divcount == 4){
            var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
               var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
               var thirdchild= document.getElementById("1").nextElementSibling.id = vin +2;
               var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3
           }
           if(divcount ==5){
            var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
               var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
               var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
               var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
               var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
            }
            if(divcount == 6){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
             }
            if(divcount == 7){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
                var seventhchild = document.getElementById("5").nextElementSibling.id = vin +6;
             }
            if(divcount == 8){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
                var seventhchild = document.getElementById("5").nextElementSibling.id = vin +6;
                var eighthchild = document.getElementById("6").nextElementSibling.id = vin +7;
            }
            if(divcount == 9){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
                var seventhchild = document.getElementById("5").nextElementSibling.id = vin +6;
                var eighthchild = document.getElementById("6").nextElementSibling.id = vin +7;
                var ninethchild = document.getElementById("6").nextElementSibling.id = vin +8;                           
            }
            if(divcount == 10){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
                var seventhchild = document.getElementById("5").nextElementSibling.id = vin +6;
                var eighthchild = document.getElementById("6").nextElementSibling.id = vin +7;
                var ninethchild = document.getElementById("7").nextElementSibling.id = vin +8;  
                var tenthchild = document.getElementById("8").nextElementSibling.id = vin +9;                          
            }
            if(divcount > 10){
                var firstchild = document.getElementById("fav").firstElementChild.setAttribute("id", vin);
                var secondchild = document.getElementById("0").nextElementSibling.id = vin +1;
                var thirdchild = document.getElementById("1").nextElementSibling.id = vin +2;
                var fourthchild = document.getElementById("2").nextElementSibling.id = vin +3;
                var fifthchild = document.getElementById("3").nextElementSibling.id = vin +4;
                var sixthchild = document.getElementById("4").nextElementSibling.id = vin +5;
                var seventhchild = document.getElementById("5").nextElementSibling.id = vin +6;
                var eighthchild = document.getElementById("6").nextElementSibling.id = vin +7;
                var ninethchild = document.getElementById("7").nextElementSibling.id = vin +8;  
                var tenthchild = document.getElementById("8").nextElementSibling.id = vin +9; 

                                document.getElementById("modaldiv").classList.add("is-active");
                                document.getElementById("thedeal").textContent = "We are Sorry... We only support 10 saved recipes in this version"
                                document.getElementById("modal-off").addEventListener("click", function(){
                                document.getElementById("modaldiv").classList.remove("is-active") 
                            });

                }
                        




       


         //loop through each 
          for(i=0; i < divcount; i++){


           
           
          var thumbtitle = document.getElementById("" +[i]).textContent;
          window.localStorage.setItem("thumbtitle" + [i], thumbtitle);
          var thumbimage = document.getElementById([i]).style.backgroundImage;
          window.localStorage.setItem("thumbimage" + [i], thumbimage);
          var thumblink = document.getElementById([i]).firstChild;
          window.localStorage.setItem("thumblink" + [i], thumblink);

 }
      

});


       
// loading our local storage
function Load(){
    //declare how many we had stored in the fav bar 
    var getcount = window.localStorage.getItem("favcount");
    
    //run a loop to write a division plus all the content we have stored for each one 
    for(i=0; i< getcount; i++){

        //declarations 
        var favbar = document.getElementById("fav");
        var gettitle = window.localStorage.getItem("thumbtitle" +[i]);
        var getimage = window.localStorage.getItem("thumbimage" + [i]);
        var getlink = window.localStorage.getItem("thumblink" + [i]);

        //write the division, and add all the attributes.
        var loaddiv = document.createElement("div");
        loaddiv.setAttribute ("id", [i]);
        loaddiv.setAttribute("class", "cankill");
        //loaddiv.setAttribute("draggable", "true");
        loaddiv.style.backgroundImage = getimage;

        //add our link to the new created div
        loaddiv.innerHTML = "<a target='blank' Id='link'" + " href=" + getlink + ">" + gettitle + "</a>";
       

        //append it to the bar. 
        favbar.appendChild(loaddiv);

      //add eventlistener
        $("#" + [i]).draggable({
            opacity: 0.5,
            revert: true
            
        });

       

    }



}   
       
       




// we want this to load the data on the page first 
Load();
