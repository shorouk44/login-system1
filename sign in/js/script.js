var verifyEmail = document.getElementById("email");
var verifyPassword = document.getElementById("password");
var signInBtn = document.getElementById("signInBtn");

var usersArray = [];

var storageArray = JSON.parse(localStorage.getItem("users"));

if (storageArray !== null) {
  usersArray = storageArray;
}

function validateUserData() {
  for (var i = 0; i < usersArray.length; i++) {
    if (
      usersArray[i].email == verifyEmail.value &&
      usersArray[i].password == verifyPassword.value
    ) {
      localStorage.setItem("loggedInUser", usersArray[i].name);
      window.location.href = "/login%20system/welcome/index2.html"
      return;
    }
  } 
  alert("Invalid email or password!");

}
signInBtn.addEventListener("click", () => {
  validateUserData();
});
