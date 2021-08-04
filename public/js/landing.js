function getLoggedInUser(){
    $.get("/api/user_data").then(function(data) {
      $("#welcomeUser").text(" " + data.userName);
    });
    }
    
    getLoggedInUser()