const registerUser = $("#registerSubmit");
const infoUser = $("#userName");
const infoPassword = $("#password");



registerUser.on("click", () =>{
    event.preventDefault()
    let newUser = {
        userName: infoUser.val(),
        password: infoPassword.val()
    }
    insertNewUser(newUser)
    window.location.href = "/"
})

function insertNewUser(userRegistering) {
    $.post("/api/newUser", userRegistering, () => {})
}
