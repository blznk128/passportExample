const userName = $("#userName");
const userPassword = $("#password");

function logIn() {
    event.preventDefault();
    var userData = {
      infoUserName: userName.val().trim(),
      infoPassword: userPassword.val().trim()
    };
    console.log(userData)
    loginUser(userData.infoUserName, userData.infoPassword);
    userName.val("");
    userPassword.val("");
}

function loginUser(userName, password) {
  $.post("/api/login", {
    userName: userName,
    password: password
  }).then(function(data) {
    window.location.replace(data);
  }).catch(function(err) {
    console.log(err);
  });
}