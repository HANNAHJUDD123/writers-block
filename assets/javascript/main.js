$(document).ready(function () {
    console.log('hello world');

    // global variables

    // functions___________________________________________________________________________



    // functions end here _________________________________________________________________

    // functions to make views


    // functions to make views end here ___________________________________________________

    // API CALLS FUNCTIONS__________________________________________________________________

    // andrew below here

    $.ajax({
        url: "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece",
        method: "GET"
    }).done(function (response) {
        console.log(response.Title);
    });

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

    // prathima below here


    // kyle below here


    // API CALLS END HERE_____________________________________________________________________


    // listeners______________________________________________________________________________


    // listeners end here ____________________________________________________________________


    // start main process___________________________________________________________________________

});