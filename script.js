
       

       
var APIKey = "53e07df4a3b3230ec78d8d73899f5a04";

        // Here we are building the URL we need to query the database

    // Need Jquery request for database
    // Need to read the input of the input html on button click
    // Need to take that input and use it as the request
    // Need to take input and place it as a button in a Div that populates the left of the screen
    // Make the appended button functional to redo the search request
    // Need to save the most recent search to local storage and append it to the front as if it were just searched

var cityName = "";
var recentSearch = "";


$("#citySub").click(function(){
  event.preventDefault();
  cityName =  $("#cityInp").val();
  recentSearch = $("#cityInp").val();
  localStorage.setItem("Save", recentSearch);
  console.log(cityName)
  // $("#cityInp").val("")
  var cityLat = "";
  var cityLon = "";
  var cityBtn = "<button>Reload</button>";
  // var cityTxt = "<p>" + cityName + "</p>";
  
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" + cityName + "&appid=" + APIKey;

 $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          
          cityLat = response.coord.lat;
          cityLon = response.coord.lon;
          $("#cityData").text(response.name);
console.log(cityLat);
console.log(cityLon);

var secondQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon +"&exclude=alerts&appid=" + APIKey;   
console.log(secondQuery);
      $.ajax({
        url: secondQuery,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response1) {
          // Log the queryURL

          objResp = response1;
          console.log(objResp);

          // // Log the resulting object
          // console.log(response1);

          var tempF = (objResp.current.temp - 273.15) * 1.80 + 32;
          var day1F = (response1.daily[1].temp.day - 273.15) * 1.80 + 32;
          var day2F = (response1.daily[2].temp.day - 273.15) * 1.80 + 32;
          var day3F = (response1.daily[3].temp.day - 273.15) * 1.80 + 32;
          var day4F = (response1.daily[4].temp.day - 273.15) * 1.80 + 32;
          var day5F = (response1.daily[5].temp.day - 273.15) * 1.80 + 32;
  
          $("#cityData").text(cityName);
          $("#tempData").text(tempF.toFixed(2) + "F");
          $("#humData").text(objResp.current.humidity + "%");
          $("#windData").text(objResp.current.wind_speed + "m/s");
          $("#uvData").text(objResp.current.uvi);
          $("#prevBtns").append("<div class='newBtn'>" + cityName + cityBtn + "</div>");


          $("#d1Data").text(day1F.toFixed(2) + "F")
          $("#d2Data").text(day2F.toFixed(2) + "F")
          $("#d3Data").text(day3F.toFixed(2) + "F")
          $("#d4Data").text(day4F.toFixed(2) + "F")
          $("#d5Data").text(day5F.toFixed(2) + "F")
        })

      });
      });
      
      // $(".newBtn").click(function(){
      //   event.preventDefault();
      //   var newCity = "";
      //   newCity =  $(this).val();
      //   console.log(newCity);
      //   // $("#cityInp").val("")
      //   var cityLat = "";
      //   var cityLon = "";
        
      // var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      //           "q=" + cityName + "&appid=" + APIKey;
      
      //  $.ajax({
      //         url: queryURL,
      //         method: "GET"
      //       })
      //         .then(function(response) {
                
      //           cityLat = response.coord.lat;
      //           cityLon = response.coord.lon;
      //           $("#cityData").text(response.name);
      // console.log(cityLat);
      // console.log(cityLon);
      // var secondQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon +"&exclude=alerts&appid=" + APIKey;   
      // console.log(secondQuery);
      //       $.ajax({
      //         url: secondQuery,
      //         method: "GET"
      //       })
      //         // We store all of the retrieved data inside of an object called "response"
      //         .then(function(response1) {
      //           // Log the queryURL
      
      //           objResp = response1;
      //           console.log(objResp);
      
      
      //           var tempF = (objResp.current.temp - 273.15) * 1.80 + 32;
        
      //           $("#cityData").text(cityName);
      //           $("#tempData").text(tempF.toFixed(2));
      //           $("#humData").text(objResp.current.humidity + "%");
      //           $("#windData").text(objResp.current.wind_speed + "meters/second");
      //           $("#uvData").text(objResp.current.uvi);
      //           $("#prevBtns").append("<button class='newBtn'>" + cityName + "</button>");
      //         })
      
      //       });
           

      // })