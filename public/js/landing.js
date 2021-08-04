function getLoggedInUser(){
    $.get("/api/user_data").then(function(data) {
        console.log(data)
    
      $("#welcomeUser").text(" " + data.userName);
    });
    }
    
    getLoggedInUser()