var animalContainer = document.getElementById("animal-info");
var pageCounter = 1;


var btn = document.getElementById("btn");
btn.addEventListner("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
  ourRequest.onload = function(){
    if(ourRequest.status => 200 && ourRequest.status < 400){
      //(This delivers response as a string// var ourData = ourRequest.responseText;
      //Instead use JSON object
      var ourData = JSON.parse(ourRequest.responseText)
      renderHTML(ourData);
    } else {
      console.log("error");
    }


  };
  ourRequest.onerror = function(){
    console.log("connection-error");

  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3){
    btn.classList.add("hide-me");
  };
})


var renderHTML = function(data){
  var htmlString = "";
    for (i = 0; i < data.length; i++){
      htmlString += "<p>" + data[i].name + " is a " + data[i].species + "that likes to eat ";

      for(ii = 0; ii < data[i].foods.likes.length; ii++){
        if(ii = 0 ){
          htmlString += data[i].foods.likes[ii];
        } else {
          htmlString += " and " + data[i].foods.likes[ii];
        }
      }
    htmlString += " and dislikes "

      for(ii = 0; ii < data[i].foods.dislikes.length; ii++){
        if(ii = 0 ){
          htmlString += data[i].foods.dislikes[ii];
        } else {
          htmlString += " and " + data[i].foods.dislikes[ii];
        }
      }

    htmlString +=".</p>";
    }
  animalContainer.insertAdjacentHTML('beforeend', htmlString)
  animal-info .innerHTML

}
